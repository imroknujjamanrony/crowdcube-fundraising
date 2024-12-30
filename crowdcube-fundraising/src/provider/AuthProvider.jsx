/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext({});
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Show toast notifications
  const showToast = (message, type = "info") => {
    const toastTypes = {
      success: toast.success,
      error: toast.error,
      warn: toast.warn,
      info: toast.info,
    };
    (toastTypes[type] || toast.info)(message);
  };

  // Create a new user
  const createNewUser = async (email, password, name, photoUrl) => {
    setLoading(true); // Start loading
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: name, photoURL: photoUrl });
      setUser({ ...res.user, displayName: name, photoURL: photoUrl });
      showToast("Account created successfully!", "success");
      logOut();
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // User login
  const userLogIn = async (email, password) => {
    setLoading(true); // Start loading
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      showToast("Logged in successfully", "success");
      return res;
    } catch (error) {
      showToast(error.message, "error");
      throw error;
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // User logout
  const logOut = async () => {
    setLoading(true); // Start loading
    try {
      await signOut(auth);
      setUser(null);
      showToast("Logged out successfully!", "success");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Google Sign-In
  const signInWithGoogle = async () => {
    setLoading(true); // Start loading
    try {
      const res = await signInWithPopup(auth, googleProvider);
      setUser(res.user);
      showToast("Logged in successfully with Google", "success");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Auth state determined
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogIn,
    logOut,
    signInWithGoogle,
    showToast,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

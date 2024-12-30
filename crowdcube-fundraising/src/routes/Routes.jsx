import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Homepage from "../components/Homepage";
import Register from "../components/Register";
import LogIn from "../components/LogIn";
import Allcampaign from "../components/Allcampaign";
import MyCampaign from "../components/MyCampaign";
import AddNewCampaign from "../components/AddNewCampaign";
import Error from "../components/Error";
import AuthLayout from "../mainLayout/AuthLayout";
import DetailsCampaign from "../components/DetailsCampaign";
import PrivateRoute from "./PrivateRoute";
import MyDonations from "../components/MyDonations";
import UpdateCampaign from "../components/UpdateCampaign";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () =>
          fetch(
            "https://crowdcube-fundraising-server.vercel.app/allrunningcampaign"
          ),
      },

      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <DetailsCampaign></DetailsCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crowdcube-fundraising-server.vercel.app/campaigns/${params.id}`
          ),
      },
      {
        path: "/campaigns",
        element: <Allcampaign></Allcampaign>,
        loader: () =>
          fetch("https://crowdcube-fundraising-server.vercel.app/allcampaigns"),
      },
      {
        path: "/addnewcampaign",
        element: (
          <PrivateRoute>
            <AddNewCampaign></AddNewCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycampaign",
        element: (
          <PrivateRoute>
            {" "}
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRoute>
            {" "}
            <MyDonations></MyDonations>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
          {
            path: "/auth/login",
            element: <LogIn></LogIn>,
          },
        ],
      },
      {
        path: "updateCampaign/:id",
        element: <UpdateCampaign></UpdateCampaign>,
        loader: ({ params }) =>
          fetch(
            `https://crowdcube-fundraising-server.vercel.app/campaigns/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

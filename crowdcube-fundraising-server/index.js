require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors());
app.use (cors({origin:["http://localhost:5173","https://crowdcube-fundraising.web.app"]}))
app.use(express.json());

// MongoDB connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hvkkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    // Collections
    const campaignCollection = client.db("campaignDB").collection("campaign");
    const userCollection = client.db("campaignDB").collection("users");
    const donatedCollection = client.db("campaignDB").collection("donationData");

    // Routes
    app.get("/allcampaigns", async (req, res) => {
      try {
        const cursor = campaignCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    //all running campaign route
    app.get("/allrunningcampaign", async (req, res) => {
      try {
        const cursor = campaignCollection.find().sort({ deadline: 1 }).limit(6);
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    //add new campaign
    app.post("/addnewcampaign", async (req, res) => {
      try {
        const newCampaign = req.body;
        const result = await campaignCollection.insertOne(newCampaign);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    //route to get single data
    app.get("/campaigns/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const campaign = await campaignCollection.findOne(query);
        if (!campaign) {
          return res.status(404).send({ message: "Campaign not found" });
        }
        res.send(campaign);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    //route to get create user data
    app.post("/users", async (req, res) => {
      try {
        const newUser = req.body;
        const result = await userCollection.insertOne(newUser);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    //route for post donation 
    app.post("/donations", async (req, res) => {
      try {
        const newDonation = req.body;
        const result = await donatedCollection.insertOne(newDonation);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    //route for find my campaign by email
    app.get("/mycampaigns", async (req, res) => {
      const { email } = req.query;
      try {
        const result = await campaignCollection.find({ userEmail: email }).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    //route for update my campaign
    app.put("/campaigns/:id", async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      try {
        const result = await campaignCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedData }
        );
        if (result.matchedCount === 0) {
          return res.status(404).send({ message: "Campaign not found" });
        }
        res.send({ message: "Campaign updated successfully", result });
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    //delete operation
    app.delete("/campaigns/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const result = await campaignCollection.deleteOne({ _id: new ObjectId(id) });
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // route for get my donation 
    app.get("/donations", async (req, res) => {
      const { email } = req.query;
      try {
        const result = await donatedCollection.find({ userEmail: email }).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("CrowdCube server is running");
});

app.listen(port, () => {
  console.log(`Crowdcube server is running on port ${port}`);
});



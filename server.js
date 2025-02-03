// const express = require('express');
// const path = require('path');

// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
require("dotenv").config();
const express = require("express");
const path = require("path");
const admin = require("firebase-admin");
const { OpenAI } = require("openai");
const { Pinecone, PineconeClient } = require("@pinecone-database/pinecone");

// Initialize Express
const app = express();
app.use(express.json()); // Allow JSON requests
app.use(express.static(path.join(__dirname, "build"))); // Serve React app

// Firebase Setup
const serviceAccount = require("./firebase-adminsdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const pinecone = new PineconeClient();
const index = pinecone.Index('gen-search'); // Replace with your index name

pinecone.init({
  apiKey: 'your-pinecone-api-key', // Replace with your actual Pinecone API key
  environment: 'us-east-1', // Replace with your Pinecone environment region (e.g., 'us-east-1')
  host: 'https://gen-search-5kbu9fz.svc.aped-4627-b74a.pinecone.io', // Your Pinecone host URL
});


app.post("/add-venue", async (req, res) => {
  try {
    const { id, name, description, location, price, capacity, features } = req.body;

    // Convert venue description into an AI vector embedding
    const response = await openai.embeddings.create({
      input: description,
      model: "text-embedding-ada-002",
    });
    const embedding = response.data[0].embedding;

    // Store venue data in Firestore
    await db.collection("venues").doc(id).set({
      id,
      name,
      description,
      location,
      price,
      capacity,
      features,
    });

    // Store the vector in Pinecone for AI search
    await index.upsert([{ id, values: embedding }]);

    res.json({ message: "Venue added successfully!" });
  } catch (error) {
    console.error("Error adding venue:", error);
    res.status(500).json({ error: "Failed to add venue" });
  }
});

// **1️⃣ Add Event to Firestore**
app.post("/add-event", async (req, res) => {
  try {
    const { id, name, date, location, description, organizer, participants, bookingStatus, price, type, features } = req.body;

    // Convert event description into AI vector embedding
    const response = await openai.embeddings.create({
      input: description,
      model: "text-embedding-ada-002",
    });
    const embedding = response.data[0].embedding;

    // Store event data in Firestore
    await db.collection("events").doc(id).set({
      id,
      name,
      date,
      location,
      description,
      organizer,
      participants,
      bookingStatus,
      price,
      type,
      features,
    });

    // Store the vector in Pinecone for AI search
    await index.upsert([{ id, values: embedding }]);

    res.json({ message: "Event added successfully!" });
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).json({ error: "Failed to add event" });
  }
});

// **2️⃣ AI-Powered Search API**
// **2️⃣ AI-Powered Search for Events**
app.post("/search-events", async (req, res) => {
  try {
    const { query } = req.body;

    // Convert search query into AI vector embedding
    const response = await openai.embeddings.create({
      input: query,
      model: "text-embedding-ada-002",
    });
    const queryEmbedding = response.data[0].embedding;

    // Search for matching events in Pinecone
    const results = await index.query({
      vector: queryEmbedding,
      topK: 5,
      includeMetadata: true,
    });

    // Get event details from Firestore
    const eventIds = results.matches.map((match) => match.id);
    const eventPromises = eventIds.map(async (id) => {
      const doc = await db.collection("events").doc(id).get();
      return doc.exists ? doc.data() : null;
    });
    const events = (await Promise.all(eventPromises)).filter(Boolean);

    res.json(events);
  } catch (error) {
    console.error("Error searching events:", error);
    res.status(500).json({ error: "Search failed" });
  }
});


// **🎯 Serve React App for all other routes**
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// **🚀 Start Server**
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

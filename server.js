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
const { Pinecone } = require("@pinecone-database/pinecone");

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

// OpenAI API Setup
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Pinecone Setup
const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pinecone.index("venues"); // Change to your Pinecone index name

// **1️⃣ API to Add Venues**
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

// **2️⃣ AI-Powered Search API**
app.post("/search", async (req, res) => {
  try {
    const { query } = req.body;

    // Convert search query into AI vector embedding
    const response = await openai.embeddings.create({
      input: query,
      model: "text-embedding-ada-002",
    });
    const queryEmbedding = response.data[0].embedding;

    // Search in Pinecone
    const results = await index.query({
      vector: queryEmbedding,
      topK: 5,
      includeMetadata: true,
    });

    // Get venue details from Firestore
    const venueIds = results.matches.map((match) => match.id);
    const venuePromises = venueIds.map(async (id) => {
      const doc = await db.collection("venues").doc(id).get();
      return doc.exists ? doc.data() : null;
    });
    const venues = (await Promise.all(venuePromises)).filter(Boolean);

    res.json(venues);
  } catch (error) {
    console.error("Error searching venues:", error);
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

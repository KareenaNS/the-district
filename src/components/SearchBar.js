import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, List, ListItem, CircularProgress } from "@mui/material";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/search", { query });
      setResults(response.data);
    } catch (error) {
      console.error("Search error:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <TextField
        fullWidth
        label="Search for venues..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <Button onClick={handleSearch} variant="contained" color="primary" style={{ marginTop: "10px" }}>
        Search
      </Button>

      {loading && <CircularProgress style={{ marginTop: "20px" }} />}

      <List>
        {results.map((venue) => (
          <ListItem key={venue.id}>
            <div>
              <h3>{venue.name}</h3>
              <p>{venue.description}</p>
              <p><strong>Location:</strong> {venue.location}</p>
              <p><strong>Price:</strong> ${venue.price}</p>
              <p><strong>Capacity:</strong> {venue.capacity} people</p>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchBar;

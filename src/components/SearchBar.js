// import React, { useState } from "react";
// import axios from "axios";
// import { TextField, Button, List, ListItem, CircularProgress } from "@mui/material";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post("https://the-district.onrender.com/search-events", { query });
//       setResults(response.data);
//     } catch (error) {
//       console.error("Search error:", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
//       <TextField
//         fullWidth
//         label="Search for events..."
//         variant="outlined"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyPress={(e) => e.key === "Enter" && handleSearch()}
//       />
//       <Button onClick={handleSearch} variant="contained" color="primary" style={{ marginTop: "10px" }}>
//         Search
//       </Button>

//       {loading && <CircularProgress style={{ marginTop: "20px" }} />}

//       <List>
//         {results.map((event) => (
//           <ListItem key={event.id}>
//             <div>
//               <h3>{event.name}</h3>
//               <p>{event.description}</p>
//               <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
//               <p><strong>Location:</strong> {event.location}</p>
//               <p><strong>Price:</strong> ${event.price}</p>
//               <p><strong>Participants:</strong> {event.participants}</p>
//             </div>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default SearchBar;


  
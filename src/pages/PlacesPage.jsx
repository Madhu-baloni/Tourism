import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CardComp from "../components/CardComp";
import places from "../DummyData/data";

function PlacesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Container>
        <Box style={{ padding: "20px", marginTop: "5rem" }}>
          <Box style={{ display: "flex", gap: { xs: "1rem" } }}>
            <Typography
              sx={{
                color: "rgb(23, 74, 131)",
                fontFamily: "cursive",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Top Places to Visit
            </Typography>
            <TextField
              label="Search Places"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "4rem",
            }}
          >
            {filteredPlaces.map((places, index) => (
              <CardComp
                key={index}
                id={places.id}
                name={places.name}
                image={places.image}
                description={places.description.slice(0, 90) + "..."}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default PlacesPage;

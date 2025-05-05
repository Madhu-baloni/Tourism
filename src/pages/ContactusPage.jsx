import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";

const ContactUsPage = () => {
  const [form, setForm] = useState({
    name: "",
    middlename: "",
    lastname: "",
    email: "",
    message: "",
    number: "",
    countryCode: "+91",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    alert("Thank you for contacting us!");
    setForm({
      name: "",
      middlename: "",
      lastname: "",
      email: "",
      message: "",
      number: "",
      countryCode: "+91",
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 16 }}>
      <Paper elevation={3} sx={{ mb: 2, p: 8, maxHeight: "52" }}>
        <Typography
          sx={{
            color: "rgb(23, 74, 123)",
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={5}>
            <Grid size={{ md: 6 }}>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
                type="text"
              />
            </Grid>
            <Grid size={{ md: 6 }}>
              <TextField
                label="Middle Name"
                name="middlename"
                value={form.middlename}
                onChange={handleChange}
                fullWidth
                type="text"
              />
            </Grid>
            <Grid size={{ md: 12 }}>
              <TextField
                label="Last Name"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                fullWidth
                required
                type="text"
              />
            </Grid>
            <Grid size={{ md: 12 }}>
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                type="email"
                required
              />
            </Grid>

            <Grid size={{ md: 4, xs: 12 }}>
              <Select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                label="Country Code"
              >
                <MenuItem value="+1">🇺🇸 +1 (USA)</MenuItem>
                <MenuItem value="+91">🇮🇳 +91 (India)</MenuItem>
                <MenuItem value="+44">🇬🇧 +44 (UK)</MenuItem>
                <MenuItem value="+61">🇦🇺 +61 (Australia)</MenuItem>
              </Select>
            </Grid>
            <Grid size={{ md: 8 }}>
              <TextField
                label="Contact Number"
                name="number"
                value={form.number}
                onChange={handleChange}
                fullWidth
                type="tel"
                required
              />
            </Grid>

            <Grid size={{ md: 12 }}>
              <TextField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid size={{ md: 12 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "rgb(23, 74, 123)"  }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactUsPage;

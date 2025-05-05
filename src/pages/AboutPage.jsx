import React from "react";
import { Container, Typography, Box, Grid, Avatar, Paper } from "@mui/material";
const AboutPage = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 20, mb: 10, position: "sticky" }}>
        <Paper sx={{ p: 4, height: { xs: "67rem", md: "45rem" } }}>
          <Typography
            sx={{
              color: "rgb(23, 74, 123)",
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "3rem",
              justifyContent: "flex-end",
              textAlign:'center'
            }}
          >
            About Us
          </Typography>

          <Typography sx={{ fontSize: "1.5rem", fontFamily: "monospace"}}>
            Welcome to our travel guide platform! We are passionate about
            exploring the world and helping others do the same. Whether you're
            looking for hidden gems, cultural insights, or travel tips — we’ve
            got you covered.
          </Typography>

          <Typography
            sx={{
              fontSize: "1.5rem",
              fontFamily: "monospace",
              alignItems: "justify",
            }}
          >
            Our mission is to inspire travelers to discover new destinations and
            connect with the world in meaningful ways. Each place listed here
            has been thoughtfully curated to bring you the best experience.
          </Typography>

          <Box sx={{ mt: 6 }}>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={3}
                sx={{ p: 3, textAlign: "center", marginTop: { xs: "-2rem" } }}
              >
                <Avatar
                  alt="Madhu"
                  src="https://media.licdn.com/dms/image/v2/D5603AQHAkxIL54IgzA/profile-displayphoto-shrink_200_200/B56ZXQX5LlGQAY-/0/1742957681306?e=2147483647&v=beta&t=BiIq4DCBKjbHbjoae2ZVxwCWAhjuUv47xUzSfEI9KLE"
                  sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                />
                <Typography
                  sx={{
                    color: "rgb(23, 74, 131)",
                    fontFamily: "cursive",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  MADHU BALONI
                </Typography>
                <Typography>CEO & Co - Founder</Typography>
              </Paper>
            </Grid>
          </Box>
        </Paper>
      </Container>
      {/* </Box> */}
    </>
  );
};

export default AboutPage;

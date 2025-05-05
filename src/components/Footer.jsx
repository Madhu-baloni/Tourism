import React from "react";
import styles from "./Footer.module.css";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
function Footer() {
  return (
    <Box className={styles.box}>
      <Container>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ fontSize: "1rem" }}>
              Get Connected with us on Social Media
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;

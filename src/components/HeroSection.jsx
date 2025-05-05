import React from "react";
import {
  Box,
  Typography,
  Grid,
  CardContent,
  Card,
  Button,
  Container,
} from "@mui/material";
import styles from "./HeroSection.module.css";
import myImage from "./assests/heroimg.jpg";
import image from "./assests/image2.jpg";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <>
      {/* <Box sx={{ flexGrow: 1, minHeigth: "100vh", p: 1 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={styles.maingrid}
        >
          <Grid size={{ xs: 12, md: 6 }} sx = {{backgroundColor : "aliceblue"}}>
            <Typography
              sx={{
                color: "rgb(23, 74, 131)",
                fontFamily: "cursive",
                fontSize: "3rem",
              }}
            >
              Explore with us
            </Typography>
            <Typography sx={{ fontSize: "1rem", fontFamily: "monospace",  }}>
              We are a team of passionate innovators focused on building
              reliable and sustainable tech solutions. With years of experience
              and a commitment to excellence, we help businesses thrive in a
              digital-first world.
            </Typography>
            <Typography sx={{ fontSize: "1rem", fontFamily: "monospace" }}>
              From software development to cloud strategy and product design —
              we do it all. Join us on this journey!
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <img src={myimage} alt="HomeImage" className={styles.img} />
          </Grid>
        </Grid>
      </Box> */}
      {/* <Box>
        <Grid>
          <Grid>

          </Grid>
          <Grid>

          </Grid>
        </Grid>
      </Box> */}
      <Container>
        <Box mt={3}>
          <Typography className={styles.mainheading}>
            Explore with us
          </Typography>
          <Box className={styles.box}>
            <Grid container spacing={6} alignItems={"center"} gap={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card className={styles.card}>
                  <CardContent>
                    <img
                      src={myImage}
                      className={styles.img}
                      alt="herosectionImage"
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography className={styles.text}>
                      Rishikesh is a city in India’s northern state of
                      Uttarakhand, in the Himalayan foothills beside the Ganges
                      River. The river is considered holy, and the city is
                      renowned as a center for studying yoga and meditation.
                      Temples and ashrams (centers for spiritual studies) line
                      the eastern bank around Swarg Ashram, a traffic-free,
                      alcohol-free and vegetarian enclave upstream from
                      Rishikesh town.
                    </Typography>
                    <Link to="places">
                      <Button className={styles.btn}>Explore places</Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box className={styles.box}>
            <Grid container spacing={6} alignItems={"center"} gap={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography className={styles.text}>
                      Rishikesh is famously known as the "Yoga Capital of the
                      World" due to its strong spiritual heritage and numerous
                      yoga schools and ashrams. It's also a popular destination
                      for adventure activities like white-water rafting, and is
                      a gateway to the Himalayas for trekkers and nature
                      enthusiasts. Temples and ashrams (centers for spiritual
                      studies) line the eastern bank around Swarg Ashram, a
                      traffic-free, alcohol-free and vegetarian enclave upstream
                      from Rishikesh town.
                    </Typography>
                    <Link to="places">
                      <Button className={styles.btn}>Explore places</Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card className={styles.card}>
                  <CardContent>
                    <img
                      src={image}
                      className={styles.img}
                      alt="herosectionImage"
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HeroSection;

import React from "react";
import { Box, Grid } from "@mui/material";
import styles from "./Home.module.css";
import HeroSection from "./HeroSection";
import pliacesImg from "../DummyData/homePageDummyData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BodySection from "./BodySection";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
function Home() {
  return (
    <>
      <Box className={styles.mainbox}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={styles.maingrid}
        >
          <Carousel
            autoPlay={true}
            interval={1000}
            showThumbs={false}
            dynamicHeight={true}
            showArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <Box
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    left: 15,
                    top: "40%",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                    p: 1,
                    cursor: "pointer",
                    zIndex: 1,
                    fontWeight: "bold",
                  }}
                  aria-label={label}
                >
                  <ArrowBackIos fontSize="inherit" />
                </Box>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <Box
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    right: 15,
                    top: "40%",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                    p: 1,
                    cursor: "pointer",
                    zIndex: 1,
                    fontWeight: "bold",
                  }}
                  aria-label={label}
                >
                  <ArrowForwardIos fontSize="inherit" />
                </Box>
              )
            }
          >
            {placesImg.map((place, index) => (
              <Grid className={styles.grid1} key={index}>
                <img src={place.image} alt="HomeImage" className={styles.img} />
              </Grid>
            ))}
          </Carousel>
        </Grid>
        <HeroSection />
        <BodySection />
      </Box>
    </>
  );
}

export default Home;

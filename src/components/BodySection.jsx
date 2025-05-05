import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./BodySection.module.css";
import AdventurePlaces from "../DummyData/AdventurePlaces";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function BodySection() {
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Typography className={styles.heading}>What to do</Typography>
          <Grid container spacing={2} alignItems="center">
            <Carousel
              autoPlay={true}
              interval={2000}
              showThumbs={false}
              dynamicHeight={true}
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
                      zIndex: 2,
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
                      zIndex: 2,
                    }}
                    aria-label={label}
                  >
                    <ArrowForwardIos fontSize="inherit" />
                  </Box>
                )
              }
            >
              {AdventurePlaces.map((place, index) => (
                <Box
                  key={index}
                  style={{ position: "relative", overflow: "hidden" }}
                  className={styles.Imgwrapper}
                >
                  <img
                    src={place.image}
                    alt={`Adventure ${index}`}
                    className={styles.image}
                  />
                  <Typography className={styles.description}>
                    {place.description}
                  </Typography>
                </Box>
              ))}
            </Carousel>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default BodySection;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import places from "../DummyData/data";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import rishikeshPlaces from "../DummyData/placeDummyData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
function PlaceDetail() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    const selectedPlace = places.find((p) => p.id === parseInt(id));
    setPlace(selectedPlace);
  }, [id]);

  if (!place) return <p>Loading...</p>;

  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Box mt={4}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={place.image}
                  alt={place.name}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "6px",
                    objectFit: "cover",
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "sans-serif",
                      textAlign: "justify",
                      marginTop: "1rem",
                      lineHeight: 1.8,
                    }}
                  >
                    {place.description}
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            <Typography
              sx={{
                color: "rgb(23, 74, 131)",
                fontFamily: "cursive",
                fontWeight: "bold",
                fontSize: "3rem",
                mt: 8,
                mb: 2,
                textAlign: "center",
              }}
            >
              Nearest Places
            </Typography>

            <Carousel
              additionalTransfrom={0}
              infiniteLoop
              autoPlay
              autoPlaySpeed={1000}
              centerMode={!isMobile}
              centerSlidePercentage={isMobile ? 100 : 33.33}
              containerClass="carousel-container"
              draggable
              keyBoardControl
              minimumTouchDrag={80}
              swipeable
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
                    }}
                    aria-label={label}
                  >
                    <ArrowForwardIos fontSize="inherit" />
                  </Box>
                )
              }
            >
              {rishikeshPlaces.map((place, index) => (
                <Card
                  key={index}
                  sx={{
                    maxWidth: 400,
                    margin: "20px",
                    boxShadow: 3,
                    height: "100%",
                    maxHeight: 404,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={place.image}
                    alt={place.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {place.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Location:
                    </Typography>
                    <Typography variant="body2">{place.location}</Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Nearest Path:
                    </Typography>
                    <Typography variant="body2">{place.nearestPath}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default PlaceDetail;

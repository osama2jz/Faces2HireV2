import { Carousel } from "@mantine/carousel";
import React from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import { useStyles } from "./styles";
import Slide3 from "./Slide3";
import { useMediaQuery } from "@mantine/hooks";

export const Carousal = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 820px)");
  return (
    <Carousel
      withIndicators
      height={isMobile ? 500 : 600}
      p="0px"
      classNames={{ indicator: { backgroundColor: "red" } }}
    >
      <Carousel.Slide>
        <Slide1 />
      </Carousel.Slide>
      <Carousel.Slide>
        <Slide2 />
      </Carousel.Slide>
      <Carousel.Slide>
        <Slide3 />
      </Carousel.Slide>
    </Carousel>
  );
};

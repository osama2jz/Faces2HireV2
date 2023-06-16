import { Carousel } from "@mantine/carousel";
import { Container, Title } from "@mantine/core";
import { Card } from "./Card";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Career = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Container fluid w={"90%"}>
      <Title align="center" mb="xl">
        Quick Careers
      </Title>
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize="33.33%"
        align="start"
        slideGap="md"
      >
        <Carousel.Slide>
          <Card
            image={"career"}
            category={"Creative"}
            title={"Join Graphic Designers Team"}
            date={" June 17, 2022"}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            image={"career"}
            category={"Finance"}
            title={"Jon Business and Finance Team"}
            date={" June 17, 2022"}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Card
            image={"career"}
            category={"Web and Technical"}
            title={"Join Web Developer Team"}
            date={" June 17, 2022"}
          />
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
};
export default Career;

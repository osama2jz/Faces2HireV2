import { Container, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import Button from "../../../components/Button";
import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "./styles";
import { useEffect, useRef, useState } from "react";

export const Why = () => {
  const isMobile = useMediaQuery("(max-width: 820px)");
  const componentRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);
  const { classes } = useStyles({ animate: inViewport });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold value as needed
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);
  return (
    <SimpleGrid
      p={isMobile ? "20px" : "70px"}
      style={{overflow:'hidden'}}
      spacing={"80px"}
      breakpoints={[
        { minWidth: "sm", cols: 1 },
        { minWidth: "md", cols: 2 },
      ]}
      ref={componentRef}
    >
      <iframe
        src="https://www.youtube.com/embed/neoHVJLUkg8"
        width={"100%"}
        height={isMobile ? "130%" : "100%"}
        style={{ borderRadius: "20px" }}
      />
      <Flex gap={"md"} direction={"column"} className={classes.whyUs}>
        <Title>WHY FACES2HIRE?</Title>
        <Title order={2}>
          "A Picture is worth a thousand words, a Video is even better."
        </Title>
        <Text align="justify">
          faces2hire was built on the principles of giving everyone the
          opportunity to promote themselves or tree, into finding a better job
          with the potential of making more money. <br />
          The site was designed to allow you to create an interactive profile
          with the benefit of adding an introduction video presenting yourself
          to the world of employers. You're more than just a piece of paper or a
          boring resume that doesn't bring out the best in you. The site allows
          you to showcase your personality and accomplishments to shine to
          employers
        </Text>
        <Button
          label={"See More"}
          color={"red"}
          style={{ alignSelf: "flex-start" }}
        />
      </Flex>
    </SimpleGrid>
  );
};

import { Container, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import benfits from "../../../assets/benfits.svg";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";

export const Benefits = () => {
  const componentRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 1020px)");
  const [inViewport, setInViewport] = useState(false);
  const { classes } = useStyles({ animate: inViewport });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold value as needed
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
    <Container fluid my="lg" p="0px" m="0px" style={{overflow:'hidden'}}>
      <Title order={2} align="center">
        Benefits Of Creating A Profile
      </Title>
      <SimpleGrid breakpoints={[
          { minWidth: "sm", cols: 1 },
          { minWidth: "md", cols: 2 },
        ]}>
        {!isMobile && <img src={benfits} width={"100%"} />}
        <Container className={classes.textMain} ref={componentRef}>
          <Text className={classes.text}>Negotiate your own salary range</Text>
          <Text className={classes.text}>
            Promote yourself with a personlaized introduction video
          </Text>
          <Text className={classes.text}>
            Humanize your profile and showcase your personality
          </Text>
          <Text className={classes.text}>
            Employers can view your profile and contact you directly
          </Text>
          <Text className={classes.text}>
            Receive job alerts aligned with your skill sets
          </Text>
          <Text className={classes.text}>
            Network with other job seekersand compare profiles
          </Text>
          <Text className={classes.text}>
            See who viewed your profile through personal analytics
          </Text>
        </Container>
      </SimpleGrid>
    </Container>
  );
};

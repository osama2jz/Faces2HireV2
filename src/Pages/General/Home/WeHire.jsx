import { Container, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import hire1 from "../../../assets/hire1.svg";
import hire2 from "../../../assets/hire2.svg";
import hire3 from "../../../assets/hire3.svg";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
export const WeHire = () => {
  const componentRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 820px)");
  const [inViewport, setInViewport] = useState(false);
  const { classes } = useStyles({ animate3: inViewport });
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
    <SimpleGrid
      ref={componentRef}
      className={classes.weHire}
      p="xl"
      breakpoints={[
        { minWidth: "sm", cols: 1 },
        { minWidth: "md", cols: 2 },
        { minWidth: "lg", cols: 3 },
      ]}
    >
      <Container className={classes.weHireText}>
        <Title order={2}>We Hire Employees From Different Regions</Title>
        <Text fw={"bold"} color="gray">
          Because faces2hire was very serious about providing jobs, facilities,
          environment and best user experience for finding suitable job
        </Text>
      </Container>
      <Container>
        <img src={hire1} className={classes.weHireImages} />
        <img src={hire2} className={classes.weHireImages} />
      </Container>
      <img
        src={hire3}
        width={"100%"}
        style={{ margin: "auto" }}
        className={classes.weHireImages2}
      />
    </SimpleGrid>
  );
};

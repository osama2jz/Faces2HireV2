import { Container, Text } from "@mantine/core";
import { useStyles } from "./styles";
import { useEffect, useRef, useState } from "react";

export const Card = ({ icon, title, description }) => {
  const componentRef = useRef(null);
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
    <Container className={classes.card} ref={componentRef}>
      <img
        width={"50px"}
        src={new URL(`../../../../assets/${icon}.svg`, import.meta.url).href}
      />
      <Text fw={"bold"} fz="lg">
        {title}
      </Text>
      <Text fz="9px" align="center">
        {description}
      </Text>
    </Container>
  );
};

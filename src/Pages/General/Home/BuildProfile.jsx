import { Container, Overlay, Title } from "@mantine/core";
import { useStyles } from "./styles";
import Button from "../../../components/Button";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export const BuildProfile = () => {
  const componentRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 820px)");
  const [inViewport, setInViewport] = useState(false);
  const { classes } = useStyles({ animate2: inViewport });
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
    <Container className={classes.buildProfile} fluid>
      <Title ref={componentRef} order={isMobile ? 2 : 1}>
        Build Your Profile Once And Let Employer Find You
      </Title>
      <Button label={"Get Started Now"} color={"red"} size="lg"/>
    </Container>
  );
};

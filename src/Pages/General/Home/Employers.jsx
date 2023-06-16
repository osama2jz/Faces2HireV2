import { Flex, Container, Title } from "@mantine/core";
import emp from "../../../assets/emp.svg";
import { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";

export const Employers = () => {
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
    <Container fluid p={"lg"}>
      <Title align="center" mb="lg">
        Employers Using Faces2hire
      </Title>
      <Flex
        className={classes.brands}
        wrap={"wrap"}
        gap={"lg"}
        justify={"center"}
        ref={componentRef}
      >
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
        <img src={emp} />
      </Flex>
    </Container>
  );
};

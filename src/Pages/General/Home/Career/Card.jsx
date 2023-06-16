import { Container, Text } from "@mantine/core";
import { useStyles } from "./styles";
import { Calendar } from "tabler-icons-react";

export const Card = ({ image, category, title, date }) => {
  const { classes } = useStyles();
  return (
    <Container className={classes.card}>
      <img
        width={"100%"}
        src={new URL(`../../../../assets/${image}.svg`, import.meta.url).href}
      />
      <Text fw={"bold"} fz="sm" color="gray">
        {category}
      </Text>
      <Text fw={"bold"} fz="lg">
        {title}
      </Text>
      <Text fz="sm" className={classes.date}>
        <Calendar size={"20px"}/>
        {date}
      </Text>
    </Container>
  );
};

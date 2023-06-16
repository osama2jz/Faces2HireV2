import { Container, Group, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import InputField from "../../../../components/InputField";
import PassInput from "../../../../components/PassInput";
import Button from "../../../../components/Button";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";

const Slide3 = () => {
  const isMobile = useMediaQuery("(max-width: 820px)");
  const { classes } = useStyles();

  return (
    <Container fluid className={classes.slide3}>
      <Container className={classes.slide2Data}>
        <Title order={isMobile ? 2 : 1}>Get Your Dream Job</Title>
        <Text fz="lg" style={{ borderBottom: "1px solid white" }} pb="sm">
          Get Noticed - Get Hired
        </Text>
        <Text style={{ borderLeft: "3px solid red" }} pl="sm">
          Apply instantly using your profile <br />
          Create Your Own Video
          <br />
          Receive Job alerts and analytics
        </Text>
        <Group>
          <Button label={"Learn More"} color={"red"} />
        </Group>
      </Container>
    </Container>
  );
};
export default Slide3;

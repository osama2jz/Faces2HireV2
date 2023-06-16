import { Container, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import InputField from "../../../../components/InputField";
import PassInput from "../../../../components/PassInput";
import Button from "../../../../components/Button";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";

const Slide1 = () => {
  const isMobile = useMediaQuery("(max-width: 820px)");
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Container fluid className={classes.slide1}>
      <Title order={isMobile ? 3 : 1} className={classes.text}>
        Get Noticed - Get Hired
      </Title>
      <Title order={isMobile ? 4 : 2} fw={"normal"}>
        Search Over 10,000,000 Jobs All For Free
      </Title>
      <form
        className={classes.form}
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <InputField placeholder={"Full Name"} />
        <InputField placeholder={"Email"} />
        <PassInput placeholder={"Password"} />
        <PassInput placeholder={"Confirm Password"} />
        <Button label={"Join Now"} type={"submit"} color={"red"} />
      </form>
    </Container>
  );
};
export default Slide1;

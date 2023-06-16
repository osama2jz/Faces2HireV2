import { Container } from "@mantine/core";
import { Carousal } from "./Carousel";
import { Benefits } from "./Benefits";
import Help from "./Help";
import { Why } from "./Why";
import Career from "./Career";
import { Employers } from "./Employers";
import Testimonials from "./Testimonials";
import { BuildProfile } from "./BuildProfile";
import { WeHire } from "./WeHire";

const Home = () => {
  return (
    <Container fluid p="0px">
      <Carousal />
      <Benefits />
      <Help />
      <Why />
      <Career />
      <Employers />
      <Testimonials />
      <BuildProfile />
      <WeHire />
    </Container>
  );
};
export default Home;

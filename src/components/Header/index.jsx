import {
  BackgroundImage,
  Burger,
  Flex,
  Image,
  MediaQuery,
} from "@mantine/core";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { UserContext } from "../../contexts/UserContext";
import routeNames from "../../routes";
import Button from "../Button";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";

export const Header = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const isMobile = useMediaQuery("(max-width: 820px)");
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  return (
    <Flex
      // w={"100vw"}
      p="sm"
      justify={"space-between"}
      align={"center"}
      className={classes.header}
    >
      <Image src={logo} width={isMobile ? "150px" : "200px"} />
      <Flex gap={"lg"} align={"center"} className={classes.navigationBar}>
        <Link className={classes.link} to={routeNames.general.landing}>
          Home
        </Link>
        <Link className={classes.link} to={routeNames.general.services}>
          Search Job
        </Link>
        <Link className={classes.link} to={routeNames.general.aboutUs}>
          About Us
        </Link>
        <Link className={classes.link} to={routeNames.general.donate}>
          My Perspective Jobs
        </Link>
        <Button label={"Post Job for Free"} color="red" />
      </Flex>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={"white"}
          mr="xl"
        />
      </MediaQuery>
    </Flex>
  );
};

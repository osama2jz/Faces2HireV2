import { Container, Divider, Flex, Group, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useContext } from "react";
import {
  BrandFacebook,
  BrandInstagram,
  BrandLinkedin,
  BrandTwitter,
  Mail,
  MapPin,
  Phone,
} from "tabler-icons-react";
import { UserContext } from "../../contexts/UserContext";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import routeNames from "../../routes";
import logo from "../../assets/logo.svg";

export const Footer = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 820px)");
  return (
    <Container className={classes.footer} fluid>
      <Flex
        direction="column"
        align={"center"}
        gap={"md"}
        w={isMobile ? "100%" : "30%"}
      >
        <Flex gap={"lg"} align={"center"}>
          <img src={logo} width={isMobile ? "100px" : "200px"} />
          <Divider orientation="vertical" />
          <BrandFacebook fill="white" stroke="none" />
          <BrandLinkedin />
          <BrandTwitter fill="white" stroke="none" />
          <BrandInstagram />
        </Flex>
        <Flex align={"center"} className={classes.navigationBar}>
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
        </Flex>
      </Flex>
      <Text align="center" w={isMobile ? "100%" : "60%"}>
        This is some description. This is some description. This is some
        description. This is some description.This is some description. This is
        some description. This is some description. This is some description.
        This is some description.This is some description.
      </Text>
      <Group>
        <Text fw={"bold"}>Terms & Conditions</Text>
        <Text fw={"bold"}>Privay Policy</Text>
      </Group>
    </Container>
  );
};

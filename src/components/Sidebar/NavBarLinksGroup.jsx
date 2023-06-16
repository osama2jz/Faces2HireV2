import {
  Box,
  Collapse,
  createStyles,
  Flex,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  mainLink: {
    fontWeight: 600,
    display: "block",
    width: "100%",
    margin: "1px 0px",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderBottom: "1px solid rgb(0,0,0,0.1)",
    fontSize: theme.fontSizes.lg,
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: theme.colors.blueSide,
    },
  },

  link: {
    fontWeight: 500,
    margin: "1px",
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    borderRadius: "5px",

    "&:hover": {
      backgroundColor: theme.colors.blueSide,
    },
  },

  chevron: {
    color: "rgb(0,0,0,0.6)",
    transition: "transform 200ms ease",
  },
}));

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  ind,
  link,
  globalOpen,
  setGlobalOpen,
  setSideOpen,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const hasLinks = Array.isArray(links);
  const { classes, theme } = useStyles();
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;

  useEffect(() => {
    globalOpen !== label && setOpened(false);
  }, [globalOpen, label]);

  const items = (hasLinks ? links : []).map((link, index) => (
    <Flex
      component={Link}
      gap="sm"
      className={classes.link}
      p={"sm"}
      to={link.link}
      onClick={() => setSideOpen(false)}
      key={link.label}
      color={
        location?.pathname === link.link && label === globalOpen
          ? theme.colors.primary[9]
          : "rgb(0,0,0,0.9)"
      }
      sx={{
        borderRight:
          location?.pathname === link.link &&
          label === globalOpen &&
          `10px solid ${theme.colors.primary[9]}`,
      }}
      bg={
        location?.pathname === link.link && label === globalOpen
          ? theme.colors.primary[0]
          : ""
      }
    >
      <Text
        color={
          location?.pathname === link.link && label === globalOpen
            ? theme.colors.primary[9]
            : "rgb(0,0,0,0.9)"
        }
      >
        {ind + "." + (index + 1)}
      </Text>{" "}
      <Text
        color={
          location?.pathname === link.link && label === globalOpen
            ? theme.colors.primary[9]
            : "rgb(0,0,0,0.9)"
        }
      >
        {link.label}
      </Text>
    </Flex>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          setGlobalOpen(label);

          if (link) {
            setSideOpen(false);
            link && navigate(link);
          }
          if (label === "Log Out") {
            localStorage.removeItem("userData");
          }
        }}
        className={classes.mainLink}
        sx={{
          borderRight:
            location?.pathname === link &&
            label === globalOpen &&
            `10px solid ${theme.colors.primary[9]}`,
        }}
        bg={
          location?.pathname === link && label === globalOpen
            ? theme.colors.primary[0]
            : ""
        }
      >
        <Group
          position="apart"
          spacing={0}
          p={"sm"}
          onClick={() => link && navigate(link)}
        >
          <Text
            color={
              location?.pathname === link && label === globalOpen
                ? theme.colors.primary[9]
                : "rgb(0,0,0,0.9)"
            }
            sx={{ display: "flex", alignItems: "center" }}
            fw={"500"}
          >
            <Icon
              size={18}
              color={
                location?.pathname === link && label === globalOpen
                  ? theme.colors.primary[9]
                  : "rgb(0,0,0,0.9)"
              }
            />
            <Box ml="md">{ind ? ind + ". " + label : label}</Box>
          </Text>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={12}
              // stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

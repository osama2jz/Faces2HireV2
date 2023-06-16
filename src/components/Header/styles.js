import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme, { opened }) => ({
  header: {
    backgroundColor: theme.colors.blue,
    height: "100%",
  },
  logo: {
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "400",
    [`@media (max-width: 820px)`]: {
      color: "black",
    },
    "&:hover": {
      cursor: "pointer",
      scale: "1.1",
      color: "white",
      // textShadow: "2px 2px rgb(0,0,0,0.4)",
    },
  },
  navigationBar: {
    [`@media (max-width: 820px)`]: {
      flexDirection: "column",
      position: "absolute",
      top: "50px",
      padding: "20px 20px",
      color: "black !important",
      borderRadius: "10px",
      width: "100vw",
      right: 0,
      backgroundColor: "white",
      display: opened ? "flex" : "none",
      zIndex: 11,
    },
  },
}));

import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.blue,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    color: "white",
    padding: "30px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    borderRight: "1px solid white",
    padding: "0px 15px",
    ":last-child": {
      border: "none",
    },
  },
}));

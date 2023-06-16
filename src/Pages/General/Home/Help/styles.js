import { createStyles, keyframes } from "@mantine/core";
export const RightToLeft = keyframes({
  from: { transform: "translateX(100%)" },
  to: { transform: "translateX(0%)" },
});
export const LeftToRight = keyframes({
  from: { transform: "translateX(-100%)" },
  to: { transform: "translateX(0%)" },
});
export const useStyles = createStyles((theme, props) => ({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "5px",
    borderRadius: "5px",
    width: "220px",
    aspectRatio: "4/3",
    padding: "20px 10px",
    boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 0.25)",
    ":nth-of-type(1), :nth-of-type(2), :nth-of-type(5), :nth-of-type(6)": {
      animation: props.animate ? `${LeftToRight} 1s ease-in-out` : "",
    },
    ":nth-of-type(3), :nth-of-type(4), :nth-of-type(7), :nth-of-type(8)": {
      animation: props.animate ? `${RightToLeft} 1s ease-in-out` : "",
    },
  },
}));

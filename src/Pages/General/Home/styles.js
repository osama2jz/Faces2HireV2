import { createStyles, keyframes } from "@mantine/core";
import buildProfile from "../../../assets/buildProfile.svg";

export const rightToLeft = keyframes({
  from: { transform: "translateX(100%)" },
  to: { transform: "translateX(0%)" },
});
export const hideToShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
export const bigToSmall = keyframes({
  from: { transform: "scale(3)", margin: "50px" },
  to: { transform: "scale(1)", margin: "0px" },
});
export const LeftToRight = keyframes({
  from: { transform: "translateX(-100%)" },
  to: { transform: "translateX(0%)" },
});
export const topToBottom = keyframes({
  from: { transform: "translateY(-200%)" },
  to: { transform: "translateX(0%)" },
});
export const bottomToTop = keyframes({
  from: { transform: "translateY(200%)" },
  to: { transform: "translateX(0%)" },
});
export const useStyles = createStyles((theme, props) => ({
  textMain: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    gap: "50px",
    width: "100%",
    position: "relative",
    [`@media (max-width: 1020px)`]: {
      position: "static",
      gap: "20px",
    },
  },

  text: {
    borderRadius: "5px",
    animation: props?.animate ? `${rightToLeft} 1s ease-in-out` : "",
    padding: "5px",
    paddingBottom: "10px",
    boxShadow: "10px 10px 10px 1px rgb(0,0,0,0.1)",
    position: "absolute",
    minWidth: "65%",
    [`@media (max-width: 1020px)`]: {
      position: "static",
      width: "85vw",
      padding: "10px",
    },
    "&: first-of-type": {
      top: "14%",
      left: "0%",
    },
    "&: nth-of-type(2)": {
      top: "24%",
      left: "4%",
    },
    "&: nth-of-type(3)": {
      top: "34%",
      left: "8%",
    },
    "&: nth-of-type(4)": {
      top: "46%",
      left: "12%",
    },
    "&: nth-of-type(5)": {
      top: "58%",
      left: "8%",
    },
    "&: nth-of-type(6)": {
      top: "70%",
      left: "4%",
    },
    "&: nth-of-type(7)": {
      top: "81%",
      left: "0%",
    },
  },
  avatar: {
    cursor: "pointer",
    animation: props?.animate ? `${bigToSmall} 1s ease-in-out` : "",
    ":hover": {
      boxShadow: "0px 4px 15px 2px rgba(0, 0, 0, 0.3)",
    },
  },
  whyUs: {
    animation: props?.animate ? `${rightToLeft} 1s ease-in-out` : "",
  },
  brands: {
    animation: props?.animate ? `${hideToShow} 3s ease-in-out` : "",
  },
  qoute1: {
    animation: props?.animate ? `${LeftToRight} 1s ease-in-out` : "",
  },
  qoute2: {
    animation: props?.animate ? `${rightToLeft} 1s ease-in-out` : "",
  },
  buildProfile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "300px",
    gap: "20px",
    color: "white",
    justifyContent: "center",
    // textAlign:'center',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    position: "relative",
    backgroundImage: `url(${buildProfile}) `,
    "& > *": {
      zIndex: 1,
      animation: props?.animate2 ? `${bottomToTop} 2s ease-in-out` : "",
    },
    ":after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(13, 27, 57, 0.8)",
      zIndex: 0,
    },
  },
  weHireImages: {
    maxWidth: "100%",
    // overflow:'hidden',
    "&: first-of-type": {
      animation: props?.animate3 ? `${topToBottom} 2s ease-in-out` : "",
    },
    "&: nth-of-type(2)": {
      animation: props?.animate3 ? `${bottomToTop} 2s ease-in-out` : "",
    },
  },
  weHireImages2: {
    animation: props?.animate3 ? `${rightToLeft} 2s ease-in-out` : "",
  },
  weHireText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    animation: props?.animate3 ? `${hideToShow} 2s ease-in-out` : "",
  },
}));

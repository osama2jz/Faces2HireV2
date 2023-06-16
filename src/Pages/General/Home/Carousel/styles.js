import { createStyles, keyframes } from "@mantine/core";
import slide1 from "../../../../assets/slide1.svg";
import slide2 from "../../../../assets/slide2.svg";
import slide3 from "../../../../assets/slide3.svg";

export const typing = keyframes({
  from: { width: "0%" },
  to: { width: "25%" },
});

export const useStyles = createStyles((theme) => ({
  slide1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    gap: "10px",
    justifyContent: "center",
    backgroundImage: `url(${slide1}) `,
    objectFit: "fit",
    backgroundPosition: "center center",
  },
  text: {
    animation: `${typing} 2s steps(23)`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    // borderRight: "1px solid",
  },
  form: {
    backgroundColor: "rgb(55, 73, 111, 0.8 )",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    "& button": {
      width: "fit-content",
      marginInline: "auto",
    },
    [`@media (max-width: 800px)`]: {
      width: "90%",
    },
  },
  slide2: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    gap: "10px",
    backgroundImage: `url(${slide2}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    // backgroundPosition: "center center",
  },
  slide3: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    gap: "10px",
    backgroundImage: `url(${slide3}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "center center",
  },
  slide2Data: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "40px",
    marginLeft: "100px",
    backgroundColor: "rgb(55, 73, 111, 0.9 )",
    color: "white",
    [`@media (max-width: 800px)`]: {
      margin: "auto",
      padding: "20px",
    },
  },
}));

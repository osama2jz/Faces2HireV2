import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent:'center',
    flexDirection: "column",
    gap: "5px",
    width: "300px",
    margin:'20px',
    borderRadius:'5px',
    aspectRatio: "4/3",
    padding: "20px 10px",
    boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 0.25)",
  },
  date:{
    display:'flex',
    alignItems:'center',
    gap:'5px',
    color:"gray"
  }
}));

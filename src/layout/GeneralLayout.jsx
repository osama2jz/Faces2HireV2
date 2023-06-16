import { useMantineTheme } from "@mantine/core";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { UserContext } from "../contexts/UserContext";
import { Footer } from "../components/Footer";

const GeneralLayout = () => {
  const theme = useMantineTheme();
  const { user } = useContext(UserContext);
  // const [opened, setOpened] = useState(false);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default GeneralLayout;

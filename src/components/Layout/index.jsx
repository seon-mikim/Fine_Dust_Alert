import { Outlet } from "react-router-dom";
import { Layout as StLayout } from "./style";
import Header from "../Header";
import Tab from "../Tab";
function Layout() {
  return (
    <StLayout>
      <Header />
      <Outlet />
      <Tab />
    </StLayout>
  );
}

export default Layout;

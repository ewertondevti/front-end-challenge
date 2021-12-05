import { Outlet, useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb/Breadcrumb";
import Header from "../Header/Header";

const BodyContent = () => {
  const { pathname } = useLocation();
  const breadcrumbItems = pathname.split("/").filter((i) => i);

  return (
    <>
      <Header />

      <BreadCrumb items={breadcrumbItems} />

      <Outlet />
    </>
  );
};

export default BodyContent;

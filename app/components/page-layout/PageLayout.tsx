import { ReactNode } from "react";
import "./style.css";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className="layout">{children}</div>;
};

export default PageLayout;

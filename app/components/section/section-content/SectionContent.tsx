import { ReactNode } from "react";
import "./style.css";

const SectionContent = ({ children }: { children: ReactNode }) => {
  return <div className="section-content">{children}</div>;
};

export default SectionContent;

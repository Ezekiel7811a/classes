import { ReactNode } from "react";
import "./style.css";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="section-title">{children}</h2>;
};

export default SectionTitle;

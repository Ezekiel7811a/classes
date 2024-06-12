import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <div className="section">{children}</div>;
};

export default Section;

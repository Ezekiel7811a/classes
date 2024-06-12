import { ReactNode } from "react";

const SectionHeader = ({ children }: { children: ReactNode }) => {
  return <div className="section-header">{children}</div>;
};

export default SectionHeader;

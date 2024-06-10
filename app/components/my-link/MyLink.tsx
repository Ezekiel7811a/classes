import { ReactNode } from "react";
import "./style.css";

const MyLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <button
      className="myLink"
      onClick={() => {
        window.open(href);
      }}
    >
      {children}
    </button>
  );
};

export default MyLink;

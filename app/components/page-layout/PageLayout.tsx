"use client";

import { ReactNode } from "react";
import "./style.css";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ArrowBackIcon } from "@chakra-ui/icons";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  return (
    <div className="layout">
      <Button
        onClick={() => {
          push("/");
        }}
        width={"5em"}
      >
        <ArrowBackIcon color={"white"} boxSize={"1.5em"} />
      </Button>
      {children}
    </div>
  );
};

export default PageLayout;

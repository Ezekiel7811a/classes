"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-csharp";

const Provider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const config = {
    useSystemColorMode: true,
  };

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          background: "var(--color-tertiary)",
        },
        a: {
          textDecoration: "underline",
          color: "var(--color-link)",
        },
      },
      ...config,
    },
  });
  return (
    <div>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </div>
  );
};

export default Provider;

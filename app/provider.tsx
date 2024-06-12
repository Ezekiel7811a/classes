"use client";

import {
  background,
  Button,
  ChakraProvider,
  extendTheme,
  StyleFunctionProps,
} from "@chakra-ui/react";
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
    components: {
      Button: {
        variants: {
          // 4. We can override existing variants
          solid: (props: StyleFunctionProps) => ({
            bg: props.colorMode === "dark" ? "red.300" : "var(--color-code)",
            _hover: {
              bg: "var(--color-primary)",
            },
          }),
        },
      },
    },
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
    },
    ...config,
  });
  return (
    <div>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </div>
  );
};

export default Provider;

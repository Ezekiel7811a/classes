"use client";

import Image from "next/image";
import styles from "./page.module.css";
import games from "@/public/jsons/projects-games.json";
import {
  background,
  Container,
  Flex,
  Text,
  transition,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<State>(State.PROJECT);
  const toggleSelectedSection = (state: State) => {
    if (selectedSection === state) {
      return;
    }

    setSelectedSection(state);
  };

  const conditionalStyle = (state: State) => {
    return {
      background:
        selectedSection === state
          ? "var(--background-gradient)"
          : "var(--color-code)",
      color:
        selectedSection === state
          ? "var(--color-text)"
          : "var(--color-code-text)",
      transition: "all 0.5s ease",
      borderRadius: "3px",
      padding: "2em",
      margin: "0",
      maxWidth: "100%",
      width: selectedSection === state ? "70%" : "30%",
    };
  };

  return (
    <Flex minH={"100vh"}>
      <Container
        style={conditionalStyle(State.PROJECT)}
        onClick={() => toggleSelectedSection(State.PROJECT)}
      >
        <Text fontSize="xxx-large">Basé sur les projets</Text>
        <ul
          style={{
            paddingLeft: "2em",
          }}
        >
          {games.map(({ name, href }, index) => (
            <li key={index}>
              <a href={href} style={{ color: "inherit" }}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Container
        style={conditionalStyle(State.SECTION)}
        onClick={() => toggleSelectedSection(State.SECTION)}
      >
        <Text fontSize="xxx-large">Basé sur les sections</Text>
        <ul
          style={{
            paddingLeft: "2em",
          }}
        >
          {games.map(({ name, href }, index) => (
            <li key={index}>
              <a href={href} style={{ color: "inherit" }}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Flex>
  );
}

enum State {
  PROJECT,
  SECTION,
}

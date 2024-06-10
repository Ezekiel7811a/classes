import Image from "next/image";
import styles from "./page.module.css";
import games from "@/public/jsons/projects-games.json";
import { Container, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
      background={"var(--background-gradient)"}
      borderRadius={"3px"}
      padding={"2em"}
    >
      <Text fontSize="xxx-large">Projects</Text>
      <ul>
        {games.map(({ name, href }, index) => (
          <li key={index}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

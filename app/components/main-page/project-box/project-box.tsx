"use client";

import { Project } from "@/lib/models/project";
import { Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

export default function ProjectBox({
  projectList,
  imgSrc,
  imgAlt,
}: {
  projectList: Project[];
  imgSrc: string;
  imgAlt: string;
}) {
  const [active, setActive] = useState(false);
  const width = "10em";
  return (
    <div style={{ position: "relative" }}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        h={width}
        borderRadius={active ? "6px 6px 0 0" : "6px"}
        filter={active ? "grayscale(10%)" : "grayscale(60%)"}
        transition={"filter 0.5s ease"}
        onClick={() => setActive(!active)}
        _hover={{
          cursor: "pointer",
        }}
      />
      {active && (
        <UnorderedList
          position={"absolute"}
          backgroundColor={"var(--color-secondary)"}
          color={"white"}
          width={width}
          margin={"0"}
          padding={"1em 0 1em 2em"}
          borderBottomRadius={"6px"}
        >
          {projectList.map(({ name, href, sections }, index) => (
            <ListItem key={index}>
              <a href={href} style={{ color: "inherit" }}>
                {name}
              </a>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </div>
  );
}

import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Introduction</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          Dans cet exercice, nous allons créer un jeu du Pendu en utilisant le
          langage de programmation C#. Cet exercice est idéal pour les débutants
          qui souhaitent renforcer leurs compétences en programmation, notamment
          en ce qui concerne l utilisation des fonctions. Les fonctions sont des
          blocs de code réutilisables qui permettent de structurer un programme
          de manière plus claire et plus efficace.
        </Text>
      </SectionContent>
    </Section>
  );
};

export default Introduction;

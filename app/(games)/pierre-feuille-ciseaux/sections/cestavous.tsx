import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

export const CestAVous = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{"C'est à vous !"}</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Maintenant que vous savez faire des collections, vous pouvez créer un jeu de pierre-feuille-ciseaux. L'utilisateur doit entrer un texte (pierre, feuille ou ciseaux) et l'ordinateur doit choisir un texte aléatoire. Ensuite, vous devez comparer les deux textes pour déterminer le gagnant."
          }
        </Text>
      </SectionContent>
    </Section>
  );
};

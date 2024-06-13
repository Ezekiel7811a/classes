import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

export const CestAVous = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{"C'est à vous"}</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Maintenant que vous avez vu les principaux concepts de l'injection de dépendances, vous pouvez créer votre propre framework avec un controller qui possède des conteneurs qui eux même enregistre et injectent les services. Bon courage."
          }
        </Text>
      </SectionContent>
    </Section>
  );
};

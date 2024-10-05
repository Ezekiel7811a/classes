import Bonus from "@/app/components/bonus/bonus";
import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

const CestAVous = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{"C'est à vous"}</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Avec toutes ces informations vous êtes en mesures de créer un système d'inventaire. C'est à dire un système qui permet de gérer des objets. Vous pouvez ajouter des objets, les supprimer, les modifier, les afficher, etc. Petit conseil : voyez un inventaire comme ayant une liste d'objets."
          }
        </Text>
        <Bonus>
          <Text>{"Ajouter un système de recherche"}</Text>
          <Text>{"Ajouter un système de tri"}</Text>
        </Bonus>
      </SectionContent>
    </Section>
  );
};

export default CestAVous;

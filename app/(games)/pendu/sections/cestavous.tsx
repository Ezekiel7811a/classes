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
            "Avec toutes ces informations vous êtes en mesures de créer un jeu du pendu. C'est à dire un jeu où un mot sélectionné aléatoirement est présentée à l'utilisateur sous forme de tirets pour chaque lettre. L'utilisateur doit deviner les lettres du mot une par une. Pour chaque bonne lettre toutes les lettres correspondantes doivent s'afficher correctement."
          }
        </Text>
        <Bonus>
          <Text>{"Empêcher le joueur de mettre plus d'une lettre"}</Text>
          <Text>{"Mettre un nombre maximal d'essais"}</Text>
        </Bonus>
      </SectionContent>
    </Section>
  );
};

export default CestAVous;

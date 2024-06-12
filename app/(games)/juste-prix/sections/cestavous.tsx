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
            "Grâce à tout ce que vous avez appris vous êtes en mesure de créer un programme qui réalise le jeu du juste prix. C'est à dire qui définisse un nombre aléatoire entre 1 et 100, puis qui demande à l'utilisateur de deviner ce nombre. Si l'utilisateur devine le nombre, le programme affiche 'Bravo vous avez trouvé le juste prix !'. Sinon le programme dit à l'utilisateur si le chiffre est plus haut ou plus bas."
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "//Pour générer un nombre aléatoire entre 1 et 100\nint nombreAleatoire = new Random().Next(1, 100)"
            }
          </code>
        </pre>
      </SectionContent>
    </Section>
  );
};

import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Image, Text } from "@chakra-ui/react";

export const CreationProjet = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Création du Projet</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text fontSize={"x-large"}></Text>
        <Text>
          {
            "Le terminal est un outil qui nous permet d'interagir avec notre système d'exploitation. Pour ouvrir le terminal on va se rendre dans le fichier où l'on veut créer le projet et écrire 'cmd' dans la barre d'adresse."
          }
        </Text>
        <Image
          src="/images/juste-prix/explorateur.png"
          alt="Terminal"
          height={"20rem"}
          objectFit={"contain"}
        />
        <Text>
          {"En appuyant sur entrée on ouvre le terminal. On va ensuite taper:"}
        </Text>
        <Image
          src="/images/juste-prix/terminal.png"
          alt="cmd"
          height={"20rem"}
          objectFit={"contain"}
        />
        <Text>
          {
            "dotnet correspond à l'appel de l'environnement d'éxécution .NET, new à la création d'un nouveau projet, console à la création d'un projet console et -n LeJustePrix au nom du projet."
          }
        </Text>
      </SectionContent>
    </Section>
  );
};

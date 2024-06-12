import MyLink from "@/app/components/my-link/MyLink";
import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Image, Text } from "@chakra-ui/react";

export const Introduction = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Introduction</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {" "}
          Pour commencer notre premier projet il va falloir installer tout ce
          qui est nécessaire à faire tourner notre programme. Un éditeur de
          texte, nous allons utiliser{" "}
          <MyLink href="https://code.visualstudio.com/">
            Visual Studio Code.
          </MyLink>{" "}
        </Text>
        <Image
          src="/images/juste-prix/vscode.png"
          alt="Visual Studio Code"
          height={"20rem"}
          objectFit={"contain"}
        />
        <Text>
          {
            "Enfin nous avons besoin d'un environnement d'éxécution, pour cela nous allons utiliser"
          }
          <MyLink href="https://dotnet.microsoft.com/en-us/download/dotnet/8.0">
            .NET (Probablement en x64)
          </MyLink>
          , logiciel open source développé par microsoft.
        </Text>
      </SectionContent>
    </Section>
  );
};

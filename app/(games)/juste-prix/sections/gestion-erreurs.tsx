import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

export const GestionErreurs = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Gestion des Erreurs</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "La gestion des erreurs est un élément essentiel de tout programme. Elle permet de s'assurer que le programme ne plante pas si une erreur se produit. Voici comment vous pourriez gérer une erreur en C#:"
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "if (input is not int)\n{\n    Console.WriteLine('Please enter a number');\n    continue;\n}"
            }
          </code>
        </pre>
      </SectionContent>
    </Section>
  );
};

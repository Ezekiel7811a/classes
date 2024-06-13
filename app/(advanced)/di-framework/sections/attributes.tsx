import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

export const Attributes = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Attributs</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Les attributs sont des métadonnées qui peuvent être ajoutées aux éléments du programme pour fournir des informations supplémentaires. Pour en créer un il suffit de créer une nouvelle classe qui hérite de System.Attribute. Dans le cadre de l'injection de dépendances, nous allons créer un attribut [Inject] qui nous permettra de marquer les champs des classes qui doivent être injectés."
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "[AttributeUsage(AttributeTargets.Field)]\npublic class InjectAttribute : Attribute\n{\n}"
            }
          </code>
        </pre>
      </SectionContent>
    </Section>
  );
};

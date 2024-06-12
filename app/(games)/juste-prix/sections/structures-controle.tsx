import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const StructuresControle = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Les Structures de Contrôle</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Les structures de contrôles sont les éléments qui nous permettent de gérer la logique dans un programme. Ils sont de 2 types:"
          }
        </Text>
        <UnorderedList>
          <ListItem>
            {"Les conditions : Si, Sinon si, Sinon"}
            <pre className="language-csharp">
              <code className="language-csharp">
                {
                  "if (number > 10)\n{\n    Console.WriteLine('Le nombre est plus grand que 10');\nelse if (number < 10)\n{\n    Console.WriteLine('Le nombre est plus petit que 10');\n}\nelse\n{\n    Console.WriteLine('Le nombre est égal à 10');\n}"
                }
              </code>
            </pre>
          </ListItem>
          <ListItem>
            {"Les boucles : Tant que"}
            <pre className="language-csharp">
              <code>
                {
                  "while (number != 10)\n{\n    Console.WriteLine('Entrez un autre nombre:');\n    number = Convert.ToInt32(Console.ReadLine());\n}"
                }
              </code>
            </pre>
          </ListItem>
        </UnorderedList>
      </SectionContent>
    </Section>
  );
};

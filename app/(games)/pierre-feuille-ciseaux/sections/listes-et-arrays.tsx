import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

export const ListeEtArrays = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Liste et Arrays</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Un array en C# est une collection de taille fixe d'éléments du même type. Une fois qu'un array est créé, sa taille ne peut pas être modifiée. Voici comment vous pouvez déclarer et utiliser un array :"
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "int[] numbers = new int[5];\nnumbers[0] = 1;\nnumbers[1] = 2;\nnumbers[2] = 3;\nnumbers[3] = 4;\nnumbers[4] = 5;"
            }
          </code>
        </pre>
        <Text>
          {
            "A l'inverse, une liste en C# est une collection de taille dynamique d'éléments du même type. Voici comment vous pouvez déclarer et utiliser une liste :"
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "List<int> numbers = new List<int>();\nnumbers.Add(1); //Ajoute à la fin de la liste un 1\nnumbers.Add(2);\nnumbers.Remove(2); //Enlève de la liste la première occurrence d'un 2\nnumbers.Insert(1, 3);"
            }
          </code>
        </pre>
        <Text>
          {
            "Les listes sont plus dynamiques que les arrays, mais elles sont aussi plus lentes. Si vous avez besoin d'une collection de taille fixe, utilisez un array. Si vous avez besoin d'une collection de taille dynamique, utilisez une liste."
          }
        </Text>
      </SectionContent>
    </Section>
  );
};

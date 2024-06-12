import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const InputsOutputs = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Opérations Input et Output</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Les opérations d'input ou 'entrée' font référence à la manière dont le programme reçoit des données de l'utilisateur. Dans un jeu comme le 'Juste Prix', où l'utilisateur doit deviner un prix ou un nombre, l'input est généralement effectué à l'aide du clavier. Voici comment vous pourriez recueillir un input de l'utilisateur en C#:"
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "Console.WriteLine('Entrez un nombre:');\nint number = Convert.ToInt32(Console.ReadLine());"
            }
          </code>
        </pre>
        <Text fontSize={"x-large"}>Opérateurs Logiques</Text>
        <Text>
          {
            "Les opérateurs logiques sont des symboles qui nous permettent de comparer des valeurs. Ils vont renvoyer une valeur de vérité (True ou False). Voici les opérateurs logiques les plus courants:"
          }
        </Text>
        <TableContainer
          alignSelf={"center"}
          padding={"1rem"}
          border={"1px"}
          borderRadius={"10px"}
          borderColor={"gray.200"}
          backgroundColor={"rgba(0, 0, 0, 0.1)"}
        >
          <Table variant={"simple"} size={"md"}>
            <TableCaption>Les opérateurs logiques</TableCaption>
            <Thead>
              <Tr>
                <Th fontSize={"xl"} textColor={"black"}>
                  Opérateur
                </Th>
                <Th fontSize={"xl"} textColor={"black"}>
                  Description
                </Th>
                <Th fontSize={"xl"} textColor={"black"}>
                  Exemple
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>&gt; | &lt;</Td>
                <Td>Plus grand que ou plus petit que</Td>
                <Td textColor={"gray.600"}>5 &lt; 4 //False </Td>
              </Tr>
              <Tr>
                <Td>&ge; | &le;</Td>
                <Td>Plus grand ou égal à ou plus petit ou égal à</Td>
                <Td textColor={"gray.600"}>5 &ge; 5 //True</Td>
              </Tr>
              <Tr>
                <Td>==</Td>
                <Td>Est égal à</Td>
                <Td textColor={"gray.600"}>5 == 9 //False</Td>
              </Tr>
              <Tr>
                <Td>!=</Td>
                <Td>Est différent de</Td>
                <Td textColor={"gray.600"}>5 != 5 //False</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </SectionContent>
    </Section>
  );
};

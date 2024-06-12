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

export const VariablesDataTypes = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Variables et Data Types</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "En programmation, une variable est une façon de stocker une information que votre programme peut ensuite manipuler. Vous pouvez imaginer une variable comme une boîte où vous pouvez garder quelque chose, comme un nombre ou un texte, pour l'utiliser plus tard dans votre programme. Chaque boîte (ou variable) a un nom unique pour que vous puissiez la retrouver facilement."
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">int age = 25;</code>
        </pre>
        <Text>
          Ici int est le type de la variable, age est le nom de la variable et
          25 est la valeur de la variable. Voici les types que nous allons voir
          le plus souvent :
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
            <TableCaption>Types de variables</TableCaption>
            <Thead>
              <Tr>
                <Th fontSize={"xl"} textColor={"black"}>
                  Type
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
                <Td>int</Td>
                <Td>Les nombre entiers</Td>
                <Td textColor={"gray.600"}>5</Td>
              </Tr>
              <Tr>
                <Td>float</Td>
                <Td>Les nombres décimaux</Td>
                <Td textColor={"gray.600"}>5.5</Td>
              </Tr>
              <Tr>
                <Td>string</Td>
                <Td>Le texte</Td>
                <Td textColor={"gray.600"}>{"'Hello'"}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </SectionContent>
    </Section>
  );
};

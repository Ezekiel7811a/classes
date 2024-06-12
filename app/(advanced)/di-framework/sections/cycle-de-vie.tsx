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

export const CycleDeVie = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Cycle de vie des Objets</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Dans le contexte de l'injection de dépendances, le cycle de vie des objets est particulièrement important car il détermine quand et comment les instances des classes (dépendances) sont fournies aux composants qui en ont besoin. Voici les trois principaux modèles de gestion du cycle de vie dans un système utilisant l'injection de dépendances :"
          }
        </Text>
        <TableContainer>
          <Table variant={"simple"} size={"md"}>
            <TableCaption>Les cycles de vie</TableCaption>
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
                <Td>Transient</Td>
                <Td>
                  {
                    "Chaque fois qu'une dépendance est demandée, une nouvelle instance de l'objet est créée"
                  }
                </Td>
                <Td textColor={"gray.600"}>
                  Un objet utilisé pour une transaction de base de données qui
                  ne devrait pas être partagé
                </Td>
              </Tr>
              <Tr>
                <Td>Scoped</Td>
                <Td>
                  {
                    "Une instance unique est créée pour chaque 'scope' spécifique, souvent une requête utilisateur dans les applications web"
                  }
                </Td>
                <Td textColor={"gray.600"}>
                  Un objet de contexte de base de données dans une application
                  web qui est créé une fois par requête HTTP
                </Td>
              </Tr>
              <Tr>
                <Td>Singleton</Td>
                <Td>
                  {
                    "Une seule instance de l'objet est créée et partagée pendant toute la durée de vie de l'application"
                  }
                </Td>
                <Td textColor={"gray.600"}>
                  {"Un service de logging ou un service de configuration"}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </SectionContent>
    </Section>
  );
};

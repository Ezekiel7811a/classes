"use client";

import {
  Image,
  ListItem,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import "@/app/globals.css";
import PageLayout from "@/app/components/page-layout/PageLayout";
import { useRouter } from "next/navigation";
import MyLink from "@/app/components/my-link/MyLink";
import PrismLoader from "@/app/components/prism-loader/PrismLoader";

const JustePrix = () => {
  const { push } = useRouter();
  return (
    <PageLayout>
      <Text fontSize={"xxx-large"}>Juste Prix</Text>
      <Text fontSize={"x-large"}>Introduction</Text>
      <Text>
        {" "}
        Pour commencer notre premier projet il va falloir installer tout ce qui
        est nécessaire à faire tourner notre programme. Un éditeur de texte,
        nous allons utiliser{" "}
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
      <Text fontSize={"x-large"}>Création du Projet</Text>
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
      <Text fontSize={"x-large"}>Variables et Data Types</Text>
      <Text>
        {
          "En programmation, une variable est une façon de stocker une information que votre programme peut ensuite manipuler. Vous pouvez imaginer une variable comme une boîte où vous pouvez garder quelque chose, comme un nombre ou un texte, pour l'utiliser plus tard dans votre programme. Chaque boîte (ou variable) a un nom unique pour que vous puissiez la retrouver facilement."
        }
      </Text>
      <pre className="language-csharp">
        <code className="language-csharp">int age = 25;</code>
      </pre>
      <Text>
        Ici int est le type de la variable, age est le nom de la variable et 25
        est la valeur de la variable. Voici les types que nous allons voir le
        plus souvent :
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

      <Text fontSize={"x-large"}>Opérations Input et Output</Text>
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
      <Text fontSize={"x-large"}>Les Structures de Contrôle</Text>
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
      <Text fontSize={"x-large"}>Gestion des Erreurs</Text>
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

      <Text fontSize={"x-large"}>{"C'est à vous"}</Text>
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

      <PrismLoader />
    </PageLayout>
  );
};

export default JustePrix;

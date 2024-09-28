import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

const Listes = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Extension sur les listes</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          Afin de réaliser l exercice nous allons voir quelques fonctions que
          nous met la bibliothèque Generics de .NET
        </Text>
      </SectionContent>
      <pre className="language-csharp">
        <code className="language-csharp">
          {
            "List<string> mots = new List<string> { 'chien', 'chat', 'poisson', 'oiseau', 'souris' };\n//Insérer un item dans la liste\nmots.Insert(index, 'item');\n//Supprimer un item de la liste\nmots.Remove('item');\n//Supprimer un item à un index précis\nmots.RemoveAt(index);\n//Vérifier si un item est dans la liste\nmots.Contains('item');\n//Trier la liste\nmots.Sort();\n//Inverser la liste\nmots.Reverse();\n//Obtenir un item à un index précis\nstring item = mots[index];\n//Obtenir le nombre d'item dans la liste\nint nombreItems = mots.Count;"
          }
        </code>
      </pre>
      <Text>
        Dernier point très important en programmation nous pouvons voir les
        string comme des listes de char (lettres). Ainsi nous pouvons les
        traiter de la même manière qu une liste d animaux.
      </Text>
    </Section>
  );
};

export default Listes;

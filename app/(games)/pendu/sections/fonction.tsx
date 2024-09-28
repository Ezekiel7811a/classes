import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

const Fonction = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Les fonctions</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          Nous commençons par créer une fonction ChoisirMot qui sélectionne un
          mot au hasard dans une liste prédéfinie. Cette fonction simplifie le
          processus de sélection du mot à deviner et peut être réutilisée à
          chaque nouvelle partie.
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "string ChoisirMot()\n{\n    List<string> mots = new List<string> { 'chien', 'chat', 'poisson', 'oiseau', 'souris' };\n    Random random = new Random();\n    int index = random.Next(mots.Count);\n    return mots[index];\n}"
            }
          </code>
        </pre>
        <Text>
          Dans cet exemple, on dit que la fonction s appelle ChoisirMot et prend
          en parametres ce qu il y a dans les paranthèses (ici rien). Elle
          retourne la variable qui se trouve derrière le mot clé return. Nous
          aurions pu faire une fonction qui prend en paramètre la liste par
          exemple afin d eviter de recréer la liste à chaque fois, même logique
          pour le randomisateur.
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "string ChoisirMot(List<string> mots, Random randomisateur)\n{\n    int index = randomisateur.Next(mots.Count);\n    return mots[index];\n}"
            }
          </code>
        </pre>
      </SectionContent>
    </Section>
  );
};

export default Fonction;

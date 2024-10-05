import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

const Classes = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          {"L'analogie : La classe comme un modèle de voiture"}
        </SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Imagine que tu veux créer plusieurs voitures pour un jeu. Chaque voiture peut avoir un modèle, une couleur, et une vitesse. Mais au lieu de créer chaque voiture de zéro, tu pourrais utiliser un modèle qui te permet de fabriquer des voitures avec les mêmes types de caractéristiques. En C#, une classe fonctionne exactement comme ce modèle. Elle décrit ce que chaque voiture (ou objet) peut avoir et faire."
          }
        </Text>
        <pre className="language-csharp">
          <code>{`class Voiture\n{\n     public string Couleur;\n     public int Vitesse;\n\n     public void Rouler()\n     {\n          Console.WriteLine("Vrrrrroum")\n     }\n}`}</code>
        </pre>
        <Text>
          {
            "Dans cet exemple, la classe Voiture décrit ce que chaque voiture peut avoir et faire. Elle a deux propriétés = ce qu'elle peut avoir (Couleur et Vitesse) et une méthode = ce qu'elle peut faire (Rouler)."
          }
        </Text>
        <Text>
          {
            "Petit rappel : le type de la méthode / fonction est 'void' car elle ne retourne rien. autrement dit, elle ne renvoie pas de valeur, si elle renvoyait un chiffre par exemple elle serait de type int"
          }
        </Text>
      </SectionContent>
    </Section>
  );
};

export default Classes;

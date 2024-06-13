import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

export const DependencyInjection = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Injection de Dépendances</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "L'injection de dépendances est un design pattern. C'est un principe de conception logicielle. Vous êtes-vous déjà retrouvé avec un programme spaghetti où tous vos objets référencent d'autres objets et il devient impossible de changer une seule dépendance ? C'est là qu'intervient ce design pattern. En effet l'injection de dépendances permet d'enregistrer dans des conteneurs les instances des services qui vous seront requis. In fine ça ressemble à ça :"
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "_container.Register<IService, Service>().AsTransient(); //on enregistre un service dans un conteneur en précisant qu'il doit être instancié à chaque fois qu'il est demandé"
            }
          </code>
        </pre>
        <Text>
          {
            "Il suffira ensuite de demander l'injection du service depuis la classe qui en a besoin. Pour cela on utilisera les attributs :"
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {"class ClassA\n{\n    [Inject]\n    IServiceB _serviceB;\n}"}
          </code>
        </pre>
      </SectionContent>
    </Section>
  );
};

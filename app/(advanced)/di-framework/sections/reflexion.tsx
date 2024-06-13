import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Text } from "@chakra-ui/react";

export const Reflexion = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Reflexion</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "Reflexion dans .NET c'est en fait un espace de noms qui permet aux programmes d'inspecter et de manipuler des objets à l'exécution. En d'autres termes, grâce à la réflexion, un programme peut regarder à l'intérieur de ses propres structures, comme les classes et les objets, et obtenir des informations sur eux, ou même les modifier dynamiquement. Concrètement cela va nous permettre de trouver les objets qui ont des champs avec l'attribut [Inject] et ainsi de leurs injecter les dépendances associées."
          }
        </Text>
        <pre className="language-csharp">
          <code className="language-csharp">
            {
              "_object.GetType()\n  .GetFields(_flags)\n  .Where(f => Attribute.IsDefined(f, typeof(InjectAttribute)))\n  .ToList()\n  .ForEach(f => f.SetValue(_object, _container.Resolve(f.FieldType)));"
            }
          </code>
        </pre>
        <Text>
          {
            "A noter que les flags ici permettent de définir où nous allons chercher les fields en question, dans ce cas Public, NonPublic et Instance."
          }
        </Text>
      </SectionContent>
    </Section>
  );
};

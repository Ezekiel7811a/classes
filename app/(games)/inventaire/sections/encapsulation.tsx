import Section from "@/app/components/section/Section";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import { Image, Text } from "@chakra-ui/react";

const Encapsulation = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Encapsulation</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Text>
          {
            "L'encapsulation est un principe de la programmation orientée objet qui consiste à regrouper les données et les méthodes qui agissent sur ces données dans une même entité. En C#, cela se fait grâce aux classes. De plus afin de garder le code prorpe on va garder chaque classe dans un fichier différent et le nommer avec le nom de la classe tel que :"
          }
        </Text>
        <Image
          src="/images/inventaire/inventaire.png"
          alt="Terminal"
          height={"20rem"}
          objectFit={"contain"}
        />
      </SectionContent>
    </Section>
  );
};

export default Encapsulation;

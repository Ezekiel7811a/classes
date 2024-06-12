import PageLayout from "@/app/components/page-layout/PageLayout";
import Section from "@/app/components/section/Section";
import { Text } from "@chakra-ui/react";
import { CycleDeVie } from "./sections/cycle-de-vie";

const DiFramework = () => {
  return (
    <PageLayout>
      <Text fontSize="xxx-large">DI Framework</Text>
      <CycleDeVie />
    </PageLayout>
  );
};

export default DiFramework;

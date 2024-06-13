"use client";

import PageLayout from "@/app/components/page-layout/PageLayout";
import Section from "@/app/components/section/Section";
import { Text } from "@chakra-ui/react";
import { CycleDeVie } from "./sections/cycle-de-vie";
import { DependencyInjection } from "./sections/dependency-injection";
import PrismLoader from "@/app/components/prism-loader/PrismLoader";
import { Reflexion } from "./sections/reflexion";
import { Attributes } from "./sections/attributes";
import { CestAVous } from "./sections/cestavous";

const DiFramework = () => {
  return (
    <PageLayout>
      <Text fontSize="xxx-large">DI Framework</Text>
      <DependencyInjection />
      <Attributes />
      <CycleDeVie />
      <PrismLoader />
      <Reflexion />
      <CestAVous />
    </PageLayout>
  );
};

export default DiFramework;

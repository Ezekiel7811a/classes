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
import Section from "@/app/components/section/Section";
import SectionHeader from "@/app/components/section/section-header/SectionHeader";
import SectionTitle from "@/app/components/section/section-header/section-title/SectionTitle";
import SectionContent from "@/app/components/section/section-content/SectionContent";
import { Introduction } from "./sections/introduction";
import { CreationProjet } from "./sections/creation-projet";
import { VariablesDataTypes } from "./variable-datatype";
import { InputsOutputs } from "./sections/inputs-outputs";
import { StructuresControle } from "./sections/structures-controle";
import { GestionErreurs } from "./sections/gestion-erreurs";
import { CestAVous } from "./sections/cestavous";

const JustePrix = () => {
  return (
    <PageLayout>
      <h1>Juste Prix</h1>
      <Introduction />
      <CreationProjet />
      <VariablesDataTypes />
      <InputsOutputs />
      <StructuresControle />
      <GestionErreurs />
      <CestAVous />
      <PrismLoader />
    </PageLayout>
  );
};

export default JustePrix;

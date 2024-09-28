"use client";

import PageLayout from "@/app/components/page-layout/PageLayout";
import { List, Text } from "@chakra-ui/react";
import Introduction from "./sections/introduction";
import Fonction from "./sections/fonction";
import PrismLoader from "@/app/components/prism-loader/PrismLoader";
import Listes from "./sections/listes";
import CestAVous from "./sections/cestavous";

const Pendu = () => {
  return (
    <PageLayout>
      <h1>Pendu</h1>
      <Introduction />
      <Fonction />
      <Listes />
      <CestAVous />
      <PrismLoader />
    </PageLayout>
  );
};

export default Pendu;

"use client";

import PageLayout from "@/app/components/page-layout/PageLayout";
import Classes from "./sections/classes";
import PrismLoader from "@/app/components/prism-loader/PrismLoader";
import Encapsulation from "./sections/encapsulation";
import CestAVous from "./sections/cestavous";

const Inventaire = () => {
  return (
    <PageLayout>
      <h1>Inventaire</h1>
      <Classes />
      <Encapsulation />
      <CestAVous />
      <PrismLoader />
    </PageLayout>
  );
};

export default Inventaire;

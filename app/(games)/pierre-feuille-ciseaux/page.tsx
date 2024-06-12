"use client";

import PageLayout from "@/app/components/page-layout/PageLayout";
import { ListeEtArrays } from "./sections/listes-et-arrays";
import PrismLoader from "@/app/components/prism-loader/PrismLoader";
import { CestAVous } from "./sections/cestavous";

const PierreFeuilleCiseauxPage = () => {
  return (
    <PageLayout>
      <h1>Pierre Feuille Ciseaux</h1>
      <ListeEtArrays />
      <CestAVous />
      <PrismLoader />
    </PageLayout>
  );
};

export default PierreFeuilleCiseauxPage;

import type { Metadata } from "next";

import PlanVisitPage from "@/components/visit/PlanVisitPage";

export const metadata: Metadata = {
  title: "Plan A Visit",
  description:
    "Plan your visit to New Christian Faith Ministry at our Head Office in Kwashieman or Ebenezer Assemblies in Awoshie.",
};

export default function PlanAVisit() {
  return <PlanVisitPage />;
}
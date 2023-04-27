import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import CareerPanel from "@/components/career.panel";
import MainLayout from "@/components/main.layout";

const Page: NextPageWithLayout = () => {
  return <CareerPanel />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;

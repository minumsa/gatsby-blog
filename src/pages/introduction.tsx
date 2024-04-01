import SEO from "../SEO";
import Introduction from "../components/home/main/Introduction";
import Layout from "../components/Layout";
import React, { FC } from "react";
import { siteTitle } from "../lib/constants";

const Page: FC = () => {
  return (
    <>
      <SEO
        ogTitle={`소개 — ${siteTitle}`}
        ogType={"website"}
        ogURL={"https://blog.divdivdiv.com/introduction"}
      />
      <Layout footerContent={"소개"}>
        <Introduction />
      </Layout>
    </>
  );
};

export default Page;

import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Introduction from "../components/HomePage/Main/Introduction";
import Layout from "../components/Layout";
import ExplainInfo from "../components/Nav/ExplainInfo";
import React, { FC } from "react";

const ExplainPage: FC = () => {
  return (
    <>
      <SEO
        title={`일상연습`}
        ogTitle={`소개 — 일상연습`}
        ogType={"website"}
        ogUrl={"https://14461.gatsbyjs.io/introduction"}
      />
      <Layout info={<ExplainInfo />}>
        <HomePage content={<Introduction />} title={null} />
      </Layout>
    </>
  );
};

export default ExplainPage;

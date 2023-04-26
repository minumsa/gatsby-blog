import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Connect from "../components/HomePage/Main/Connect";
import Layout from "../components/Layout";
import ConnectInfo from "../components/Nav/ConnectInfo";
import React, { FC } from "react";

const ConnectPage: FC = () => {
  return (
    <Layout info={<ConnectInfo />}>
      <SEO title={"일상연습"} />
      <HomePage content={<Connect />} />
    </Layout>
  );
};

export default ConnectPage;

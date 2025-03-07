import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import TypedTextComp from "./typedtext";
import axios from "axios";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [bgUrl, setBgUrl] = useState("");
  useEffect(() => {
    axios.get("https://api.no0a.cn/api/bing/0").then((res) => {
      setBgUrl(res.data.bing.url);
    });
  }, []);
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)} style={{backgroundImage:`url(${bgUrl})`}}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className="hero__subtitle">
          <TypedTextComp />
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/intro"
          >
            认识一下 - 2min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

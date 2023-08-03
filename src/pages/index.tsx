import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import TypedTextComp from './typedtext'
import styles from './index.module.css';
import axios from 'axios'
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [bgUrl,setBgUrl] = useState("");
  useEffect(()=> {
    axios.get("https://api.no0a.cn/api/bing/0").then(res => {
      setBgUrl(res.data.bing.url)
    })
  },[]);
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage:`url(${bgUrl})`}}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle"><TypedTextComp/></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/intro">
            认识一下 - 2min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

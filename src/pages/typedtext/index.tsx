import React, { useEffect, useRef } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import typewriter from "typewriter-lite";
declare type typedtext = {
  element: any;
  texts_array: string[] | [];
  write_delay?: number | 500;
  remove_delay?: number | 500;
  write_delay_per_char?: number | 100;
  remove_delay_per_char?: number | 100;
};
const TypedTextComp = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const { title, tagline } = siteConfig;
  const typeRef = useRef(null);
  const text = [...tagline.split("；")];

  useEffect(() => {
    typewriter({
      element: typeRef.current,
      texts_array: text,
    } as typedtext);
  }, []);
  return (
    <div
      ref={typeRef}
      style={{
        minHeight: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  );
};
export default TypedTextComp;

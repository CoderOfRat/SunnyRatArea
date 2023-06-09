/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  introSidebar: [
    { type: "autogenerated", dirName: "intro" },
  ],
  vueSidebar: [
    { type: "autogenerated", dirName: "vue" },
  ],
  reactSidebar: [
    { type: "autogenerated", dirName: "react" },
  ],
  nodejsLifecycleSidebar: [
    { type: "autogenerated", dirName: "nodejs-lifecycle" },
  ],
  howToLearnSidebar: [
    { type: "autogenerated", dirName: "how-to-learn" },
  ],
  funnyThingsSidebar: [
    { type: "autogenerated", dirName: "funny-things" },
  ],
  linuxSidebar: [
    { type: "autogenerated", dirName: "linux" },
  ],
  nginxSidebar: [
    { type: "autogenerated", dirName: "nginx" },
  ],
  sourcesSidebar: [
    { type: "autogenerated", dirName: "sources" },
  ]
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "学 鼠 偷 粮",
  tagline:
    "岁月风霜三十载，百味人生唯己知；忆往昔，年少轻狂时，俱远矣；看今日，而立之年始，继拼之！",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: 'https://coderofrat.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.NODE_ENV === 'production' ? '/SunnyRatArea/' : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CoderOfRat', // Usually your GitHub org/user name.
  projectName: 'SunnyRatArea', // Usually your repo name.
  trailingSlash: false, // 允许自定义 URL/链接末尾斜杠的存在/不存在，以及如何生成静态 HTML 文件
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/CoderOfRat/SunnyRatArea/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          postsPerPage: 'ALL',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/CoderOfRat/SunnyRatArea/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: '期刊', // 设置blog期刊的菜单栏标题
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "SunnyRatArea",
      logo: {
        alt: "A Rat",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "introSidebar",
          position: "left",
          label: "简介",
        },
        {
          type: "docSidebar",
          sidebarId: "vueSidebar",
          position: "left",
          label: "Vue",
        },
        {
          type: "docSidebar",
          sidebarId: "reactSidebar",
          position: "left",
          label: "React",
        },
        {
          type: "docSidebar",
          sidebarId: "nodejsLifecycleSidebar",
          position: "left",
          label: "Nodejs",
        },
        {
          type: "docSidebar",
          sidebarId: "golangSiderbar",
          position: "left",
          label: "Golang",
        },
        {
          type: "docSidebar",
          sidebarId: "nginxSidebar",
          position: "left",
          label: "Nginx",
        },
        {
          type: "docSidebar",
          sidebarId: "sourcesSidebar",
          position: "left",
          label: "收藏",
        },
        {
          type: "docSidebar",
          sidebarId: "howToLearnSidebar",
          position: "left",
          label: "何所得&何所获",
        },
        {
          type: "docSidebar",
          sidebarId: "funnyThingsSidebar",
          position: "left",
          label: "独乐乐不如众乐乐",
        },
        { to: "/blog", label: "日复一文", position: "left" },
        {
          href: "https://github.com/CoderOfRat",
          // label: "GitHub",
          html: `<div style="display:flex;justify-content: center;align-items: flex-end;"><svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg></div>`,
          position: "right",
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © 2023 - ${new Date().getFullYear()} <a href="https://github.com/CoderOfRat">CoderOfRat</a>, Inc. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true, // 显示 隐藏/展示侧边菜单的按钮
        autoCollapseCategories: true, // 自动收起其他分类文档
      },
    },
    algolia: {
      appId: 'CYF353MA4J',
      apiKey: 'c3c46da4423ae30e708132818a43660a',
      indexName: "sunnyratarea",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

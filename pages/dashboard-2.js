import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const dashboard2 = ({ data }) => {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        {/* Title Tag */}
        <title>{data.titleTag}</title>

        {/* Meta Description */}
        <meta content={data.metaDescription} name="description" />

        {/* OG Title */}
        <meta content={data.ogTitle} property="og:title" />

        {/* OG Description */}
        <meta content={data.ogDescription} property="og:description" />

        {/* OG Image */}
        <meta content={data.ogImage} property="og:image" />

        {/* Twitter Title */}
        <meta content={data.twitterTitle} property="twitter:title" />

        {/* Twitter Description */}
        <meta content={data.twitterDescription} property="twitter:description" />

        {/* Twitter Image */}
        <meta content={data.twitterImage} property="twitter:image" />

        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* Favicon*/}
        <link href="images/favicon.png" rel="icon" type="image/png" />

        {/* Webclip */}
        <link href="images/webclip.png" rel="apple-touch-icon" />

        {/* Fall Back CSS */}
        {/* [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] */}
      </Head>
      <div>
        <div className="div-block">
          <div className="div-block-2 w-clearfix"><img src="images/HYPERTARGET-1.png" loading="lazy" alt="" className="image" />
            <div data-hover="false" data-delay={0} className="dropdown w-dropdown">
              <div className="dropdown-toggle w-clearfix w-dropdown-toggle"><img src="images/Mask-Group.png" loading="lazy" alt="" className="image-2" /></div>
              <nav className="w-dropdown-list">
                <a href="#" className="w-dropdown-link">Link 1</a>
                <a href="#" className="w-dropdown-link">Link 2</a>
                <a href="#" className="w-dropdown-link">Link 3</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="div-block-4">
          <div className="div-block-3"><img src="images/Group.png" loading="lazy" alt="" className="image-3" />
            <h3 className="heading">Create Your First User Journey</h3>
            <a href="/how-do-you-want-to-create-your-funnel" className="button w-button">Add User Journey</a>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/dashboard2.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default dashboard2;

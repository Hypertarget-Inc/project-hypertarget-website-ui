import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const successPopup = ({ data }) => {

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
        <div className="dashboard-header wf-section">
          <div className="div-block-138">
            <div className="div-block-153"><img src="images/dash-logo.svg" loading="lazy" alt="" className="image-60" /></div>
            <div className="div-block-139"><img src="images/bell-icon.svg" loading="lazy" alt="" className="image-58" /><img src="images/jon-doe-avatar.svg" loading="lazy" alt="" className="image-59" />
              <h1 className="heading-70">John Doe</h1>
              <div data-hover="false" data-delay={0} className="dropdown-mob w-dropdown">
                <div className="dropdown-toggle-2 w-dropdown-toggle">
                  <div className="icon-6 w-icon-dropdown-toggle" />
                  <div className="div-block-152" />
                </div>
                <nav className="dropdown-list w-dropdown-list">
                  <a href="#" className="dropdown-link w-dropdown-link">John Doe</a>
                  <a href="#" className="dropdown-link w-dropdown-link">John Doe</a>
                  <a href="#" className="dropdown-link w-dropdown-link">John Doe</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-4">
            <div className="div-block-3"><img src="images/Group.png" loading="lazy" alt="" className="image-3" />
              <h3 className="heading">Create Your First User Journey</h3>
              <a href="/how-do-you-want-to-create-your-funnel" className="button w-button">Add User Journey</a>
            </div>
          </div>
          <div className="div-block-28 _100vh" />
        </div>
        <div className="div-block-118">
          <div className="div-block-119"><img src="images/Group-1849.svg" loading="lazy" alt="" />
            <div className="text-block-4">Congratulations!</div>
            <div className="text-block-5">Pixel was succesfully added.</div>
            <a href="#" className="button-19 ud w-button">OK</a>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>



    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/successPopup.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default successPopup;

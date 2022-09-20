import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const inputView = ({ data }) => {

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
        <div className="div-block-135 v2-2">
          <div className="div-block-131 auto">
            <div className="div-block-81 v2">
              <div className="div-block-151">
                <h1 className="heading-50">User Journey 1</h1>
              </div>
              <div className="div-block-82">
                <div className="div-block-84">
                  <div className="div-block-85">
                    <h1 className="heading-51">1,249</h1>
                    <h1 className="heading-52">987</h1>
                    <h1 className="heading-53">664</h1>
                    <h1 className="heading-54">330</h1>
                    <h1 className="heading-55">250</h1>
                  </div>
                  <div className="div-block-86"><img src="images/Group-1659-2.svg" loading="lazy" alt="" className="image-30" /><img src="images/Group-1660.svg" loading="lazy" alt="" className="image-39" /><img src="images/Group-1659-3.svg" loading="lazy" alt="" className="image-38" /><img src="images/Group-1659-1.png" loading="lazy" alt="" className="image-37 v2" /></div>
                </div>
                <div className="div-block-83"><img src="images/Hypertarget-v-18-1-1.svg" loading="lazy" alt="" className="image-34 v2" /><img src="images/Vector-1.svg" loading="lazy" alt="" className="image-31" /><img src="images/15337-Tilted-Account-Details.svg" loading="lazy" alt="" className="image-33" /><img src="images/Vector-1.svg" loading="lazy" alt="" className="image-31" /><img src="images/15337-Tilted-Address.svg" loading="lazy" alt="" className="image-32" /><img src="images/Vector-1.svg" loading="lazy" alt="" className="image-31" /><img src="images/15337-Tilted-Checkout.svg" loading="lazy" alt="" className="image-35" /><img src="images/Vector-1.svg" loading="lazy" alt="" className="image-31" /><img src="images/15337-Tilted-Thank-you-page.svg" loading="lazy" alt="" className="image-36" /></div>
              </div>
            </div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/inputView.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default inputView;

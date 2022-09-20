import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const addPixel = ({ data }) => {

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
          <div className="div-block-28">
            <div className="div-block-120">
              <div className="div-block-121-copy new">
                <div className="text-block-8-copy">Add The Hypertarget Pixel To Your Site</div>
                <div className="div-block-128">
                  <div className="div-block-129">
                    <div className="text-block-10">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13</div>
                  </div>
                  <div className="div-block-130">
                    <div className="text-block-11">&lt;a href=”https://twitter.com/VelizaraTel” &nbsp;</div>
                    <div className="_2">onClick=”_gaq.push([‘_trackEvent’, ‘social media’, ‘twitter share’, ‘Velizara Tellalyan’]);” target=”_blank”&gt;Follow Velizara on Twitter&lt;/a&gt;</div>
                    <div className="_2">&lt;input onclick=”_gaq.push([_’trackEvent’, ‘form’, ‘submit’, ’email subscription’,10]);” type=”image” name=”submit” src=”[buttonURL]” /&gt;</div>
                    <div className="_2">&lt;a href=”http://www.yourdomain.com/banner1-landing-page/″onClick=”_gaq.push([‘_trackEvent’, ‘banner’, ‘internal link’, ‘name of thebanner’]);”&gt;Anchor text &lt;/a&gt;</div>
                    <div className="_2">&lt;a href=”/downloads/whitepapers/name-of-the-whitepaper.pdf”onClick=”_gaq.push([‘_trackEvent’, ‘whitepaper’, ‘download’, ‘Name of theWhitepaper’, 5, true]);” target=”_blank”&gt;Download This Whitepaper&lt;/a&gt;</div>
                    <div className="text-block-11">&lt;ahref=”https://developers.google.com/analytics/devguides/collection/gajs<br />/eventTrackerGuide”</div>
                    <div className="_2">onClick=”_gaq.push([‘_trackEvent’, ‘resources’, ‘outbound link’, ‘https://developers.google.com/analytics/devguides/collection<br />/gajs/eventTrackerGuide’, 1, true]);” target=”_blank”&gt;Google’s Guide to Event Tracking&lt;/a&gt;</div><img src="images/bx_bx-copy.svg" loading="lazy" alt="" className="image-56" />
                  </div>
                </div>
                <div className="div-block-127">
                  <a href="#" className="button-19 aaa m25 w-button">COPY&nbsp;CODE</a>
                  <a href="#" className="button-19 aaa l25 w-button">VERIFY&nbsp;INSTALLATION</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* [if lte IE 9]><![endif] */}
      </div>



    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/addPixel.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default addPixel;

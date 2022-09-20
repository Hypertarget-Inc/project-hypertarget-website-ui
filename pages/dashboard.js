import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const dashboard = ({ data }) => {

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

      <div className="div-block-148">
        <div className="side-nav">
          <div className="div-block-149">
            <div className="db-menu-div ham"><img src="images/ham-menu.svg" loading="lazy" alt="" className="image-62" /></div>
          </div>
          <div className="main-menu-div">
            <a href="#" className="db-menu-div active w-inline-block"><img src="images/dasb-1.svg" loading="lazy" alt="" /></a>
            <a href="#" className="db-menu-div w-inline-block"><img src="images/home-meu.svg" loading="lazy" alt="" /></a>
            <div className="db-menu-div"><img src="images/pie-menu.svg" loading="lazy" alt="" /></div>
            <div className="db-menu-div"><img src="images/kit-menu.svg" loading="lazy" alt="" /></div>
            <div className="db-menu-div"><img src="images/cale-menu.svg" loading="lazy" alt="" /></div>
            <div className="db-menu-div"><img src="images/setting-menu.svg" loading="lazy" alt="" /></div>
          </div>
          <div>
            <div className="db-menu-div"><img src="images/log-off-menu.svg" loading="lazy" alt="" /></div>
          </div>
        </div>
        <div className="div-block-147">
          <div className="mobile-mwnu">
            <div className="ham-menu mob"><img src="images/ham-menu.svg" loading="lazy" alt="" /></div>
            <div className="dashboard-header menu-db mob wf-section">
              <div className="div-block-138">
                <div className="div-block-150"><img src="images/dash-logo.svg" loading="lazy" alt="" className="image-60 menu-db" /></div>
                <div className="div-block-139"><img src="images/bell-icon.svg" loading="lazy" alt="" className="image-58" /><img src="images/jon-doe-avatar.svg" loading="lazy" alt="" className="image-59" />
                  <h1 className="heading-70">John Doe</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="ham-menu"><img src="images/ham-menu.svg" loading="lazy" alt="" /></div>
          <div className="dashboard-header menu-db wf-section">
            <div className="div-block-138">
              <div className="div-block-150"><img src="images/dash-logo.svg" loading="lazy" alt="" className="image-60 menu-db" /></div>
              <div className="div-block-139"><img src="images/bell-icon.svg" loading="lazy" alt="" className="image-58" /><img src="images/jon-doe-avatar.svg" loading="lazy" alt="" className="image-59" />
                <h1 className="heading-70">John Doe</h1>
              </div>
            </div>
          </div>
          <div className="div-block-135 v2">
            <div className="div-block-137">
              <h1 className="heading-35 v2">User Journey Dashboard</h1>
            </div>
            <div className="div-block-131 auto">
              <div className="div-block-48 v2">
                <div className="div-block-58 v2">
                  <div className="div-block-49 v2">
                    <div className="div-block-51">
                      <a href="#" className="div-block-52 w-inline-block">
                        <h1 className="heading-38">User Journey 1</h1>
                      </a>
                      <a href="#" className="div-block-53 w-inline-block">
                        <h1 className="heading-36">eDIT JOURNEY</h1>
                      </a>
                      <a href="#" className="link-block-9 w-inline-block">
                        <h1 className="heading-37">Share</h1>
                      </a>
                    </div>
                    <div className="div-block-50"><img src="images/Group-1622.svg" loading="lazy" alt="" className="image-23" />
                      <div className="div-block-67">
                        <div className="div-block-54 div-block-57 v2">
                          <div className="link-block-8 _1 v2">
                            <h1 className="heading-40" />
                          </div>
                          <div className="link-block-8 _2 v2">
                            <h1 className="heading-40 _2 v2" />
                          </div>
                          <div className="link-block-8 _3 v2">
                            <h1 className="heading-40 _3" />
                          </div>
                          <div className="link-block-8 _4">
                            <h1 className="heading-40 _4" />
                          </div>
                        </div>
                        <div className="div-block-56"><img src="images/Group-1622_1.svg" loading="lazy" alt="" className="image-26" /><img src="images/Group-1622.png" loading="lazy" alt="" className="image-22 v2" /></div>
                        <div className="div-block-55 v2">
                          <div className="link-block-7 v2">
                            <h1 className="heading-39">View landing page</h1>
                          </div>
                          <div className="link-block-7 _2 v2">
                            <h1 className="heading-39">Click Button</h1>
                          </div>
                          <div className="link-block-7 _3 v2">
                            <h1 className="heading-39">Click Schedule</h1>
                          </div>
                          <div className="link-block-7 _4 _5">
                            <h1 className="heading-39">Signup</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-embed">
                      <style dangerouslySetInnerHTML={{ __html: "\n@media(min-width:370px) and (max-width:420px){\n.heading-40{\nfont-size:11px;\n}\n.link-block-8._3 {\n    margin-right: -35px;\n    margin-bottom: 18px;\n}\n.link-block-8._2 {\n    margin-right: -20px;\n    margin-bottom: 12px;\n}\n.image-26{\nheight:153px;\n}\n}\n@media(max-width:369px){\n.heading-40{\nfont-size:11px;\n}\n.link-block-8._3 {\n    margin-right: -35px;\n    margin-bottom: 13px;\n}\n.link-block-8._2 {\n    margin-right: -20px;\n    margin-bottom: 12px;\n}\n.image-26{\nheight:153px;\n}\n.link-block-8._1 {\n    margin-top: 7px;\n    margin-right: -10px;\n    margin-bottom: 11px;\n}\n}\n" }} />
                    </div>
                    <a href="#" className="button-14 w-button">+ ADD A JOURNEY</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* [if lte IE 9]><![endif] */}


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/dashboard.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default dashboard;

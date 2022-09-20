import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const automaticallyTrackPage = ({ data }) => {

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
        <Header />
        <div className="div-block-136 v2">
          <div className="div-block-131 auto">
            <div className="div-block-59 v2">
              <div className="div-block-60">
                <div className="div-block-61">
                  <h1 className="heading-41 v2">Automatically Track Every User Journey Variation</h1>
                  <p className="paragraph-19">Enter the action that you want to track below. We will automatically detect every way that a user/customer gets to that point on your site</p>
                  <a href="#" className="link-block-10 w-inline-block">
                    <h1 className="heading-42">https://www.someurlwillbehere.com/qweq12312</h1>
                  </a>
                  <div className="div-block-62 v2">
                    <div className="w-form">
                      <form id="email-form" name="email-form" data-name="Email Form" method="get">
                        <div className="html-embed-2 w-embed">
                          <div className="custom-select">
                            <select>
                              <option value={0}>Page view</option>
                              <option value={1}>Submit</option>
                            </select>
                          </div>
                        </div>
                        <div className="w-embed">
                          <div className="custom-select">
                            <select>
                              <option value={0}>Click</option>
                              <option value={1}>Submit</option>
                              <option value={2}>Buy Now</option>
                              <option value={3}>Get Financing</option>
                            </select>
                          </div>
                          <style dangerouslySetInnerHTML={{ __html: "\n/*the container must be positioned relative:*/\n.custom-select {\n  position: relative;\n  font-family:\"Manrope\";\n}\n.custom-select select {\n  display: none; /*hide original SELECT element:*/\n}\n.select-selected {\n  background-color:#F3F3F3;\n  border-radius:8px;\n  height:60px;\n  padding:8px 25px;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  border:1px solid #DAE6EC;\n  justify-content:flex-start;\n}\n/*style the arrow inside the select element:*/\n.select-selected:after {\n  position: absolute;\n  content:url(\"https://uploads-ssl.webflow.com/61ae2f45615793c81314e5b7/61dbfe2dd5fc15c0a432583d_Polygon%205.png\");\n  top: 18px;\n  right:25px;\n  width: 8px;\n  height: 8px;\n}\n/*point the arrow upwards when the select box is open (active):*/\n.select-selected.select-arrow-active:after {\n  top: 18px;\n}\n/*style the items (options), including the selected item:*/\n.select-items div,.select-selected {\n  color:#44474A;\n  font-size:16px;\n  line-height:25px;\n  font-weight:500;\n  cursor: pointer;\n  user-select: none;\n}\n.select-items div{\npadding:15px 10px;\nmargin:10px 0;\n}\n/*style items (options):*/\n.select-items {\n  position:relative;\n  background-color:#F3F3F3;\n  top: calc(100% - 5px);\n  left: 0;\n  right: 0;\n  z-index: 99;\n  margin-top:-4px;\n  border-radius:0 0 8px 8px;\n  padding:15px;\n  border-color:#DAE6EC;\n  border-width:1px 0 0;\n  border-style:solid;\n}\n/*hide the items when the select box is closed:*/\n.select-hide {\n  display: none;\n}\n.select-items div:hover, .same-as-selected {\n  background-color:#FFFFFF;\n  border-radius:10px;\n}\n" }} />
                        </div>
                        <div className="w-embed w-script">
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="button-15 v2 w-button">SAVE</a>
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
    .readFileSync("public/content/automaticallyTrackPage.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default automaticallyTrackPage;

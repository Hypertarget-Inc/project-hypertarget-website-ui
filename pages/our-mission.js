import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const OurMission = ({ data }) => {

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
        <div className="section-13 wf-section">
          <div className="div-block-28">
            <div className="div-block-91">
              <h1 className="heading-61">Our mission</h1>
              <p className="paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="div-block-92">
                <div className="div-block-93" />
              </div>
            </div>
            <div className="div-block-155">
              <div className="div-block-156"><img src="images/image-36.svg" loading="lazy" alt="" />
                <div className="div-block-157">
                  <div className="text-block-14">Lorem ipsum dolor</div>
                  <div className="text-block-15">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</div>
                  <p className="paragraph-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="div-block-156"><img src="images/image-36.svg" loading="lazy" alt="" />
                <div className="div-block-157">
                  <div className="text-block-14">Lorem ipsum dolor</div>
                  <div className="text-block-15">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</div>
                  <p className="paragraph-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-17 wf-section">
          <div className="div-block-28">
            <div className="div-block-158">
              <div className="div-block-159"><img src="images/Rectangle-3843.png" loading="lazy" srcSet="images/Rectangle-3843-p-500.png 500w, images/Rectangle-3843.png 676w" sizes="(max-width: 751px) 90vw, (max-width: 991px) 676px, (max-width: 1919px) 43vw, 676px" alt="" /></div>
              <div className="div-block-160">
                <div className="text-block-16">Lorem ipsum dolor</div>
                <div className="text-block-17">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</div>
                <p className="paragraph-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
    .readFileSync("public/content/ourMission.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default OurMission;

import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = ({ data }) => {

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
        <div className="wf-section">
          <div className="div-block-28">
            <div className="text-block">Lorem ipsum dolor sit amet</div>
            <p className="paragraph-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis tincidunt gravida. Phasellus feugiat tellus euismod, viverra diam vitae, blandit mi. Fusce orci nisl, tempor sit amet hendrerit sed, dignissim eu velit. Quisque interdum semper tortor, ac efficitur augue interdum sollicitudin. Morbi gravida vestibulum felis, id porta mi ornare et.</p>
            <div className="div-block-116 hide">
              <div id="w-node-c2795346-ced4-8c4d-2040-c69297ae0961-446e7af9" className="div-block-117"><img src="images/Group-1705.svg" loading="lazy" alt="" className="image-53" />
                <div className="text-block-2">Lorem ipsum dolor sit amet</div>
                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</div>
              </div>
              <div id="w-node-_3f5fbb5a-cd19-05d3-10a8-860d4fd5017f-446e7af9" className="div-block-117"><img src="images/Group-1705.svg" loading="lazy" alt="" className="image-53" />
                <div className="text-block-2">Lorem ipsum dolor sit amet</div>
                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</div>
              </div>
              <div id="w-node-_2f618bc7-f33b-7ec9-5044-98b254f21838-446e7af9" className="div-block-117"><img src="images/Group-1705.svg" loading="lazy" alt="" className="image-53" />
                <div className="text-block-2">Lorem ipsum dolor sit amet</div>
                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</div>
              </div>
              <div id="w-node-f7eda000-60d2-9081-4fb0-5c3f2b0c9f79-446e7af9" className="div-block-117"><img src="images/Group-1705.svg" loading="lazy" alt="" className="image-53" />
                <div className="text-block-2">Lorem ipsum dolor sit amet</div>
                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</div>
              </div>
              <div id="w-node-_024f2fac-7840-4c28-e39b-f16adc154d82-446e7af9" className="div-block-117"><img src="images/Group-1705.svg" loading="lazy" alt="" className="image-53" />
                <div className="text-block-2">Lorem ipsum dolor sit amet</div>
                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</div>
              </div>
              <div id="w-node-e492029e-56e4-5434-b0d7-5eb2ff0a720c-446e7af9" className="div-block-117"><img src="images/Group-1705.svg" loading="lazy" alt="" className="image-53" />
                <div className="text-block-2">Lorem ipsum dolor sit amet</div>
                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</div>
              </div>
            </div>
            <div id="w-node-_67e3cd05-42fa-6db0-2239-87cfd47ea60f-446e7af9" className="w-dyn-list">
              <div role="list" className="div-block-116 w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="div-block-117"><img src loading="lazy" alt="" className="image-53" />
                    <div className="text-block-2" />
                    <div className="text-block-3" />
                  </div>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
              <div role="navigation" aria-label="List" className="w-pagination-wrapper pagination">
                <a href="#" aria-label="Previous Page" className="w-pagination-previous"><svg className="w-pagination-previous-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)">
                  <path fill="none" stroke="currentColor" fillRule="evenodd" d="M8 10L4 6l4-4" />
                </svg>
                  <div className="w-inline-block">Previous</div>
                </a>
                <a href="#" aria-label="Next Page" className="w-pagination-next next">
                  <div className="w-inline-block">Next</div><svg className="w-pagination-next-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)">
                    <path fill="none" stroke="currentColor" fillRule="evenodd" d="M4 2l4 4-4 4" />
                  </svg>
                </a>
                <div aria-label="Page 1 of 1" role="heading" className="w-page-count text-block-3" />
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
    .readFileSync("public/content/blog.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default Blog;

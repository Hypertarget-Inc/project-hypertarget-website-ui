import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost = ({ data }) => {

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
            <div className="w-richtext">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis tincidunt gravida. Phasellus feugiat tellus euismod, viverra diam vitae, blandit mi. Fusce orci nisl, tempor sit amet hendrerit sed, dignissim eu velit. Quisque interdum semper tortor, ac efficitur augue interdum sollicitudin. Morbi gravida vestibulum felis, id porta mi ornare et.</p>
              <p>‍</p>
              <p>‍</p>
              <figure className="w-richtext-align-center w-richtext-figure-type-image">
                <div><img src="images/Frame_4.svg" loading="lazy" alt="" /></div>
              </figure>
              <p>‍</p>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lobortis. Pellentesque quis aliquet nulla. Phasellus ut augue sit amet erat sodales lacinia. Mauris ultricies nibh eu eleifend ornare. Mauris sit amet fermentum tortor. Suspendisse potenti. Vestibulum ultrices sollicitudin tortor, tincidunt consequat mi congue congue. Fusce a dolor a turpis volutpat sagittis. Fusce condimentum id elit vitae commodo. Sed blandit mauris fringilla diam fringilla dictum. Nam ac egestas enim.</p>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lobortis. Pellentesque quis aliquet nulla. Phasellus ut augue sit amet erat sodales lacinia. Mauris ultricies nibh eu eleifend ornare. Mauris sit amet fermentum tortor. Suspendisse potenti. Vestibulum ultrices sollicitudin tortor, tincidunt consequat mi congue congue. Fusce a dolor a turpis volutpat sagittis. Fusce condimentum id elit vitae commodo. Sed blandit mauris fringilla diam fringilla dictum. Nam ac egestas enim.</p>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lobortis. Pellentesque quis aliquet nulla. Phasellus ut augue sit amet erat sodales lacinia. Mauris ultricies nibh eu eleifend ornare. Mauris sit amet fermentum tortor. Suspendisse potenti. Vestibulum ultrices sollicitudin tortor, tincidunt consequat mi congue congue. Fusce a dolor a turpis volutpat sagittis. Fusce condimentum id elit vitae commodo. Sed blandit mauris fringilla diam fringilla dictum. Nam ac egestas enim.</p>
              <p>‍</p>
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis tincidunt gravida. Phasellus feugiat tellus euismod, viverra diam vitae, blandit mi. Fusce orci nisl, tempor sit amet hendrerit sed, dignissim eu velit. Quisque interdum semper tortor, ac efficitur augue interdum sollicitudin. Morbi gravida vestibulum felis, id porta mi ornare et.</p>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis tincidunt gravida. Phasellus feugiat tellus euismod, viverra diam vitae, blandit mi. Fusce orci nisl, tempor sit amet hendrerit sed, dignissim eu velit. Quisque interdum semper tortor, ac efficitur augue interdum sollicitudin. Morbi gravida vestibulum felis, id porta mi ornare et.</p>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis tincidunt gravida. Phasellus feugiat tellus euismod, viverra diam vitae, blandit mi. Fusce orci nisl, tempor sit amet hendrerit sed, dignissim eu velit. Quisque interdum semper tortor, ac efficitur augue interdum sollicitudin. Morbi gravida vestibulum felis, id porta mi ornare et.</p>
              <p>‍</p>
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis tincidunt gravida. Phasellus feugiat tellus euismod, viverra diam vitae, blandit mi. Fusce orci nisl, tempor sit amet hendrerit sed, dignissim eu velit. Quisque interdum semper tortor, ac efficitur augue interdum sollicitudin. Morbi gravida vestibulum felis, id porta mi ornare et.</p>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis tincidunt gravida. Phasellus feugiat tellus euismod, viverra diam vitae, blandit mi. Fusce orci nisl, tempor sit amet hendrerit sed, dignissim eu velit. Quisque interdum semper tortor, ac efficitur augue interdum sollicitudin. Morbi gravida vestibulum felis, id porta mi ornare et.</p>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis tincidunt gravida. Phasellus feugiat tellus euismod, viverra diam vitae, blandit mi. Fusce orci nisl, tempor sit amet hendrerit sed, dignissim eu velit. Quisque interdum semper tortor, ac efficitur augue interdum sollicitudin. Morbi gravida vestibulum felis, id porta mi ornare et.</p>
              <p>‍</p>
              <p>‍</p>
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
    .readFileSync("public/content/blogPost.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default BlogPost;

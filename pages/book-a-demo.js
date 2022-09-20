import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const BookADemo = ({ data }) => {

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
        <div className="section-15 wf-section">
          <div className="div-block-142">
            <div className="div-block-154">
              <h2 className="heading-74">Book A Demo</h2>
              <div className="form-block w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-2"><label htmlFor="name" className="field-label-9">Name</label><input type="text" className="text-field-4 w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your Name Here" id="name" /><label htmlFor="Email" className="field-label-9">Email</label><input type="email" className="text-field-4 w-input" maxLength={256} name="Email" data-name="Email" placeholder="Enter your Email Here" id="Email" /><label htmlFor="Company-name" className="field-label-9">Company name</label><input type="text" className="text-field-4 w-input" maxLength={256} name="Company-name" data-name="Company name" placeholder="Enter your Company name" id="Company-name" /><label htmlFor="Contact-number" className="field-label-9">Contact number</label><input type="tel" className="text-field-4 w-input" maxLength={256} name="Contact-number" data-name="Contact number" placeholder="Enter your Contact number" id="Contact-number" /><label htmlFor="name-3" className="field-label-9">Enquiry</label><select id="Enquiry" name="Enquiry" data-name="Enquiry" className="text-field-4 w-select">
                  <option value="Select the Enquiry">Select the Enquiry</option>
                  <option value="First">First choice</option>
                  <option value="Second">Second choice</option>
                  <option value="Third">Third choice</option>
                </select><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit-button-2 w-button" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
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
    .readFileSync("public/content/bookADemo.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default BookADemo;

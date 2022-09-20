import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const checkout = ({ data }) => {

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
        <div className="section-15 wf-section">
          <div className="div-block-142">
            <h1 className="heading-72">Enter Your Payment Details Below</h1>
            <div className="div-block-143">
              <div id="w-node-_7fb9d6c9-60d5-ed9f-044c-3a80cd2fdb80-1dcff704" className="div-block-144">
                <div className="div-block-145">
                  <h1 className="heading-73">Payment Information</h1>
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form"><label htmlFor="name-2" className="label-db">Name *</label><input type="text" className="input-filed-db w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /><label htmlFor="email-2" className="label-db">Email *</label><input type="email" className="input-filed-db w-input" maxLength={256} name="email" data-name="Email" placeholder id="email" required /><label htmlFor="email" className="label-db">Card Details *</label>
                      <div className="div-block-146"><input type="text" className="input-filed-db card-details spacing w-input" maxLength={256} name="name" data-name="Name" placeholder="0000 0000 0000 000" id="name" /><input type="text" className="input-filed-db card-details data no-card w-input" maxLength={256} name="MM-YY" data-name="MM /YY" placeholder="MM /YY" id="MM-YY" /><input type="text" className="input-filed-db card-details data no-card w-node-_7180598b-4835-da42-cdce-8e120cb91239-1dcff704 w-input" maxLength={256} name="CVV" data-name="CVV" placeholder="CVV" id="CVV" /><input type="text" className="input-filed-db card-details data last no-card w-node-_63483309-8ecc-83b5-7c46-d0c0c31c22f0-1dcff704 w-input" maxLength={256} name="ZIP-Code" data-name="ZIP Code" placeholder="ZIP Code" id="ZIP-Code" /></div><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit-button w-button" />
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
              <div id="w-node-fa7a81bb-a70f-45f7-2eec-4f84b827288c-1dcff704">
                <div className="div-block-32 pay">
                  <div>
                    <h1 className="heading-14 pay">You have to pay</h1>
                    <h1 className="heading-13 pay">$99/mo</h1>
                    <div className="div-block-30" />
                    <h1 className="heading-16">What’s included</h1>
                    <div className="div-block-33">
                      <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                      </div>
                      <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Mauris in aliquam</h1>
                      </div>
                      <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                      </div>
                      <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Ut sem viverra aliquet</h1>
                      </div>
                      <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Pretium vulputate sapien</h1>
                      </div>
                    </div>
                  </div>
                </div>
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
    .readFileSync("public/content/checkout.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default checkout;

import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const userJourneyCreation = ({ data }) => {

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
        <div className="section-16 wf-section">
          <div className="div-block-43 v2">
            <h1 className="heading-33 v2">User Journey Dashboard</h1>
            <div className="div-block-44">
              <div className="div-block-45"><img src="images/Group-1621.png" loading="lazy" alt="" className="image-21" /></div>
              <div className="div-block-46">
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\nselect{\nappearance:none;\n}\n.text-field::placeholder,.text-field-2::placeholder{\ncolor:#131313 !important;\n}\n" }} />
                </div>
                <h1 className="heading-34">Enter The Steps You Want To Track</h1>
                <div className="w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" method="get">
                    <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                      <option value>Metric</option>
                      <option value="First">First choice</option>
                      <option value="Second">Second choice</option>
                      <option value="Third">Third choice</option>
                    </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field" data-name="Field" placeholder="Name the first step" id="field" required /></div>
                    <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                      <option value>Metric</option>
                      <option value="First">First choice</option>
                      <option value="Second">Second choice</option>
                      <option value="Third">Third choice</option>
                    </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field-6" data-name="Field 6" placeholder="Name the second step" id="field-6" required /></div>
                    <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                      <option value>Metric</option>
                      <option value="First">First choice</option>
                      <option value="Second">Second choice</option>
                      <option value="Third">Third choice</option>
                    </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field-5" data-name="Field 5" placeholder="Name the third step" id="field-5" required /></div>
                    <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                      <option value>Metric</option>
                      <option value="First">First choice</option>
                      <option value="Second">Second choice</option>
                      <option value="Third">Third choice</option>
                    </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field-4" data-name="Field 4" placeholder="Name the fourth step" id="field-4" required /></div>
                    <div className="d-5">
                      <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                        <option value>Metric</option>
                        <option value="First">First choice</option>
                        <option value="Second">Second choice</option>
                        <option value="Third">Third choice</option>
                      </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field-4" data-name="Field 4" placeholder="Name the fifh step" id="field-4" required /></div>
                      <a data-w-id="b9801352-ead5-5fb4-231f-b6e21e81bcac" href="#" className="button-12 b-5 w-button">ADD</a>
                    </div>
                    <div className="d-6">
                      <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                        <option value>Metric</option>
                        <option value="First">First choice</option>
                        <option value="Second">Second choice</option>
                        <option value="Third">Third choice</option>
                      </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field-4" data-name="Field 4" placeholder="Name the sixth step" id="field-4" required /></div>
                      <a data-w-id="b9801352-ead5-5fb4-231f-b6e21e81bcb3" href="#" className="button-12 b-6 w-button">ADD</a>
                    </div>
                    <div className="d-7">
                      <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                        <option value>Metric</option>
                        <option value="First">First choice</option>
                        <option value="Second">Second choice</option>
                        <option value="Third">Third choice</option>
                      </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field-4" data-name="Field 4" placeholder="Name the seventh step" id="field-4" required /></div>
                      <a data-w-id="b9801352-ead5-5fb4-231f-b6e21e81bcba" href="#" className="button-12 b-7 w-button">ADD</a>
                    </div>
                    <div className="d-8">
                      <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                        <option value>Metric</option>
                        <option value="First">First choice</option>
                        <option value="Second">Second choice</option>
                        <option value="Third">Third choice</option>
                      </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field-4" data-name="Field 4" placeholder="Name the eighth step" id="field-4" required /></div>
                      <a data-w-id="b9801352-ead5-5fb4-231f-b6e21e81bcc1" href="#" className="button-12 b-8 w-button">ADD</a>
                    </div>
                    <div className="d-9">
                      <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                        <option value>Metric</option>
                        <option value="First">First choice</option>
                        <option value="Second">Second choice</option>
                        <option value="Third">Third choice</option>
                      </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field-4" data-name="Field 4" placeholder="Name the nineth step" id="field-4" required /></div>
                      <a data-w-id="b9801352-ead5-5fb4-231f-b6e21e81bcc8" href="#" className="button-12 b-9 w-button">ADD</a>
                    </div>
                    <div className="d-10">
                      <div className="div-block-47"><input type="text" className="text-field w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="URL Here" id="field-3" required /><select id="field-2" name="field-2" data-name="Field 2" className="select-field w-select">
                        <option value>Metric</option>
                        <option value="First">First choice</option>
                        <option value="Second">Second choice</option>
                        <option value="Third">Third choice</option>
                      </select><input type="text" className="text-field-2 w-input" maxLength={256} name="field-4" data-name="Field 4" placeholder="Name the tenth step" id="field-4" required /></div>
                      <a href="#" className="button-12 b-10 w-button">ADD</a>
                    </div>
                    <a data-w-id="b9801352-ead5-5fb4-231f-b6e21e81bcd1" href="#" className="button-12 add-btn v2 w-button">ADD</a>
                    <a href="#" className="button-13 v2 w-button">SAVE</a>
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
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>



    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/userJourneyCreation.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default userJourneyCreation;

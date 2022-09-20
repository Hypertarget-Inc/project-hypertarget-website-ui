import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const automatedUserJourney = ({ data }) => {

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
        <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar desktop w-nav">
          <div className="navbar-div">
            <a href="#" className="w-nav-brand"><img src="images/logo.svg" loading="lazy" alt="" className="image-4" /></a>
            <nav role="navigation" className="w-nav-menu">
              <a href="#" className="nav-link w-nav-link">About</a>
              <a href="#" className="nav-link w-nav-link">Features</a>
              <a href="#" className="nav-link w-nav-link">Pricing</a>
              <a href="#" className="nav-link w-nav-link">Testimonials</a>
              <a href="#" className="nav-link w-nav-link">Help</a>
            </nav>
            <div>
              <a href="#" className="link-block w-inline-block">
                <p className="paragraph">Sign In</p>
              </a>
              <a href="#" className="nav-button w-button">Start Free</a>
            </div>
            <div className="w-nav-button">
              <div className="w-icon-nav-menu" />
            </div>
          </div>
        </div>
        <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar tab w-nav">
          <div className="navbar-div">
            <div className="div-block-27">
              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu" />
              </div>
              <a href="#" className="brand w-nav-brand"><img src="images/logo.svg" loading="lazy" alt="" className="image-4" /></a>
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="#" className="nav-link w-nav-link">About</a>
              <a href="#" className="nav-link w-nav-link">Features</a>
              <a href="#" className="nav-link w-nav-link">Pricing</a>
              <a href="#" className="nav-link w-nav-link">Testimonials</a>
              <a href="#" className="nav-link w-nav-link">Help</a>
            </nav>
            <div>
              <a href="#" className="link-block w-inline-block">
                <p className="paragraph">Sign In</p>
              </a>
              <a href="#" className="nav-button w-button">Start Free</a>
            </div>
          </div>
        </div>
        <div className="div-block-135 v2-2">
          <div className="div-block-131 auto">
            <div className="div-block-68 v2">
              <div className="div-block-69">
                <h3 className="heading-45">Hyperscale User Journey Variations</h3>
                <p className="paragraph-20">Use the filters below to more easily find specific user journeys</p>
                <div className="div-block-70">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get">
                      <div className="div-block-71">
                        <div className="div-block-72"><label htmlFor="field" className="field-label-7">Time</label><select id="field" name="field" data-name="Field" className="select-field-4 v2 w-select">
                          <option value>All time</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select></div>
                        <div className="div-block-72"><label htmlFor="field-2" className="field-label-7">Channel</label><select id="field-2" name="field-2" data-name="Field 2" className="select-field-4 v2 w-select">
                          <option value>All channel</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select></div>
                        <div className="div-block-72"><label htmlFor="field-2" className="field-label-7">UTM Filter</label><select id="field-2" name="field-2" data-name="Field 2" className="select-field-4 v2 w-select">
                          <option value>Choose one</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select></div>
                        <div className="div-block-72 s-4"><label htmlFor="field-2" className="field-label-7">Performance</label><select id="field-2" name="field-2" data-name="Field 2" className="select-field-4 v2 w-select">
                          <option value>Best Performence</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select></div>
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
                <div className="div-block-73">
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n.select-field-4{\nappearance:none;\n}\n@media(min-width:571px) and (max-width:767px){\n.image-29 {\n    position: relative;\n    z-index: 1;\n    height: 218px;\n}\n.div-block-80 {\n    max-width: 550px;\n}\n.heading-49.h-3 {\n    margin-bottom: 26px;\n    font-size: 12.54px;\n}\n.heading-49.h-2 {\n    margin-bottom: 26px;\n    font-size: 12.54px;\n}\n.heading-49.h-4 {\n    margin-right: -22px;\n    margin-bottom: 21px;\n    font-size: 12.54px;\n}\n.div-block-77 {\n    width: 15%;\n    padding-top: 32px;\n}\n}\n@media(min-width:400px) and (max-width:440px){\n.image-29 {\n    position: relative;\n    z-index: 1;\n    height: 150px;\n}\n.div-block-80 {\n    max-width: 550px;\n}\n.heading-49.h-3 {\n    margin-bottom: 16px;\n    font-size: 12.54px;\n}\n.heading-49.h-2 {\n    margin-bottom: 12px;\n    font-size: 12.54px;\n}\n.heading-49.h-4 {\n    margin-right: -22px;\n    margin-bottom: 13px;\n    font-size: 12.54px;\n}\n.div-block-77 {\n    width: 15%;\n    padding-top:17px;\n}\n}\n@media(min-width:330px) and (max-width:399px){\n.image-29 {\n    position: relative;\n    z-index: 1;\n    height: 150px;\n}\n.div-block-80 {\n    max-width: 550px;\n}\n.heading-49.h-3 {\n    margin-bottom: 16px;\n    font-size: 12.54px;\n}\n.heading-49.h-2 {\n    margin-bottom: 12px;\n    font-size: 12.54px;\n}\n.heading-49.h-4 {\n    margin-right: -22px;\n    margin-bottom: 13px;\n    font-size: 12.54px;\n}\n.div-block-77 {\n    width: 15%;\n    padding-top:17px;\n}\n.div-block-78 {\n    width: 91%;\n    text-align: left;\n}\n.div-block-77 {\n    width: 11%;\n    padding-top: 17px;\n}\n}\n@media(max-width:329px){\n.image-29 {\n    position: relative;\n    z-index: 1;\n    height: 150px;\n}\n.div-block-80 {\n    max-width: 550px;\n}\n.heading-49.h-3 {\n    margin-bottom: 7px;\n    font-size: 12.54px;\n}\n.heading-49.h-2 {\n    margin-bottom: 12px;\n    font-size: 12.54px;\n}\n.heading-49.h-4 {\n    margin-right: -22px;\n    margin-bottom: 5px;\n    font-size: 12.54px;\n}\n.div-block-77 {\n    width: 15%;\n    padding-top:17px;\n}\n.div-block-78 {\n    width: 91%;\n    text-align: left;\n}\n.div-block-77 {\n    width: 11%;\n    padding-top: 24px;\n}\n}\n" }} />
                  </div>
                  <div data-delay={4000} data-animation="slide" className="slider-4 w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={0} data-duration={500} data-infinite="true">
                    <div className="mask w-slider-mask">
                      <div className="slide-4 w-slide">
                        <div className="div-block-74">
                          <div className="div-block-75">
                            <a href="#" className="link-block-12 w-inline-block">
                              <h1 className="heading-46">Audience 1 -<span className="text-span-3"> Regional 1</span></h1>
                            </a>
                            <a href="#" className="link-block-13 w-inline-block">
                              <h1 className="heading-47">Total Revenue: &nbsp;- <span className="text-span-3">$12,790</span></h1>
                            </a>
                          </div>
                          <div className="div-block-76">
                            <div className="div-block-80">
                              <div className="div-block-77 v2">
                                <h3 className="heading-49 h-2 v2">1,24</h3>
                                <h3 className="heading-49 h-3 v2">98</h3>
                                <h3 className="heading-49 h-4 v2">66</h3>
                                <h3 className="heading-49 h-5 v2">21</h3>
                              </div>
                              <div className="div-block-78"><img src="https://uploads-ssl.webflow.com/61ae2f45615793c81314e5b7/61dc2fd88b148333f558fd51_Group%201622.svg" loading="lazy" alt="" className="image-29" /></div>
                            </div>
                          </div>
                        </div>
                        <div className="div-block-79" />
                      </div>
                      <div className="slide-4 w-slide">
                        <div className="div-block-74">
                          <div className="div-block-75">
                            <a href="#" className="link-block-12 w-inline-block">
                              <h1 className="heading-46">Audience 1 -<span className="text-span-3"> Regional 1</span></h1>
                            </a>
                            <a href="#" className="link-block-13 w-inline-block">
                              <h1 className="heading-47">Total Revenue: &nbsp;- <span className="text-span-3">$12,790</span></h1>
                            </a>
                          </div>
                          <div className="div-block-76">
                            <div className="div-block-80">
                              <div className="div-block-77 v2">
                                <h3 className="heading-49 h-2 v2">1,24</h3>
                                <h3 className="heading-49 h-3 v2">98</h3>
                                <h3 className="heading-49 h-4 v2">66</h3>
                                <h3 className="heading-49 h-5 v2">21</h3>
                              </div>
                              <div className="div-block-78"><img src="https://uploads-ssl.webflow.com/61ae2f45615793c81314e5b7/61dc2fd88b148333f558fd51_Group%201622.svg" loading="lazy" alt="" className="image-29" /></div>
                            </div>
                          </div>
                        </div>
                        <div className="div-block-79" />
                      </div>
                      <div className="slide-4 w-slide">
                        <div className="div-block-74">
                          <div className="div-block-75">
                            <a href="#" className="link-block-12 w-inline-block">
                              <h1 className="heading-46">Audience 1 -<span className="text-span-3"> Regional 1</span></h1>
                            </a>
                            <a href="#" className="link-block-13 w-inline-block">
                              <h1 className="heading-47">Total Revenue: &nbsp;- <span className="text-span-3">$12,790</span></h1>
                            </a>
                          </div>
                          <div className="div-block-76">
                            <div className="div-block-80">
                              <div className="div-block-77 v2">
                                <h3 className="heading-49 h-2 v2">1,24</h3>
                                <h3 className="heading-49 h-3 v2">98</h3>
                                <h3 className="heading-49 h-4 v2">66</h3>
                                <h3 className="heading-49 h-5 v2">21</h3>
                              </div>
                              <div className="div-block-78"><img src="https://uploads-ssl.webflow.com/61ae2f45615793c81314e5b7/61dc2fd88b148333f558fd51_Group%201622.svg" loading="lazy" alt="" className="image-29" /></div>
                            </div>
                          </div>
                        </div>
                        <div className="div-block-79" />
                      </div>
                    </div>
                    <div className="left-arrow-3 v2 w-slider-arrow-left"><img loading="lazy" src="images/chevron-right-1.svg" alt="" className="image-27" />
                      <div className="icon-3 w-icon-slider-left" />
                    </div>
                    <div className="right-arrow-3 v2 w-slider-arrow-right">
                      <div className="icon-3 w-icon-slider-right" /><img loading="lazy" src="images/chevron-right.svg" alt="" className="image-28" />
                    </div>
                    <div className="slide-nav-3 v2 w-slider-nav w-num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-embed w-script">
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/automatedUserJourney.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default automatedUserJourney;

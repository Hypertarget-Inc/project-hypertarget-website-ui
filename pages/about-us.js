import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = ({ data }) => {

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
            <div className="div-block-91">
              <h1 className="heading-61">About Us</h1>
              <p className="paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lobortis. Pellentesque quis aliquet nulla. Phasellus ut augue sit amet erat sodales lacinia. Mauris ultricies nibh eu eleifend ornare. Mauris sit amet fermentum tortor. Suspendisse potenti.</p>
              <div className="div-block-92">
                <a href="#" className="button-17 w-button">Get Started</a>
                <div className="div-block-93" />
              </div>
            </div>
            <div className="div-block-94">
              <h1 className="heading-62">Our Values</h1>
              <div className="div-block-95">
                <div className="div-block-96"><img src="images/Frame_2.svg" loading="lazy" alt="" className="image-42" />
                  <h1 className="heading-63">Lorem ipsum dolor sit amet</h1>
                  <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</p>
                </div>
                <div className="div-block-97"><img src="images/Frame-1_1.svg" loading="lazy" alt="" className="image-42" />
                  <h1 className="heading-63">Lorem ipsum dolor sit amet</h1>
                  <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</p>
                </div>
                <div className="div-block-98"><img src="images/Frame-2_2.svg" loading="lazy" alt="" className="image-42" />
                  <h1 className="heading-63">Lorem ipsum dolor sit amet</h1>
                  <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-9 wf-section">
          <div className="div-block-28 aaa">
            <div className="div-block-99">
              <h1 className="heading-64">Our Team</h1>
              <div className="div-block-105">
                <div data-delay={4000} data-animation="slide" className="slider-5 w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
                  <div className="w-slider-mask">
                    <div className="slide-7 w-slide">
                      <div className="div-block-100">
                        <div className="div-block-101"><img src="images/Mask-Group-2.png" loading="lazy" alt="" />
                          <h3 className="heading-65">William Jones</h3>
                          <h5 className="heading-66">Chief Executive Officer</h5>
                        </div>
                        <div className="div-block-102"><img src="images/Mask-Group-3.png" loading="lazy" alt="" />
                          <h3 className="heading-65">Kenneth Boyle</h3>
                          <h5 className="heading-66">Chief Financial Officer</h5>
                        </div>
                        <div className="div-block-103"><img src="images/Mask-Group-4.png" loading="lazy" alt="" />
                          <h3 className="heading-65">Stephanie Johnson</h3>
                          <h5 className="heading-66">Chief Marketing Officer</h5>
                        </div>
                        <div className="div-block-104"><img src="images/Mask-Group-5.png" loading="lazy" alt="" />
                          <h3 className="heading-65">Georgina Wilson</h3>
                          <h5 className="heading-66">Human Resources</h5>
                        </div>
                      </div>
                    </div>
                    <div className="slide-8 w-slide">
                      <div className="div-block-100">
                        <div className="div-block-101"><img src="images/Mask-Group-2.png" loading="lazy" alt="" />
                          <h3 className="heading-65">William Jones</h3>
                          <h5 className="heading-66">Chief Executive Officer</h5>
                        </div>
                        <div className="div-block-102"><img src="images/Mask-Group-3.png" loading="lazy" alt="" />
                          <h3 className="heading-65">Kenneth Boyle</h3>
                          <h5 className="heading-66">Chief Financial Officer</h5>
                        </div>
                        <div className="div-block-103"><img src="images/Mask-Group-4.png" loading="lazy" alt="" />
                          <h3 className="heading-65">Stephanie Johnson</h3>
                          <h5 className="heading-66">Chief Marketing Officer</h5>
                        </div>
                        <div className="div-block-104"><img src="images/Mask-Group-5.png" loading="lazy" alt="" />
                          <h3 className="heading-65">Georgina Wilson</h3>
                          <h5 className="heading-66">Human Resources</h5>
                        </div>
                      </div>
                    </div>
                    <div className="slide-8 w-slide">
                      <div className="div-block-100">
                        <div className="div-block-101"><img src="images/Mask-Group-2.png" loading="lazy" alt="" />
                          <h3 className="heading-65">William Jones</h3>
                          <h5 className="heading-66">Chief Executive Officer</h5>
                        </div>
                        <div className="div-block-102"><img src="images/Mask-Group-3.png" loading="lazy" alt="" />
                          <h3 className="heading-65">Kenneth Boyle</h3>
                          <h5 className="heading-66">Chief Financial Officer</h5>
                        </div>
                        <div className="div-block-103"><img src="images/Mask-Group-4.png" loading="lazy" alt="" />
                          <h3 className="heading-65">Stephanie Johnson</h3>
                          <h5 className="heading-66">Chief Marketing Officer</h5>
                        </div>
                        <div className="div-block-104"><img src="images/Mask-Group-5.png" loading="lazy" alt="" />
                          <h3 className="heading-65">Georgina Wilson</h3>
                          <h5 className="heading-66">Human Resources</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="left-arrow-4 w-slider-arrow-left">
                    <div className="w-icon-slider-left" />
                  </div>
                  <div className="right-arrow-4 w-slider-arrow-right">
                    <div className="icon-5 w-icon-slider-right" /><img src="images/Vector-46.svg" loading="lazy" alt="" />
                  </div>
                  <div className="slide-nav-4 w-slider-nav w-round" />
                </div>
              </div>
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{ __html: "\n.w-slider-dot.w-active{\nbackground-color:#0066FF;\nwidth:12.53px;\nheight:12.53px;\nmargin:0 0 -2px;\npadding:0;\n}\n.w-slider-dot{\nbackground-color:#0066FF80;\nwidth:8.53px;\nheight:8.53px;\nmargin:0;\npadding:0;\n}\n" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-28">
            <div className="div-block-106">
              <div className="div-block-107">
                <div className="div-block-108">
                  <h1 className="heading-67">Use our collection of in-app analytical solutions to highlight your KPIs, regardless of your industry!</h1>
                </div>
                <div className="div-block-109"><img src="images/Frame_3.svg" loading="lazy" alt="" className="image-47" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-10 wf-section">
          <div className="div-block-28 aaa">
            <div className="div-block-110"><img src="images/Frame-1386-1.svg" loading="lazy" alt="" className="image-51" /><img src="images/Frame-1386.svg" loading="lazy" alt="" className="image-49" />
              <div className="div-block-111"><img src="images/Group-1386.svg" loading="lazy" alt="" className="image-50" /></div>
            </div>
          </div>
        </div>
        <div className="section-11 wf-section">
          <div className="div-block-28 aaa">
            <div className="div-block-112">
              <div className="div-block-113">
                <h1 className="heading-68">Are you ready to start making informed decisions and scaling your business with the help of real-time insights?</h1>
              </div>
              <div className="div-block-114">
                <a href="#" className="button-18 w-button">Partner with Hypertarget Today!</a>
                <div className="div-block-115" />
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
    .readFileSync("public/content/aboutUs.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default AboutUs;

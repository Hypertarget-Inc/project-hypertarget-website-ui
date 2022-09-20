import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = ({ data }) => {

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
        <div className="section wf-section">
          <div className="div-container">
            <div className="div-col-1">
              <h1 className="heading-2">Automate Your UX Analytics</h1>
              <p className="paragraph-2">Hyertarget is a data analytics software that uses AI to automatically collect and analyze every path users take when using your application. Set up a demo today to see how we can increase your acquisition, retention, and reactivation</p>
              <a href="#" className="link-block-2 w-inline-block">
                <div className="div-block-5">
                  <p className="paragraph-3">Get Started</p><img src="images/ArrowRight.svg" loading="lazy" alt="" />
                </div>
              </a>
            </div>
            <div className="div-col-2"><img src="images/Frame.svg" loading="lazy" alt="" className="image-5" /></div>
          </div>
        </div>
        <div className="section-2 wf-section">
          <div className="div-block-6">
            <div className="col-1"><img src="images/Frame-2_1.svg" loading="lazy" alt="" className="image-7" />
              <h1 className="heading-3">LOREM<br />IPSUREMS</h1>
              <p className="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit</p>
              <a href="#" className="link-block-3 w-inline-block">
                <p className="paragraph-5">Read more</p><img src="images/ArrowRight-3.svg" loading="lazy" alt="" className="image-6" />
              </a>
            </div>
            <div className="col-1"><img src="images/Frame_1.svg" loading="lazy" alt="" className="image-7" />
              <h1 className="heading-3">LOREM<br />IPSUREMS</h1>
              <p className="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit</p>
              <a href="#" className="link-block-3 w-inline-block">
                <p className="paragraph-5">Read more</p><img src="images/ArrowRight-3.svg" loading="lazy" alt="" className="image-6" />
              </a>
            </div>
            <div className="col-1"><img src="images/Frame-1.svg" loading="lazy" alt="" className="image-7" />
              <h1 className="heading-3">LOREM<br />IPSUREMS</h1>
              <p className="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit</p>
              <a href="#" className="link-block-3 w-inline-block">
                <p className="paragraph-5">Read more</p><img src="images/ArrowRight-3.svg" loading="lazy" alt="" className="image-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="section-3 wf-section">
          <div className="div-block-7">
            <div className="div-block-8"><img src="images/Frame1.svg" loading="lazy" alt="" className="image-8" /></div>
            <div className="div-block-9">
              <h1 className="heading-4">Features</h1>
              <h1 className="heading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="paragraph-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
              <a href="#" className="link-block-2 w-inline-block">
                <div className="div-block-5">
                  <p className="paragraph-3">Learn More</p><img src="images/ArrowRight.svg" loading="lazy" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div className="div-block-7 _2">
            <div className="div-block-8 _2"><img src="images/frame-2.svg" loading="lazy" alt="" className="image-8" /></div>
            <div className="div-block-9 _2">
              <h1 className="heading-4">Features</h1>
              <h1 className="heading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="paragraph-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
              <a href="#" className="link-block-2 w-inline-block">
                <div className="div-block-5">
                  <p className="paragraph-3">Learn More</p><img src="images/ArrowRight.svg" loading="lazy" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="section-4 wf-section">
          <div className="div-block-10">
            <div className="div-block-11">
              <div className="div-block-13">
                <div className="div-block-14"><img src="images/man-1.svg" loading="lazy" alt="" />
                  <div className="div-block-15">
                    <p className="paragraph-7">+ $28,900</p>
                    <p className="paragraph-8">Lorem ipsum dolor sit amet, consect</p>
                  </div>
                </div>
                <div className="div-block-14 _2"><img src="images/women-2.svg" loading="lazy" alt="" />
                  <div className="div-block-15">
                    <p className="paragraph-7">+ $28,900</p>
                    <p className="paragraph-8">Lorem ipsum dolor sit amet, consect</p>
                  </div>
                </div>
                <div className="div-block-14"><img src="images/women-3.svg" loading="lazy" alt="" />
                  <div className="div-block-15">
                    <p className="paragraph-7">+ $28,900</p>
                    <p className="paragraph-8">Lorem ipsum dolor sit amet, consect</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-12">
              <h1 className="heading-4">Features</h1>
              <h1 className="heading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="paragraph-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
            </div>
          </div>
        </div>
        <div className="section-5 wf-section">
          <div className="div-block-7 _2">
            <div className="div-block-8 _2"><img src="images/Group-1000000861.svg" loading="lazy" alt="" className="image-8" /></div>
            <div className="div-block-9 _2">
              <h1 className="heading-4">Features</h1>
              <h1 className="heading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="paragraph-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
              <a href="#" className="link-block-2 w-inline-block">
                <div className="div-block-5">
                  <p className="paragraph-3">Learn More</p><img src="images/ArrowRight.svg" loading="lazy" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="section-6 wf-section">
          <div className="div-block-16">
            <p className="paragraph-9">Why &nbsp;Hypertarget</p>
            <h1 className="heading-6">Why Choose Us</h1>
            <div className="div-block-19">
              <div className="div-block-17">
                <div className="div-block-20"><img src="images/Icon.svg" loading="lazy" alt="" className="image-9" /></div>
                <div className="div-block-21">
                  <h1 className="heading-7">No Extra Fee</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur a</p>
                </div>
              </div>
              <div className="div-block-17">
                <div className="div-block-20"><img src="images/Icon.svg" loading="lazy" alt="" className="image-9" /></div>
                <div className="div-block-21">
                  <h1 className="heading-7">No Extra Fee</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur a</p>
                </div>
              </div>
            </div>
            <div className="div-block-19">
              <div className="div-block-17 _2">
                <div className="div-block-20"><img src="images/Icon.svg" loading="lazy" alt="" className="image-9" /></div>
                <div className="div-block-21">
                  <h1 className="heading-7">No Extra Fee</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur a</p>
                </div>
              </div>
              <div className="div-block-17">
                <div className="div-block-20"><img src="images/Icon.svg" loading="lazy" alt="" className="image-9" /></div>
                <div className="div-block-21">
                  <h1 className="heading-7">No Extra Fee</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur a</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-7 wf-section">
          <div>
            <h1 className="heading-8">What our client says</h1>
            <p className="paragraph-10">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscin</p>
            <div className="div-block-22">
              <div data-delay={4000} data-animation="slide" className="client-slider-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
                <div className="client-slider-mask w-slider-mask">
                  <div className="client-slider w-slide"><img src="images/“.svg" loading="lazy" alt="" />
                    <h1 className="heading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p className="paragraph-11">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p><img src="images/client-img.svg" loading="lazy" alt="" />
                    <div><img src="images/star.svg" loading="lazy" alt="" />
                      <h1 className="heading-10">Angela Taylor</h1>
                      <p className="paragraph-12">CEO SAMSUNG</p>
                    </div>
                  </div>
                  <div className="client-slider w-slide"><img src="images/“.svg" loading="lazy" alt="" />
                    <h1 className="heading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p className="paragraph-11">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p><img src="images/client-img.svg" loading="lazy" alt="" />
                    <div><img src="images/star.svg" loading="lazy" alt="" />
                      <h1 className="heading-10">Angela Taylor</h1>
                      <p className="paragraph-12">CEO SAMSUNG</p>
                    </div>
                  </div>
                  <div className="client-slider w-slide"><img src="images/“.svg" loading="lazy" alt="" />
                    <h1 className="heading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p className="paragraph-11">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p><img src="images/client-img.svg" loading="lazy" alt="" />
                    <div><img src="images/star.svg" loading="lazy" alt="" />
                      <h1 className="heading-10">Angela Taylor</h1>
                      <p className="paragraph-12">CEO SAMSUNG</p>
                    </div>
                  </div>
                  <div className="client-slider w-slide"><img src="images/“.svg" loading="lazy" alt="" />
                    <h1 className="heading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p className="paragraph-11">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p><img src="images/client-img.svg" loading="lazy" alt="" />
                    <div><img src="images/star.svg" loading="lazy" alt="" />
                      <h1 className="heading-10">Angela Taylor</h1>
                      <p className="paragraph-12">CEO SAMSUNG</p>
                    </div>
                  </div>
                </div>
                <div className="left-arrow w-slider-arrow-left"><img src="images/Group-1000000862.svg" loading="lazy" alt="" className="image-10" /></div>
                <div className="right-arrow w-slider-arrow-right"><img src="images/left.svg" loading="lazy" alt="" /></div>
                <div className="client-slider-nav w-slider-nav w-slider-nav-invert w-round" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <div className="html-embed w-embed"><svg width={38} height={38} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35.6947" cy="35.5385" r="34.3538" stroke="#0F6A91" strokeWidth="2.36923" />
          <path d="M46.0553 34.0583H28.4934L33.8686 27.6022C34.1199 27.2998 34.2408 26.9099 34.2047 26.5184C34.1686 26.1268 33.9785 25.7656 33.6761 25.5143C33.3737 25.263 32.9838 25.142 32.5922 25.1781C32.2007 25.2142 31.8395 25.4044 31.5882 25.7068L24.1843 34.5914C24.1345 34.6621 24.09 34.7363 24.0511 34.8135C24.0511 34.8876 24.0511 34.932 23.9474 35.006C23.8803 35.1758 23.8451 35.3566 23.8438 35.5391C23.8451 35.7217 23.8803 35.9024 23.9474 36.0722C23.9474 36.1462 23.9474 36.1907 24.0511 36.2647C24.09 36.3419 24.1345 36.4161 24.1843 36.4868L31.5882 45.3714C31.7274 45.5386 31.9017 45.673 32.0988 45.7651C32.2959 45.8573 32.5108 45.9049 32.7284 45.9045C33.0743 45.9052 33.4096 45.7847 33.6761 45.5639C33.826 45.4396 33.9499 45.2869 34.0408 45.1147C34.1316 44.9424 34.1876 44.7539 34.2055 44.5599C34.2234 44.366 34.2028 44.1704 34.145 43.9844C34.0872 43.7984 33.9932 43.6257 33.8686 43.476L28.4934 37.0199H46.0553C46.448 37.0199 46.8247 36.8639 47.1024 36.5862C47.38 36.3085 47.5361 35.9318 47.5361 35.5391C47.5361 35.1464 47.38 34.7698 47.1024 34.4921C46.8247 34.2144 46.448 34.0583 46.0553 34.0583Z" fill="current-color" />
        </svg></div>
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/index.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default Index;

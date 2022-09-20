import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = ({ data }) => {

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
        <div className="section-14 wf-section">
          <div className="div-block-28">
            <div className="section-1-pricing">
              <div className="section-1-pricing-wrap">
                <h1 className="heading-15 aaa">Pricing &amp; Plans</h1>
                <div className="text-block-13">This is some text inside of a div block.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                <div className="div-block-34">
                  <div className="div-block-32">
                    <div>
                      <h1 className="heading-14">Sales +</h1>
                      <h1 className="heading-13 hide">$99/mo</h1>
                      <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
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
                    <div className="div-block-141">
                      <a href="#" className="link-block-16 w-inline-block">
                        <h1 className="heading-71">schedule an appointment</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                      </a>
                    </div>
                  </div>
                  <div className="div-block-29">
                    <h1 className="heading-14">Marketing +</h1>
                    <h1 className="heading-13 hide">$499/mo</h1>
                    <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="div-block-30" />
                    <h1 className="heading-16">Everything in basic +</h1>
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
                    <div className="div-block-141">
                      <a href="#" className="link-block-16 _2nd w-inline-block">
                        <h1 className="heading-71">schedule an appointment</h1><img src="images/ArrowRight.svg" loading="lazy" alt="" className="image-61" />
                      </a>
                    </div>
                  </div>
                  <div className="div-block-31">
                    <h1 className="heading-14">Super +</h1>
                    <h1 className="heading-13 hide">$499/mo</h1>
                    <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="div-block-30" />
                    <h1 className="heading-16">Everything in Pro +</h1>
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
                    <div className="div-block-141">
                      <a href="#" className="link-block-16 w-inline-block">
                        <h1 className="heading-71">schedule an appointment</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                      </a>
                    </div>
                  </div>
                </div>
                <div data-current="Tab 2" data-easing="ease" data-duration-in={300} data-duration-out={100} className="tabs hide w-tabs">
                  <div className="tabs-menu w-tab-menu">
                    <a data-w-tab="Tab 1" className="tab-link-tab-1 w-inline-block w-tab-link">
                      <div>Monthly</div>
                    </a>
                    <a data-w-tab="Tab 2" className="tab-link-tab-2 w-inline-block w-tab-link w--current">
                      <div>Yearly</div>
                    </a>
                  </div>
                  <div className="w-tab-content">
                    <div data-w-tab="Tab 1" className="w-tab-pane">
                      <div className="div-block-34">
                        <div className="div-block-32">
                          <div>
                            <h1 className="heading-14">Basic</h1>
                            <h1 className="heading-13">$99/mo</h1>
                            <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
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
                          <div className="div-block-141">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-71">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                        <div className="div-block-29">
                          <h1 className="heading-14">Plus</h1>
                          <h1 className="heading-13">$499/mo</h1>
                          <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                          <div className="div-block-30" />
                          <h1 className="heading-16">Everything in basic +</h1>
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
                          <div className="div-block-141">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-71">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                        <div className="div-block-31">
                          <h1 className="heading-14">Growth</h1>
                          <h1 className="heading-13">$499/mo</h1>
                          <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                          <div className="div-block-30" />
                          <h1 className="heading-16">Everything in Pro +</h1>
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
                          <div className="div-block-141">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-71">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                      <div className="div-block-34">
                        <div className="div-block-32">
                          <div>
                            <h1 className="heading-14">Basic</h1>
                            <h1 className="heading-13">$99/mo</h1>
                            <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
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
                          <div className="div-block-141">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-71">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                        <div className="div-block-29">
                          <h1 className="heading-14">Plus</h1>
                          <h1 className="heading-13">$499/mo</h1>
                          <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                          <div className="div-block-30" />
                          <h1 className="heading-16">Everything in basic +</h1>
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
                          <div className="div-block-141">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-71">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                        <div className="div-block-31">
                          <h1 className="heading-14">Growth</h1>
                          <h1 className="heading-13">$499/mo</h1>
                          <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                          <div className="div-block-30" />
                          <h1 className="heading-16">Everything in Pro +</h1>
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
                          <div className="div-block-141">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-71">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
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
    .readFileSync("public/content/pricing.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default Pricing;

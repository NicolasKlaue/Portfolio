import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     const currentSEO = SEO.find((item) => item.page === "contact");

     return (
          <React.Fragment>
               <Helmet>
                    <title>{`Contact | ${INFO.main.title}`}</title>
                    <meta name="description" content={currentSEO.description} />
                    <meta
                         name="keywords"
                         content={currentSEO.keywords.join(", ")}
                    />
               </Helmet>

               <div className="page-content">
                    <NavBar active="contact" />
                    <div className="content-wrapper">
                         <div className="contact-logo-container">
                              <div className="contact-logo">
                                   <Logo width={46} />
                              </div>
                         </div>

                         <div className="contact-container">
                              <div className="title contact-title">
                                   Let's Get in Touch: Ways to Connect with Me
                              </div>

                              <div className="subtitle contact-subtitle">
                                   <p>
                                        Hey! Thanks for stopping by and wanting to get in touch. I'm always happy to
                                        hear your thoughts, questions, or anything else you’d like to share. If you
                                        want to reach out directly, feel free to drop me an email at{" "}
                                        <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I usually try to
                                        reply within 24 hours, but it might take a bit longer if things get busy.
                                   </p>

                                   <p>Looking forward to hearing from you!</p>

                              </div>
                         </div>

                         <div className="socials-container">
                              <div className="contact-socials">
                                   <Socials />
                              </div>
                         </div>

                         <div className="page-footer">
                              <Footer />
                         </div>
                    </div>
               </div>
          </React.Fragment>
     );
};

export default Contact;

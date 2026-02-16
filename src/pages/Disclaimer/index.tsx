import { Link } from "react-router-dom";
import InsideHeader from "../../components/InsideHeader";

export default function Disclaimer() {
    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/about/about-main-banner.jpg`} alt_title="About" />

            <section className="faq disclaimer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                            <ul className="leftnav">
                                <li><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
                                <li><Link to={"/disclaimer"}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 offset-lg-1">
                            <div className="content">
                                <article>
                                    <h5>Disclaimer</h5>
                                    <p>This is the official website of Advanced Materials business of the Aditya Birla Group. The data/ information displayed on this Website is related to the Advanced Materials business of Grasim Industries Limited (India), Aditya Birla Chemicals (Thailand) Pvt. Ltd and their subsidiaries in diverse geographies, engaged in the business of Advanced Materials and provides general information about the company/companies. Each of these companies are independent legal entity governed under applicable laws of jurisdiction in which it is incorporated/located.</p>

                                    <p>All the text, graphics, trademarks and all other content displayed on this site are owned by Grasim Industries Limited, Aditya Birla Chemicals (Thailand) Pvt. Ltd and their subsidiaries (hereinafter called as "Company"). The information and content are based on the applicable laws of jurisdiction in which the companies are incorporated/located.</p>

                                    <p>While efforts are made to keep the information on this site accurate and timely, the Company does not guarantee or endorse the content, accuracy or completeness of the information, text, graphics, hyperlinks and other items contained herein or on any other server. This site and the materials, information, and references to services and products if any herein, including without limitations, text, graphics and links, are provided "as is" without representations or warranties of any kind, whether express or implied.</p>

                                    <p>To the fullest extent permissible, the Company disclaims any warranties, express and/or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, freedom from computer virus and warranties arising from course of dealing or course of performance. The Company does not represent or warrant that the functions contained in the site will be uninterrupted or error free, that defects will be corrected or that the site or the server that makes the site available are free of viruses or other harmful components. The Company does not make any warranties or representations regarding the use of the materials in the site in terms of their completeness, correctness, accuracy, adequacy, usefulness, timeliness, reliability or otherwise.</p>

                                    <p>The Company is not responsible for any special, indirect, incidental, or consequential damages that may arise from the use of or the inability to use, the site and/or the materials contained on the site irrespective of whether the materials contained on the site are provided by the Company.</p>

                                    <p>The contents of this site are subject to change without notice. Commercial use of any of the contents of this site in any manner is prohibited without prior written permission from an authorized person. No reproduction of any part of the site may be sold or distributed for commercial gain nor shall it be modified or incorporated in any other work, publication, or site, whether in hardcopy or electronic format, including postings to any other site. The Company reserves all other rights.</p>

                                    <p>This site may contain some hyperlinks which lead out of this site. Information contained in any site linked from this site has not been reviewed for accuracy or legal sufficiency. The Company is not responsible for the content of any such external hyperlinks and references to any external links should not be construed as an endorsement of the links or their content.</p>

                                    <p>No information on this site shall constitute an invitation to invest in the listed companies belonging to the “Aditya Birla Group” conglomerate. Neither the Company nor the entities belonging to the “Aditya Birla Group” conglomerate, nor their respective officers, employees or agents shall be liable for any loss, damage or expense arising out of any access to or use of this site or any site linked to it, including, without limitation, any loss or profit, loss of business, loss of use, indirect, incidental, or consequential loss.</p >

                                    <p>We use cookies to give you the best online experience.These cookies allow the collection of data to help us report on how visitors use the website and to help us improve it.</p >

                                    <p>Every effort is made to keep this Website running smoothly however, neither this Website nor the companies named in the Website take any responsibility for, and will not be liable for, the Website being temporarily unavailable due to technical or other issues.</p >

                                    <p>By viewing this site, you are deemed to agree to jurisdiction of the courts in which the companies are incorporated / located in respect of any action arising therefrom or related thereto.</p >

                                    <p> If you have any questions about this Policy or other privacy concerns, you can also email us at -
                                        abg.am@adityabirla.com</p>
                                </article>
     
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

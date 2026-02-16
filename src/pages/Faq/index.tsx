import InsideHeader from "../../components/InsideHeader"
import { Link } from "react-router-dom"
import Accordion from "../../components/Accordion"

const accordionData = [
    {
        title: "What does LOREM mean?",
        content: "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. (Source: Wikipedia.com).",
    },
    {
        title: "What does LOREM mean?",
        content: "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. (Source: Wikipedia.com).",
    },
    {
        title: "What does LOREM mean?",
        content: "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. (Source: Wikipedia.com).",
    },
    {
        title: "What does LOREM mean?",
        content: "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. (Source: Wikipedia.com).",
    },
    {
        title: "What does LOREM mean?",
        content: "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. (Source: Wikipedia.com).",
    },
    {
        title: "What does LOREM mean?",
        content: "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. (Source: Wikipedia.com).",
    },
    {
        title: "What does LOREM mean?",
        content: "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. (Source: Wikipedia.com).",
    },

];


export default function Faq() {
    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/faq-banner.jpg`} title="FAQs" alt_title="Faq" />
            <section className="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                            <div className="faq-lhs">
                                <p>FAQ</p>
                                <h4>Do you have any
                                    questions for us?</h4>
                                <div className="knowmore mt-2">
                                    <Link className="btn btn-blue" to={"/contact-us"}>Contact</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 offset-lg-1">
                            <div className="faq-rhs">
                                <Accordion items={accordionData} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

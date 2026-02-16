import React, { useState, useRef } from 'react';

interface AccordionItem {
    title: string;
    content: string | string[];
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="custom-accordion">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`accordion-item ${openIndex === index ? 'open' : ''}`}
                >
                    <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h6>{item.title}</h6>
                        <span>{openIndex === index ? '' : ''}</span>
                    </div>
                    <div
                        className="accordion-content"
                        style={{
                            maxHeight: openIndex === index
                                ? contentRefs.current[index]?.scrollHeight
                                : 0,
                        }}
                        ref={(el) => (contentRefs.current[index] = el)}
                    >
                        {Array.isArray(item.content) ? (
                            <ul>
                                {item.content.map((contentItem, i) => (
                                    <li key={i}>{contentItem}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{item.content}</p>
                        )}     
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;

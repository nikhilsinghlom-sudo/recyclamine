import React, { ReactNode } from 'react';

interface WhyRecyclamineProps {
    heading: string;
    children: ReactNode;
}


const TextWithHeading: React.FC<WhyRecyclamineProps> = ({ heading, children }) => {
    return (
        <> <section className="textwithheading">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="textwithheading-lhs">
                            <h4>{heading}</h4>

                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-8">
                        <div className="textwithheading-rhs">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>

            
        </>
    )
}

export default TextWithHeading;

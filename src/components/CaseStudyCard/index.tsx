import React from "react";
import caseStudies from "../../data/caseStudiesData.json";
import KnowMore from "../TextCTA";
import { Link } from "react-router-dom";

interface CaseStudyProps {
    id: number;
    image: string;
    title: string;
    description: string;
    url?: any;
}

const CaseStudyCard: React.FC = () => {
    return (
        <div className="case-study-container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-4">
            {caseStudies.map((casstudy: CaseStudyProps) => (
                <div className="col" key={casstudy.id}>
                <div className="case-study-card">
                     <Link to={"#"}>
                    <figure>
                        <div className="case-study-card-img">
                            <img src={`${process.env.PUBLIC_URL}images/${casstudy.image}`} alt={casstudy.title}/>
                        </div>
                        <figcaption>
                            <h5>{casstudy.title}</h5>
                            <p>{casstudy.description}</p>
                                <KnowMore to={casstudy.url} title="View case study" color="dark" />
                        </figcaption>
                    </figure>
                        </Link>
                </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default CaseStudyCard;

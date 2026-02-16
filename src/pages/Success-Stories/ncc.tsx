import InsideHeader from "../../components/InsideHeader";
// import { Link } from "react-router-dom";


const BlogAndStories: React.FC = () => {


    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/stories-and-blogs/ncc.webp`} title="National Composites Centre, UK X Aditya Birla Advanced Materials" alt_title="National Composites Centre, UK X Aditya Birla Advanced Materials" className="normalheading" />

            <section className="applications-detail storiesblogs">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="applications-detail-lhs">
                                <ul>
                                    <li><Link to={"#"}>Section 1</Link></li>
                                    <li><Link to={"#"}>Section 2</Link></li>
                                    <li><Link to={"#"}>Section 3</Link></li>
                                    <li><Link to={"#"}>Section 4</Link></li>
                                    <li><Link to={"#"}>Section 5</Link></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="applications-detail-content">

                                <aside>
                                    <p>The NCC (National Composites Centre) is a world-leading UK research and development facility that provides access to state-of-the-art engineering capability and technology. It collaborates to address the most complex engineering challenges of our time and accelerate the development of new products across advanced materials, digital engineering, sustainability, and hydrogen. Delivering pioneering innovation to drive industrial transformation, the NCC works across a diverse range of sectors to deliver benefits to the UK, investing in the talent of our current and future workforce.
                                    </p>
                                    <p>Part of the High Value Manufacturing Catapult, the NCC collaborates with innovators, SMEs, the supply chain and OEMs, providing businesses with a de-risked environment to design, develop, test, and scale their ideas to get to market quickly.</p>


                                    <h4>Recyclamine Project Overview:</h4>
                                    <p>Aditya Birla Advanced Materials played a key role in supporting the development of the UK’s first sustainable wild water kayak, a groundbreaking project led by the NCC. This initiative aimed to create a fully recyclable kayak that reduces environmental impact while maintaining high-performance standards.</p>

                                    <h6>Key highlights of the project include:</h6>
                                    <ul>
                                        <li><strong>Sustainable Material Integration:</strong> The project focused on integrating sustainable advanced materials into kayak manufacturing.</li>
                                        <li><strong>Recyclamine Technology:</strong> Aditya Birla’s Recyclamine technology was central to the project, allowing for the use of recyclable epoxy thermoset composites. This technology facilitates the recovery and reuse of both the epoxy matrix and fibre reinforcements, making it ideal for creating a sustainable product.</li>
                                        <li><strong>Collaborative Development:</strong> NCC’s dedicated team of 19 graduates, apprentices, and year-in-industry students successfully developed the kayak, meeting the new wild water racing standards.</li>
                                        <li><strong>Environmental Commitment:</strong> The collaboration highlights Aditya Birla’s commitment to advancing sustainable materials and supporting cutting-edge research to tackle environmental challenges in composite manufacturing.</li>
                                    </ul>

                                    <p>This partnership between Aditya Birla Advanced Materials and the NCC exemplifies a shared vision for a more sustainable future in materials science and manufacturing. The project not only advances sustainable practices in kayak manufacturing but also paves the way for exploring sustainable solutions in industries ranging from sports equipment to automotive and aerospace. </p>


                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogAndStories;





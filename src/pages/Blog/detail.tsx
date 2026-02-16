import InsideHeader from "../../components/InsideHeader";
import { Link } from "react-router-dom";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper as SwiperClass } from 'swiper/types';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import FadeUp from "../Animation/FadeUp";
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { useState, useCallback } from 'react';




const BlogDetail: React.FC = () => {


    // const [swiperRef, setSwiperRef] = useState<SwiperClass>();

    // const handlePrevious = useCallback(() => {
    //     swiperRef?.slidePrev();
    // }, [swiperRef]);

    // const handleNext = useCallback(() => {
    //     swiperRef?.slideNext();
    // }, [swiperRef]);





    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/blog/blog-detail-banner.jpg`} title="Title here" alt_title="Skis" />

            <section className="applications-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="applications-detail-lhs">
                                <ul>
                                    <li><Link to={"#"}>Section 1</Link></li>
                                    <li><Link to={"#"}>Section 2</Link></li>
                                    <li><Link to={"#"}>Section 3</Link></li>
                                    <li><Link to={"#"}>Section 4</Link></li>
                                    <li><Link to={"#"}>Section 5</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="applications-detail-content">
                                <aside>
                                    <div className="maintitle">
                                        <h6>Title here</h6>
                                    </div>
                                    <p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</strong></p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni reiciendis perferendis dicta voluptas sint optio. Deleniti voluptate ex, dignissimos suscipit mollitia a accusamus cum quam sapiente repudiandae molestias corporis at.</p>
                                    <p><img src={`${process.env.PUBLIC_URL}/images/blog/placeholder-16-9.jpeg`} alt="" /></p>
                                </aside>
                                <aside>
                                    <div className="blocktitle">
                                        <h6>What is Lorem Ipsum?</h6>
                                    </div>
                                    <p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit:</strong></p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li>Nam quis felis sed ante dapibus porta in sed quam.</li>
                                        <li>Sed ac lacus dignissim, sodales lorem a, mattis urna.</li>
                                        <li>Morbi finibus lacus nec libero fermentum molestie.
                                        </li>
                                        <li>Cras elementum nulla vitae orci fermentum pulvinar.
                                        </li>
                                        <li>Nullam eget leo vel leo suscipit auctor non ac lacus.

                                        </li>
                                    </ul>
                                </aside>
                                <aside>
                                    <div className="blocktitle">
                                        <h6>What is Lorem Ipsum?</h6>
                                    </div>
                                    <p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit:</strong></p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </aside>
                                <aside>
                                    <div className="blocktitle">
                                        <h6>Where can I get some?</h6>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetail;





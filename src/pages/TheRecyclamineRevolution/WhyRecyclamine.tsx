import InsideHeader from "../../components/InsideHeader";
import TextWithHeading from "../../components/TextWithHeading";
import ImageBanner from "../../components/ImageBanner";
// import KnowMore from "../../components/TextCTA";

// import HeroStatement from "../../components/HeroStatement";

const WhyRecyclamine: React.FC = () => {



    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/the-recyclamine-revolution/Why-Recyclamine/Why-Recyclamine-Banner.jpg`} title="Why Recyclamine" alt_title="Why Recyclamine"
            />


            <section className='hmabout grey'>
                <div className='container'>
                    <div className='eyebrow-text'>
                        <h5>
                            <img src={`${process.env.PUBLIC_URL}/images/Recyclamine-Icon-Colored.svg`} alt="Logo" />
                            Why Recyclamine</h5>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'>
                            <div className='hmabout-lhs'>
                                <h4>Recyclamine Technology stands as the perfect sustainable choice for diverse application segments and epoxy thermoset manufacturing processes.</h4>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1'>
                            <div className='hmabout-rhs'>
                                <p>Our innovative solutions not only enhance performance but also align with our commitment to protecting the planet. Together, we are taking bold strides toward a sustainable future, empowering individuals, and creating meaningful change for a better world. Join us in this mission to innovate responsibly and make a lasting impact!</p>
                            </div>
                        </div>
                    </div>
                    {/* <KnowMore to="about-us/the-genesis-of-recyclamine-and-our-philosophy-and-values" title="Know More" color="blue" /> */}
                </div>
            </section>


            <TextWithHeading heading="Businesses">
                <p><strong>Recyclamine empowers businesses to lead the way in sustainability by providing innovative solutions to recycle materials once thought to be non-recyclable.</strong></p>
                <p>Our technology enables industries to reduce waste, recover valuable resources, and drive a circular economy. By partnering with Recyclamine, businesses can not only meet environmental goals but also create lasting value for their operations and the planet. Together, we’re shaping a future where sustainable practices are not just possible—they’re the standard.
                </p>
            </TextWithHeading>
            <ImageBanner imgsrc={`${process.env.PUBLIC_URL}/images/the-recyclamine-revolution/Why-Recyclamine/Businesses.jpg`} alt_title="Businesses" />

            <TextWithHeading heading="Individuals">
                <p><strong>Recyclamine empowers individuals to be part of a transformative movement toward sustainability.</strong></p>
                <p>By providing industries with the tools to recycle once-non-recyclable materials, we’re reshaping the future and offering a tangible path to a cleaner planet. With Recyclamine, you’re not just supporting innovation—you’re contributing to a meaningful cause that positively impacts the Earth. Together, we can drive lasting change and create a world where every resource is valued and repurposed.</p>
            </TextWithHeading>

            <ImageBanner imgsrc={`${process.env.PUBLIC_URL}/images/the-recyclamine-revolution/Why-Recyclamine/Individual.jpg`} alt_title="Individuals"/>
            


        </>
    )
}

export default WhyRecyclamine;

import FadeUp from "../Animation/FadeUp"

export default function SocialFeed() {
  return (
    <section className='socialfeed'>
      <div className='container'>
        <FadeUp duration={1} delay={0.2} threshold={0.2}>
          <img src={`${process.env.PUBLIC_URL}/images/Socialfeed.jpg`} alt="" />
        </FadeUp>
      </div>
    </section>
  )
}

import aboutImg from '../assets/about.jpg'
import Title from './Title'
const About = () => {
  return (
    <>
      <section className='section' id='about'>
        <Title title={'about'} subTitle={' us'} />

        <div className='section-center about-center'>
          <div className='about-img'>
            <img src={aboutImg} alt='books' className='about-photo' />
          </div>

          <article className='about-info'>
            <h3>read the difference</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              impedit vel facilis iure quo exercitationem reprehenderit velit
              accusantium, voluptatibus aut fugit qui maiores officiis, iusto
              ullam nemo alias nisi necessitatibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae consequuntur laudantium, sunt distinctio fugiat ut
              veritatis veniam et mollitia, cum consequatur animi ullam,
              voluptates sed.
            </p>
            <a href='#' className='btn'>
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  )
}
export default About

import { books } from '../Data'
import Title from './Title'

const Books = () => {
  return (
    <>
      <section className='section' id='books'>
        <Title title={'top 4'} subTitle={' most read books'} />

        <div className='section-center book-center'>
          {books.map((item) => {
            return (
              <article className='book-card' key={item.id}>
                <div className='book-img-container'>
                  <img src={item.image} alt={item.title} className='book-img' />
                  <p className='total-read'>{item.date}</p>
                </div>

                <div className='book-info'>
                  <div className='book-title'>
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.info}</p>
                  <div className='book-footer'>
                    <p>
                      <span className='service-icon'>
                        <i className='fas fa-user'></i>
                      </span>
                      {item.author}
                    </p>
                    <p>
                      <span className='service-icon'>
                        <i className='fas fa-star'></i>
                      </span>
                      {item.rating}
                    </p>
                    <p>
                      <span className='service-icon'>
                        <i className='fas fa-menu'></i>
                      </span>
                      {item.chapter} Chapter
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default Books

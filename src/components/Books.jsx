import { books } from '../Data'
import Title from './Title'

const Books = () => {
  return (
    <>
      <section className='section' id='books'>
        <Title title={'top 4'} subTitle={' most read books'} />

        <div className='section-center topmost-center'>
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
                      <span class='service-icon'>
                        <i class='fas fa-user'></i>
                      </span>
                      {item.author}
                    </p>
                    <p>
                      <span class='service-icon'>
                        <i class='fas fa-star'></i>
                      </span>
                      {item.rating}
                    </p>
                    <p>
                      <span class='service-icon'>
                        <i class='fas fa-menu'></i>
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

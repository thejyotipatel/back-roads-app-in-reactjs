import { pageLinks, socialLinks } from '../Data'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='nav-center'>
          {/* header logo */}
          <div className='nav-header'>
            <h2 className='nav-logo'>
              back<span>Books</span>
            </h2>
            <button className='nav-toggle' id='nav-togglee' type='button'>
              <i className='fas fa-bars'></i>
            </button>
          </div>

          {/* nav links */}
          <ul className='nav-links' id='nav-links'>
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.text} className='nav-link'>
                    {link.text}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* nav icons */}
          <ul className='nav-icons'>
            {socialLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href='/' className='nav-icon'>
                    <i className={link.icon}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar

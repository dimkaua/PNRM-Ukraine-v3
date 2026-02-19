// import React, { useState, useEffect, useRef, useCallback } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { FormattedMessage } from 'react-intl'
// import MainMenu from '../../pages/main/MainMenu'
// import Eventing from '../../pages/eventing/Eventing'
// import Projects from '../../pages/projects/Projects'
// import News from '../../pages/news/News'
// import Network from '../../pages/network/Network'
// import Blog from '../../pages/blog/Blog'
// import Team from '../../pages/team/Team'
// import TeamDetail from '../../pages/team/TeamDetail'
// // import EventDetail from '../../pages/eventing/EventDetail'
// import NewsDetail from '../../pages/news/NewsDetail'
// import './Header.scss'

// function Header({ activeLanguage, toggleLanguage }) {
//   const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(false)
//   const [isMenuOpen, setMenuOpen] = useState(false)
//   const [isTeamDropdownOpen, setTeamDropdownOpen] = useState(false)
//   const [isHeaderVisible, setHeaderVisible] = useState(true)
//   const sortRef = useRef()
//   const teamDropdownRef = useRef()
//   const [activePage, setActivePage] = useState('/')

//   const toggleLanguagePopup = () => {
//     setLanguagePopupOpen(!isLanguagePopupOpen)
//   }

//   const handleLanguageChange = (language) => {
//     toggleLanguage()
//     setLanguagePopupOpen(false)
//   }

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen)
//   }

//   const toggleTeamDropdown = (e) => {
//     e.preventDefault()
//     setTeamDropdownOpen(!isTeamDropdownOpen)
//   }

//   const handleOutsideClick = useCallback((e) => {
//     if (sortRef.current && !sortRef.current.contains(e.target)) {
//       setLanguagePopupOpen(false)
//     }
//     if (
//       teamDropdownRef.current &&
//       !teamDropdownRef.current.contains(e.target)
//     ) {
//       setTeamDropdownOpen(false)
//     }
//   }, [])

//   useEffect(() => {
//     document.body.addEventListener('click', handleOutsideClick)
//     return () => {
//       document.body.removeEventListener('click', handleOutsideClick)
//     }
//   }, [handleOutsideClick])

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 990) {
//         setHeaderVisible(false)
//       } else {
//         setHeaderVisible(true)
//       }
//     }

//     handleResize()
//     window.addEventListener('resize', handleResize)
//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   const pages = [
//     { id: 'homepage', path: '/' },
//     { id: 'events', path: '/eventing' },
//     { id: 'projects', path: '/projects' },
//     { id: 'news', path: '/news' },
//     { id: 'network', path: '/network' },
//     { id: 'blog', path: '/blog' },
//     { id: 'team', path: '/team', hasDropdown: true },
//   ]

//   return (
//     <Router>
//       <header className={isHeaderVisible ? '' : 'hidden'}>
//         <div className="container">
//           <div className="header">
//             {/* Верхній ряд */}
//             <div className="logo-row">
//               <div className="logo-block">
//                 <div className="logo">
//                   <img
//                     width={93}
//                     height={94}
//                     src="./img/mini-logo.png"
//                     alt="logo"
//                   />
//                 </div>
//                 <div className="site-title">
//                   <FormattedMessage id="site.title" />
//                 </div>
//               </div>

//               {/* Перемикач мови */}
//               <div ref={sortRef} className="language-switcher">
//                 <button onClick={toggleLanguagePopup}>
//                   <img
//                     width={50}
//                     height={30}
//                     src={
//                       activeLanguage === 'uk'
//                         ? './img/ua-language1.png'
//                         : './img/eng-language.png'
//                     }
//                     alt="language"
//                   />
//                   <img
//                     width={40}
//                     height={40}
//                     src="./img/ua-arrow.png"
//                     alt="language-arrow"
//                   />
//                 </button>
//                 {isLanguagePopupOpen && (
//                   <div className="language-popup">
//                     <ul>
//                       <li
//                         onClick={() => handleLanguageChange('uk')}
//                         className={activeLanguage === 'uk' ? 'active' : ''}
//                       >
//                         Українська
//                       </li>
//                       <li
//                         onClick={() => handleLanguageChange('en')}
//                         className={activeLanguage === 'en' ? 'active' : ''}
//                       >
//                         English
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Нижній ряд */}
//             <nav className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
//               <ul>
//                 {pages.map((page, index) => (
//                   <li
//                     key={index}
//                     className={page.hasDropdown ? 'has-dropdown' : ''}
//                   >
//                     {page.hasDropdown ? (
//                       <div ref={teamDropdownRef} className="dropdown-container">
//                         <Link
//                           to={page.path}
//                           onClick={(e) => {
//                             if (page.hasDropdown) {
//                               toggleTeamDropdown(e)
//                             } else {
//                               setMenuOpen(false)
//                               setActivePage(page.path)
//                             }
//                           }}
//                           className={activePage === page.path ? 'active' : ''}
//                         >
//                           <FormattedMessage id={page.id} />
//                           <span className="dropdown-arrow">▼</span>
//                         </Link>
//                         {isTeamDropdownOpen && (
//                           <div className="team-dropdown">
//                             <ul>
//                               <li>
//                                 <Link
//                                   to="/team"
//                                   onClick={() => {
//                                     setTeamDropdownOpen(false)
//                                     setActivePage('/team')
//                                   }}
//                                 >
//                                   <FormattedMessage id="team" />
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link
//                                   to="/team/detail"
//                                   onClick={() => {
//                                     setTeamDropdownOpen(false)
//                                     setActivePage('/team/detail')
//                                   }}
//                                 >
//                                   <FormattedMessage
//                                     id="team.detail"
//                                     defaultMessage="Детальніше"
//                                   />
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <Link
//                         to={page.path}
//                         onClick={() => {
//                           setMenuOpen(false)
//                           setActivePage(page.path)
//                         }}
//                         className={activePage === page.path ? 'active' : ''}
//                       >
//                         <FormattedMessage id={page.id} />
//                       </Link>
//                     )}
//                   </li>
//                 ))}

//                 {/* Кнопка Приєднатись */}
//                 <li>
//                   <a
//                     href="https://docs.google.com/forms/d/e/1FAIpQLSfB8CQvpVcEBWd0prBIadO71lGvt3z52Hzk9C9yT0BkGU-2vg/viewform"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="join-btn"
//                   >
//                     <FormattedMessage id="join.button" />
//                   </a>
//                 </li>
//                 {/* Кнопка Підтримати нас */}
//                 <li>
//                   <a
//                     href="https://send.monobank.ua/jar/pJW2wViSQ"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="support-btn"
//                   >
//                     <FormattedMessage id="support.button" />
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>

//         {/* Бургер меню */}
//         <div
//           className={`burger ${isMenuOpen ? 'open' : ''}`}
//           onClick={toggleMenu}
//         >
//           <span className="line"></span>
//           <span className="line"></span>
//           <span className="line"></span>
//         </div>

//         {/* Мобільне меню */}
//         {isMenuOpen && (
//           <div className="mobile-menu">
//             <ul>
//               {pages.map((page, index) => (
//                 <li key={index}>
//                   <Link to={page.path} onClick={() => setMenuOpen(false)}>
//                     <FormattedMessage id={page.id} />
//                   </Link>
//                   {page.hasDropdown && (
//                     <ul className="mobile-submenu">
//                       <li>
//                         <Link
//                           to="/team/detail"
//                           onClick={() => setMenuOpen(false)}
//                         >
//                           <FormattedMessage
//                             id="team.detail"
//                             defaultMessage="Детальніше"
//                           />
//                         </Link>
//                       </li>
//                     </ul>
//                   )}
//                 </li>
//               ))}
//               <li>
//                 <a
//                   href="https://docs.google.com/forms/d/e/1FAIpQLSfB8CQvpVcEBWd0prBIadO71lGvt3z52Hzk9C9yT0BkGU-2vg/viewform"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="join-btn"
//                 >
//                   <FormattedMessage id="join.button" />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://docs.google.com/forms/d/e/1FAIpQLSfB8CQvpVcEBWd0prBIadO71lGvt3z52Hzk9C9yT0BkGU-2vg/viewform"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="support-btn"
//                 >
//                   <FormattedMessage id="support.button" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         )}

//         {/* Роутинг */}
//         <Routes>
//           <Route exact path="/" element={<MainMenu />} />
//           <Route path="/eventing" element={<Eventing />} />
//           {/* <Route path="/event/:eventIndex" element={<EventDetail />} /> */}
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/news/:newsIndex" element={<NewsDetail />} />
//           <Route path="/network" element={<Network />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/team" element={<Team />} />
//           <Route path="/team/detail" element={<TeamDetail />} />
//         </Routes>
//       </header>
//     </Router>
//   )
// }

// export default Header

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import MainMenu from '../../pages/main/MainMenu'
import Eventing from '../../pages/eventing/Eventing'
import Projects from '../../pages/projects/Projects'
import News from '../../pages/news/News'
import Network from '../../pages/network/Network'
import Blog from '../../pages/blog/Blog'
import Team from '../../pages/team/Team'
import TeamDetail from '../../pages/team/TeamDetail'
import NewsDetail from '../../pages/news/NewsDetail'
import './Header.scss'

function Header({ activeLanguage, toggleLanguage }) {
  const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isTeamDropdownOpen, setTeamDropdownOpen] = useState(false)
  const [isMobileTeamOpen, setMobileTeamOpen] = useState(false)
  const [isHeaderVisible, setHeaderVisible] = useState(true)
  const sortRef = useRef()
  const teamDropdownRef = useRef()
  const mobileMenuRef = useRef()
  const [activePage, setActivePage] = useState('/')

  const toggleLanguagePopup = () => {
    setLanguagePopupOpen(!isLanguagePopupOpen)
  }

  const handleLanguageChange = (language) => {
    toggleLanguage()
    setLanguagePopupOpen(false)
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)

    if (isMenuOpen) {
      setMobileTeamOpen(false)
    }
  }

  const toggleTeamDropdown = (e) => {
    e.preventDefault()
    setTeamDropdownOpen(!isTeamDropdownOpen)
  }

  const toggleMobileTeamDropdown = (e) => {
    e.preventDefault()
    setMobileTeamOpen(!isMobileTeamOpen)
  }

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setMobileTeamOpen(false)
  }

  const handleOutsideClick = useCallback((e) => {
    if (sortRef.current && !sortRef.current.contains(e.target)) {
      setLanguagePopupOpen(false)
    }
    if (
      teamDropdownRef.current &&
      !teamDropdownRef.current.contains(e.target)
    ) {
      setTeamDropdownOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(e.target) &&
      !e.target.closest('.burger')
    ) {
      setMenuOpen(false)
      setMobileTeamOpen(false)
    }
  }, [])

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [handleOutsideClick])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 990) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
        setMenuOpen(false)
        setMobileTeamOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Блокування скрола при відкритому моб меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const pages = [
    { id: 'homepage', path: '/' },
    { id: 'events', path: '/eventing' },
    { id: 'projects', path: '/projects' },
    { id: 'news', path: '/news' },
    { id: 'network', path: '/network' },
    { id: 'blog', path: '/blog' },
    { id: 'team', path: '/team', hasDropdown: true },
  ]

  return (
    <Router>
      <header className={isHeaderVisible ? '' : 'hidden'}>
        <div className="container">
          <div className="header">
            <div className="logo-row">
              <div className="logo-block">
                <div className="logo">
                  <img
                    width={93}
                    height={94}
                    src="/img/mini-logo.png"
                    alt="logo"
                  />
                </div>
                <div className="site-title">
                  <FormattedMessage id="site.title" />
                </div>
              </div>

              <div ref={sortRef} className="language-switcher">
                <button onClick={toggleLanguagePopup}>
                  <img
                    width={50}
                    height={30}
                    src={
                      activeLanguage === 'uk'
                        ? '/img/ua-language1.png'
                        : '/img/eng-language.png'
                    }
                    alt="language"
                  />
                  <img
                    width={40}
                    height={40}
                    src="/img/ua-arrow.png"
                    alt="language-arrow"
                    className={isLanguagePopupOpen ? 'rotated' : ''}
                  />
                </button>
                {isLanguagePopupOpen && (
                  <div className="language-popup">
                    <ul>
                      <li
                        onClick={() => handleLanguageChange('uk')}
                        className={activeLanguage === 'uk' ? 'active' : ''}
                      >
                        Українська
                      </li>
                      <li
                        onClick={() => handleLanguageChange('en')}
                        className={activeLanguage === 'en' ? 'active' : ''}
                      >
                        English
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <nav className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                {pages.map((page, index) => (
                  <li
                    key={index}
                    className={page.hasDropdown ? 'has-dropdown' : ''}
                  >
                    {page.hasDropdown ? (
                      <div ref={teamDropdownRef} className="dropdown-container">
                        <Link
                          to={page.path}
                          onClick={(e) => {
                            if (page.hasDropdown) {
                              toggleTeamDropdown(e)
                            } else {
                              setMenuOpen(false)
                              setActivePage(page.path)
                            }
                          }}
                          className={activePage === page.path ? 'active' : ''}
                        >
                          <FormattedMessage id={page.id} />
                          <span
                            className={`dropdown-arrow ${
                              isTeamDropdownOpen ? 'rotated' : ''
                            }`}
                          >
                            ▼
                          </span>
                        </Link>
                        {isTeamDropdownOpen && (
                          <div className="team-dropdown">
                            <ul>
                              <li>
                                <Link
                                  to="/team"
                                  onClick={() => {
                                    setTeamDropdownOpen(false)
                                    setActivePage('/team')
                                  }}
                                >
                                  <FormattedMessage id="team" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/team/detail"
                                  onClick={() => {
                                    setTeamDropdownOpen(false)
                                    setActivePage('/team/detail')
                                  }}
                                >
                                  <FormattedMessage
                                    id="team.detail"
                                    defaultMessage="Детальніше"
                                  />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={page.path}
                        onClick={() => {
                          setMenuOpen(false)
                          setActivePage(page.path)
                        }}
                        className={activePage === page.path ? 'active' : ''}
                      >
                        <FormattedMessage id={page.id} />
                      </Link>
                    )}
                  </li>
                ))}

                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfB8CQvpVcEBWd0prBIadO71lGvt3z52Hzk9C9yT0BkGU-2vg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="join-btn"
                  >
                    <FormattedMessage id="join.button" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://send.monobank.ua/jar/pJW2wViSQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support-btn"
                  >
                    <FormattedMessage id="support.button" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          className={`burger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          role="button"
          tabIndex="0"
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        <div
          className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
        ></div>

        {isMenuOpen && (
          <div className="mobile-menu" ref={mobileMenuRef}>
            <div className="mobile-menu-header">
              <h3>
                <FormattedMessage id="menu.title" defaultMessage="Меню" />
              </h3>
              <button
                className="close-mobile-menu"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <ul className="mobile-menu-list">
              {pages.map((page, index) => (
                <li
                  key={index}
                  className={page.hasDropdown ? 'has-submenu' : ''}
                >
                  {page.hasDropdown ? (
                    <div className="mobile-dropdown-container">
                      <div className="mobile-menu-item">
                        <Link
                          to={page.path}
                          onClick={closeMobileMenu}
                          className={activePage === page.path ? 'active' : ''}
                        >
                          <FormattedMessage id={page.id} />
                        </Link>
                        <button
                          className="mobile-submenu-toggle"
                          onClick={toggleMobileTeamDropdown}
                          aria-label="Toggle submenu"
                        >
                          <span
                            className={`submenu-arrow ${
                              isMobileTeamOpen ? 'rotated' : ''
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                      </div>
                      <div
                        className={`mobile-submenu ${
                          isMobileTeamOpen ? 'open' : ''
                        }`}
                      >
                        <ul>
                          <li>
                            <Link
                              to="/team"
                              onClick={closeMobileMenu}
                              className={activePage === '/team' ? 'active' : ''}
                            >
                              <FormattedMessage id="team" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team/detail"
                              onClick={closeMobileMenu}
                              className={
                                activePage === '/team/detail' ? 'active' : ''
                              }
                            >
                              <FormattedMessage
                                id="team.detail"
                                defaultMessage="Детальніше"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={page.path}
                      onClick={closeMobileMenu}
                      className={activePage === page.path ? 'active' : ''}
                    >
                      <FormattedMessage id={page.id} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mobile-menu-actions">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfB8CQvpVcEBWd0prBIadO71lGvt3z52Hzk9C9yT0BkGU-2vg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-join-btn"
                onClick={closeMobileMenu}
              >
                <FormattedMessage id="join.button" />
              </a>
              <a
                href="https://send.monobank.ua/jar/pJW2wViSQ"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-support-btn"
                onClick={closeMobileMenu}
              >
                <FormattedMessage id="support.button" />
              </a>
            </div>
          </div>
        )}

        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route path="/eventing" element={<Eventing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsIndex" element={<NewsDetail />} />
          <Route path="/network" element={<Network />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/detail" element={<TeamDetail />} />
        </Routes>
      </header>
    </Router>
  )
}

export default Header

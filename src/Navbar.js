import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const containerRef = useRef(null)
  const refLink = useRef(null)

  useEffect(() => {
    const currentheightCatch = refLink.current.getBoundingClientRect().height
    if (show) {
      containerRef.current.style.height = `${currentheightCatch}px`
    } else {
      containerRef.current.style.height = '0px'
    }
  }, [show])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShow(!show)}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={containerRef}>
          <ul className="links" ref={refLink}>
            {links.map((item) => {
              const { id, url, text } = item
              return (
                <li key={id}>
                  <a href={url}> {text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item
            return (
              <li key={id}>
                <a href={url}>
                  <FaTwitter />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

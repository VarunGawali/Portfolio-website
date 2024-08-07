import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container">
            <h1 className="footer_title">Varun</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">
                        About
                    </a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/" className='footer_social-link' target='_blank'>
                <i className='bx bxl-instagram'></i>
                </a>

                <a href="https://x.com/" className='footer_social-link' target='_blank'>
                    <i className="bx bxl-twitter"></i>
                </a>

                <a href="https://linkedin.com/" className='footer_social-link' target='_blank'>
                    <i className='bx bxl-linkedin-square'></i>
                </a>
            </div>

            <span className='footer_copy'>
                &#169; Varun Gawali. All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer

import React from 'react'
let today = new Date();
const Footer = ({content}) => {
  return (
    <footer className="footer">
    <div className="date-section">
      <span className="footer-date">{today.getDate()}</span>
      <span className="footer-month">{`/${today.getMonth() + 1}`}</span>
    </div>
    <div className="socials">
      <a href="https://www.instagram.com/sdi_bit/" target="_blank" rel="noopener noreferrer" className="social-link">
        <div className='insta'></div>
      </a>
      <a href="https://www.linkedin.com/company/sdibangalorebit/" target="_blank" rel="noopener noreferrer" className="social-link">
      <div className='linkedin'></div>
      </a>
      <a href="https://x.com/MLSAxSDI" target="_blank" rel="noopener noreferrer" className="social-link">
      <div className='twitter'></div>
      </a>
    </div>
    <div className="footer-content">{content}</div>
  </footer>
  )
}

export default Footer

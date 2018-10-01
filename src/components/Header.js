import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Liam O'Flynn</h1>
        <p>
          Full-stack web developer based in San Francisco
          <br />
          <h3 style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
            Cogito, ergo sum
          </h3>
          {/*  {' '}
          <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license. */}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Header

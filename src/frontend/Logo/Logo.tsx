import * as React from 'react';
const logo = require('./marinedept-logo.jpg')
const css = require('./ir-styles.css')

export default function Logo (props) {
  return (
    <div className={css.logo}>
      <img className={css.img} src={logo} alt="Marine Department" />
      <div>
        <h1 className={css.title}>Marine Department</h1>
        <h2 className={css.subtitle}>Ministry of transport</h2>
      </div>
    </div>
  )
}

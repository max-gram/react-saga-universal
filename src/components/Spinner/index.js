import React from 'react'
import css from './styles.css'

const Spinner = ({className=''}) => (
  <div className={css.wrapper+' '+className}>
    <div className={css.spinner}></div>
  </div>
)

export default Spinner

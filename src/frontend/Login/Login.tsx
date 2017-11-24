import * as React from 'react';
const css = require('./ir-styles.css')
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import txt from './literals'
import Msg from '../Msg/Msg'

export default function Initialization (props) {
  const {msg, problems} = props.data.login
  const {} = props.actions
  const disabled = (msg && (msg.type === 'loading' || msg.type === 'success'))
  return (
    <div>
      {msg &&
        <div className={css.row}>
          <div className={css.main}>
            <Msg type={msg.type} msg={msg.text} />
          </div>
        </div>
      }
      <div className={css.row}>
        <div className={css.main}>
          <h1>{txt.title}</h1>
          <FontIcon value="visibility" className={css.icon}/>
          <h2>{txt.instructionsTitle}</h2>
          <ol className={css.list}>
          {txt.instructions.map((item, i)=>(
            <li key={i}>{item}</li>
          ))}
          </ol>
          <Button raised primary className={css.btn} disabled={disabled}>{txt.startLogin}</Button>
        </div>
        <div className={css.rightBox}>
          {problems &&
          <div className={css.problemsBox}>
            <h2 className={css.problemsTitle} >{txt.problemsTitle}</h2>
            <ul className={css.problems}>
              {problems.map((item, i)=>(
                <li key={i}><strong>{item.title}</strong><p>{item.description}</p></li>
              ))}
            </ul>
          </div>
          }
          <div className={css.issuesBox}>
            <h2>{txt.issuesTitle}</h2>
            <ul className={css.list}>
              {txt.commonIssues.map((item, i)=>(
                <li key={i}><strong>{item.title}:</strong> {item.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
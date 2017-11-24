import * as React from 'react';
const css = require('./ir-styles.css')
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import txt from './literals'
import Msg from '../Msg/Msg'

export default function Initialization (props) {
  const {url, key, reason, msg} = props.installation
  const {changeValue} = props.actions
  function handleChange(path) {
    return (value) => changeValue(path, value)
  }
  const disabled = (msg && (msg.type === 'loading' || msg.type === 'success'))
  return (
    <div className={css.main}>
      {msg &&
        <Msg type={msg.type} msg={msg.text} />
      }
      <h1>{txt.title}</h1>
      <Input type="text" label={txt.key} disabled={disabled} required hint={key.hint} value={key.value} error={key.error} onChange={handleChange('installation.key.value')} />
      <Input type="text" label={txt.url} disabled={disabled} value={url.value} hint={url.hint} error={url.error} onChange={handleChange('installation.url.value')} required />
      <Input type="text" label={txt.reason} disabled={disabled} error={reason.error} multiline rows={5} value={reason.value} onChange={handleChange('installation.reason.value')} required hint={reason.hint} />
      <p className={css.hint}>* {txt.fieldsMandatory}.</p>
      <Button raised primary className={css.btn} disabled={disabled}>Register</Button>
    </div>
  )
}
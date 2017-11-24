import * as React from 'react';
const css = require('./ir-styles.css')
import { List, ListItem } from 'react-toolbox/lib/list';
import Dialog from 'react-toolbox/lib/dialog';
import FontIcon from 'react-toolbox/lib/font_icon';

export default function Msg (props) {
  const {msg, show} = props
  if (!show) return null
  const instructions = msg.list.filter((item)=>item.description)
  return (
    <Dialog active={true} title={msg.title} type="large" className={css.main}>
      <List ripple={false} theme={css}>
        {msg.list.map((item, i) => (
          <ListItem key={i}
                    leftIcon={<FontIcon value={item.icon} className={css[item.className]} />}
                    caption={item.text}

          />
        ))}
      </List>
      {instructions.length > 0 &&
        <h3>{msg.subTitle}</h3>
      }
      {instructions.map((item, i) => (
        <p key={i} dangerouslySetInnerHTML={{__html: item.description}}></p>
      ))}
    </Dialog>
  )
}

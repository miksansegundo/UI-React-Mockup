import * as React from 'react';
const css = require('./ir-styles.css')
import {states} from './actions'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import FontIcon from 'react-toolbox/lib/font_icon';

export default function States (props) {
  const {changeState} = props.actions
  const {stateActive} = props

  function selectState (name) {
    return () => {
      changeState(name)
    }
  }
  return (
    <div className={css.main} id="list">
      <FontIcon value="close" className={css.close}
                onClick={(e)=>document.querySelector('#list')['style'].display = 'none'} />
      <ListSubHeader className={css.subHeader} caption='Explore states by Actions' />
      <div className={css.scroll}>
        <List selectable ripple className={css.list}>
          {states.map((item, i) => (
            <ListItem key={i} caption={item.name} theme={stateActive === item.name ? css : {}} onClick={selectState(item.name)} />
          ))}
        </List>
      </div>
    </div>
  )
}

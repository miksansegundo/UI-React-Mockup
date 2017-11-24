import * as React from 'react';

import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import Modal from '../Modal/Modal';

import txt from './literals'

const TooltipButton = Tooltip(Button);
const css = require('./ir-styles.css');

function getColor (status) {
  if (status) return 'on'
  return 'off'
}
function showModal (bmt20, bcc950, net) {
  if (!bcc950.attached || !bmt20.attached || !net.online) {
    return true
  }
}
let Connectivity = (props) => {
  const {bmt20, bcc950, net} = props.device
  // Iris CAM
  const bcc950Txt = bcc950.attached ? txt.bmt20On : txt.bmt20Off
  const bcc950Icon = bcc950.attached ? 'visibility' : 'visibility_off'
  const bcc950Error = !bcc950.attached ? txt.bcc950Error : ''


  // Portrait CAM
  const bmt20Txt = bmt20.attached ? txt.bcc950On : txt.bcc950Off
  const bmt20Icon = bmt20.attached ? 'photo_camera' : 'photo_camera'
  const bmt20Error = !bmt20.attached ? txt.bmt20Error : ''


  // Internet
  const netTxt = net.online ? txt.netOn : txt.netOff
  const netIcon = net.online ? 'network_wifi' : 'signal_wifi_off'
  const netError = !net.online ? txt.netError : ''

  // Modal
  const show = showModal(bmt20, bcc950, net)
  const modalMsg = {
    title: txt.devicesTitle,
    subTitle: txt.devicesSubTitle,
    list: [
      {icon: netIcon, text: netTxt, className: getColor(net.online), description: netError},
      {icon: bcc950Icon, text: bcc950Txt, className: getColor(bcc950.attached), description: bmt20Error},
      {icon: bmt20Icon, text: bmt20Txt, className: getColor(bmt20.attached), description: bcc950Error},
    ]
  }
  return (
    <div className={css.device}>
      <TooltipButton className={net.online ? css.on : css.off} icon={netIcon} tooltip={netTxt} theme={css} />
      <TooltipButton className={bcc950.attached ? css.on : css.off} icon={bcc950Icon} tooltip={bcc950Txt} theme={css} />
      <TooltipButton
          className={bmt20.attached ? css.on : css.off}
          icon={bmt20Icon}
          tooltip={bmt20Txt}
          theme={css}
      />
      <Modal show={show} msg={modalMsg} />
    </div>
  )
}

export default Connectivity
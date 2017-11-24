import * as React from 'react';

import Connectivity from '../Connectivity/Connectivity';
import Initialization from '../Initialization/Initialization';

import Login from '../Login/Login';
import Logo from '../Logo/Logo';

import States from '../States/States';
import {states, stateBase} from '../States/actions';

interface App {
  actions: {
    changeValue: (path:string, value:string) => void
    changeState: (path:string, value:string) => void
  }
}

class App extends React.Component<any, any> {
  constructor () {
    super()
    this.initState()
    this.actions = {
      changeValue: (path, value) => {
        const keys = path.split('.')
        const name = keys.pop()
        let key = keys.reduce((i, e) => {
          return i[e]
        }, this.state.data)
        key[name] = value // New value set
        this.setState({data: this.state});
      },
      changeState: (name) => {
        this.memorizeStateName(name)
        const state = this.getState(name)
        this.setActiveState(state)
      }
    }
  }

  initState () {
    const stateActive = sessionStorage.getItem('stateActive')
    const state = this.getState(stateActive)
    this.state = {
      stateActive: state.name,
      screen: state.screen,
      data: this.extendState(state.state)
    }
  }

  setActiveState (state) {
    this.setState({
      stateActive: state.name,
      screen: state.screen,
      data: this.extendState(state.state)
    })
  }

  memorizeStateName (name) {
    sessionStorage.setItem('stateActive', name)
  }

  getState (name) {
    const stateActive = states.filter((item) => item.name === name)[0] || states[0]
    this.memorizeStateName(stateActive.name)
    return stateActive
  }

  extendState (state) {
    return Object.assign({}, stateBase, state)
  }

  render () {
    console.log('state', this.state.data)
    return (
      <div>
        <div className="main">
          <Logo />
          <Connectivity {...this.state.data} />
          {this.state.screen === 'installation' &&
            <Initialization {...this.state.data} actions={this.actions}/>
          }
          {this.state.screen === 'login' &&
            <Login {...this.state} actions={this.actions}/>
          }
        </div>
        <States actions={this.actions} stateActive={this.state.stateActive} />
      </div>
    )
  }
}

export default App;

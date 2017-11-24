export const stateBase = {
  device: {
    bmt20: {
      attached: true,
      capturing: true
    },
    bcc950: {
      attached: true
    },
    net: {
      online: true
    }
  }
}

export const states = [
  {
    name: '0 - Connectivity',
    screen: 'installation',
    state: {
      device: {
        bmt20: {
          attached: false,
          capturing: false
        },
        bcc950: {
          attached: false
        },
        net: {
          online: true
        }
      },
      installation: {
        key: {
          hint: 'An unique key',
          error: '',
          value: ''
        },
        reason: {
          hint: 'Please describe the reason of installation',
          error: '',
          value: ''
        },
        url: {
          hint: 'A valid URL starting by http://...',
          error: '',
          value: 'http://iresponse.com/installation'
        }
      }
    }
  },
  {
    name: '1 - Installation',
    screen: 'installation',
    state: {
      installation: {
        key: {
          hint: 'An unique key',
          error: '',
          value: ''
        },
        reason: {
          hint: 'Please describe the reason of installation',
          error: '',
          value: ''
        },
        url: {
          hint: 'A valid URL starting by http://...',
          error: '',
          value: 'http://iresponse.com/installation'
        }
      }
    }
  },
  {
    name: '1.1 - Installation form validation',
    screen: 'installation',
    state: {
      installation: {
        msg: {
          type: 'warning',
          text: 'Please review the form fields validation messages and try again.'
        },
        key: {
          hint: 'An unique key',
          error: '',
          value: '232323232323'
        },
        reason: {
          hint: 'Please describe the reason of installation',
          error: 'This field in mandatory',
          value: ''
        },
        url: {
          hint: 'A valid URL starting by http://...',
          error: 'The URL is not valid',
          value: 'http://iresponse.com/installation'
        }
      }
    }
  },
  {
    name: '1.2 - Installation form sent',
    screen: 'installation',
    state: {
      installation: {
        msg: {
          type: 'loading',
          text: 'The installation is in progress. Please wait.'
        },
        key: {
          hint: 'An unique key',
          error: '',
          value: '232323232323'
        },
        reason: {
          hint: 'Please describe the reason of installation',
          error: '',
          value: 'First installation for a new department'
        },
        url: {
          hint: 'A valid URL starting by http://...',
          error: '',
          value: 'http://iresponse.com/installation'
        }
      }
    }
  },
  {
    name: '1.3 - Installation REST API response error',
    screen: 'installation',
    state: {
      installation: {
        msg: {
          type: 'error',
          text: 'The installation failed. The error is: The key is not unique.'
        },
        key: {
          hint: 'An unique key',
          error: 'The key is not unique',
          value: '232323232323'
        },
        reason: {
          hint: 'Please describe the reason of installation',
          error: '',
          value: 'First installation for a new department'
        },
        url: {
          hint: 'A valid URL starting by http://...',
          error: '',
          value: 'http://iresponse.com/installation'
        }
      }
    }
  },
  {
    name: '1.4 - Installation REST API response success',
    screen: 'installation',
    state: {
      installation: {
        msg: {
          type: 'success',
          text: 'The installation is done. You will be redirected shortly.'
        },
        key: {
          hint: 'An unique key',
          error: '',
          value: '232323232323'
        },
        reason: {
          hint: 'Please describe the reason of installation',
          error: '',
          value: 'First installation for a new department'
        },
        url: {
          hint: 'A valid URL starting by http://...',
          error: '',
          value: 'http://iresponse.com/installation'
        }
      }
    }
  },
  {
    name: '2 - Login',
    screen: 'login',
    state: {
      login: {
      }
    }
  },
  {
    name: '2.1 - Login started',
    screen: 'login',
    state: {
      login: {
        msg: {
          type: 'loading',
          text: 'The Iris CAM is capturing. Look inside the CAM and wait until you listen the sound.'
        },
      }
    }
  },
  {
    name: '2.2 - Login problems detected',
    screen: 'login',
    state: {
      login: {
        msg: {
          type: 'warning',
          text: 'Some problems detected, please correct them and start again.'
        },
        problems: [
          {
            title: 'Camera upside down',
            description: 'The red sticker must be on upside'
          },
          {
            title: 'Missing eye',
            description: 'Put both eyes in front of the cam. Perhaps the subject has a glass eye or patch'
          }
        ]
      }
    }
  },
  {
    name: '2.3 - Login REST API response error',
    screen: 'login',
    state: {
      login: {
        msg: {
          type: 'error',
          text: 'The login failed. The error is: The user is not an operator.'
        }
      }
    }
  },
  {
    name: '2.4 - Login REST API response success',
    screen: 'login',
    state: {
      login: {
        msg: {
          type: 'success',
          text: 'The login is successful. You will be redirected shortly.'
        }
      }
    }
  }
]
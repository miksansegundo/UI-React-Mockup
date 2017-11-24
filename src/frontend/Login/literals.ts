export default {
  title: 'Login',
  startLogin: 'START',
  instructionsTitle: 'Instructions',
  instructions: [
    'Press the START button',
    'Handle the Iris CAM with the red sticker on upside',
    'Put the Iris CAM in front of your eyes',
    'Observe the white flash light',
    'Wait a moment until the CAM sounds',
    'Leave the CAM and read the feedback message on screen',
    'If the login was successful you will be automatically redirected to the next screen',
    'If the login was unsuccessful read the problems detected, correct them and start again'
  ],
  problemsTitle: 'Problems detected',
  issuesTitle: 'Common issues',
  commonIssues: [
    {
      title: 'Camera upside down',
      description: 'The red sticker must be on upside'
    },
    {
      title: 'Missing eye',
      description: 'Put both eyes in front of the cam. Perhaps the subject has a glass eye or patch.'
    }
  ]
}
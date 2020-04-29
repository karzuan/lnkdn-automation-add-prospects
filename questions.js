module.exports = [
    
    {
    type: 'select',
    name: 'mainMenu',
    message: 'What do we do:',
    choices: [
      { title: 'Log In', value: 'login' },
      { title: 'Check the list', value: 'checklist' },
      { title: 'Specify a message', value: 'message' },
      { title: 'Launch the cycle', value: 'launch' },
      { title: 'Report', value: 'report' },
      { title: 'Exit', value: 'exit' }
    ],
    },
    {
      type: 'text',
      name: 'username',
      message: 'Input username: '
    },
    {
      type: 'password',
      hidden: true,
      name: 'password',
      message: 'Input password'
    }
  ];
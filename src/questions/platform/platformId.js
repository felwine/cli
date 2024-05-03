export default ({
  name: 'platformId',
  type: 'string',
  promptType: 'list',
  alias: 'p',
  defaultValue: 'npm',
  message: "Platform Id",
  choices: [{
    name: 'Medium',
    value: 'medium'
  }, {
    name: 'Dev.to',
    value: 'devto'
  },]
})

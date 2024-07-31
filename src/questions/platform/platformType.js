export default ({
  name: 'platformType',
  type: 'string',
  promptType: 'list',
  alias: 'p',
  defaultValue: 'npm',
  message: "Platform type",
  choices: [{
    name: 'Medium',
    value: 'medium'
  }, {
    name: 'Dev.to',
    value: 'devto'
  },
  {
    name: 'Custom',
    value: 'custom'
  },]
})

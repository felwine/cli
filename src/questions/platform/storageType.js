export default ({
  name: 'storageType',
  type: 'string',
  promptType: 'list',
  defaultValue: 'secret',
  message: "Storage type",
  choices: [{
    name: 'Secret',
    value: 'secret'
  }, {
    name: 'In folder',
    value: 'infolder'
  }]
})

export default ({
  name: 'cloudType',
  type: 'string',
  promptType: 'list',
  alias: 'p',
  defaultValue: 'npm',
  message: "Cloud CDN Type",
  choices: [{
    name: 'minio',
    value: 'minio'
  },]
})

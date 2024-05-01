import ChunkAppContent from '../../lib/chunks/app/content/index.js'

export default ({
  _clinextType: 'command',
  name: 'new',
  position: 0,
  description: `Create a post`,
  questions: [
    {
      name: 'appName',
      type: 'string',
      promptType: 'input',
      alias: 'n',
      defaultValue: 'MyAppName',
      message: 'App name',
      validators: [{ id: 'nonempty', params: { maxParams: 12 } }]
    },
  ],
  example: "$0 app new --appName='MyApp' --adapter='authored'",
  handler: async () => {
    const passed = await ChunkAppContent.ask()
    if (!passed) {
      return
    }

    await ChunkAppContent.write()
  },
})

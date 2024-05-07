
export default ({
  _clinextType: 'command',
  name: 'publish',
  position: 0,
  description: `Publish posts`,
  questions: [
    {
      name: 'destination',
    },
  ],
  example: "$0 publish",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'destination',
      },
    ])


  },
})

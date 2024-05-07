
export default ({
  _clinextType: 'command',
  name: 'unlist',
  position: 0,
  description: `Unlist posts`,
  questions: [
    {
      name: 'destination',
    },
  ],
  example: "$0 unlist",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'destination',
      },
    ])


  },
})

import { platform } from "@felwine/sdk"

export default ({
  _clinextType: "command",
  name: 'list',
  description: 'List project platforms',
  questions: [
    {
      name: 'projectPath',
    },
  ],
  example: "$0 project new",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'projectPath',
      },
    ])

    const platforms = await platform.list({
      path: CliNext.payload.projectPath,
    })

    console.log(platforms ? platforms.map(p => p.id).join(', ') : "No platform found")
  },
})

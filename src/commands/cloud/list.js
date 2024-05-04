import { cloud as cloudOps } from "@felwine/sdk"
// import { cloud as cloudOps } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: "command",
  name: 'list',
  description: 'List project cdns',
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

    const clouds = await cloudOps.list({
      path: CliNext.payload.projectPath,
    })

    console.log(clouds ? clouds.map(p => p.id).join(', ') : "No cloud found")
  },
})

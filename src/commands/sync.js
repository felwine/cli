import { platform, post, cloud as cloudOps } from "@felwine/sdk"
// import { platform, post } from "../../../sdk/src/index.js"

export default ({
  _clinextType: "command",
  name: 'sync',
  description: 'Sync a project to a remote platform.',
  questions: [
    {
      name: 'projectPath',
    },
  ],
  example: "$0 sync",
  handler: async () => {

    await CliNext.prompt.ask([
      {
        name: 'projectPath',
      },
    ])

    let platforms = await platform.list({
      path: CliNext.payload.projectPath,
    })

    let clouds = await cloudOps.list({
      path: CliNext.payload.projectPath,
    })

    if (!clouds) {
      console.log('Please add a cloud CDN host. felwine cloud add')
      return
    }

    const settings = {
      platforms,
      clouds
    }

    await post.update.processPath({
      path: CliNext.payload.projectPath,
      settings
    })
  },
})

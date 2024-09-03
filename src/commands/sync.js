import { platform, post, cloud as cloudOps } from "@felwine/sdk"
// import { platform, post } from "../../../sdk/src/index.js"
import { project } from "@felwine/sdk"

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

    if (!project.isProjectSync({ path: CliNext.payload.projectPath })) {
      console.log('Please choose a project.')
      return
    }

    let platforms = await platform.list({
      path: CliNext.payload.projectPath,
    })

    let clouds = await cloudOps.list({
      path: CliNext.payload.projectPath,
    })

    // console.log('sync: ', "path", CliNext.payload.projectPath,
    //   "clouds", clouds,
    //   "platforms", platforms
    // )

    if (!clouds || !clouds.length) {
      console.log('Please add a cloud CDN host. felwine cloud add')
      return
    }

    if (!platforms || !platforms.length) {
      console.log('Please add a platform. felwine platform add')
      return
    }

    const settings = {
      platforms,
      clouds
    }

    console.log('================')
    console.log('Syncing project ')
    console.log('================')

    await post.update.processPath({
      path: CliNext.payload.projectPath,
      settings
    })

    console.log('================')
    console.log('Finished syncing project ✅')
    console.log('================')

    return true
  },
})

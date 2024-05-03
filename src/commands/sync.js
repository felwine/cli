import { platform, post } from "@felwine/sdk"
// import { platform, post } from "../../../sdk/src/index.js"

export default ({
  _clinextType: "command",
  name: 'sync',
  description: 'Sync a project',
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

    if (platforms) {
      platforms = await Promise.all(platforms.map(async platform => {

        let auth = await CliNext.store.get({
          key: `platform_auth_${platform.id}`,
        })
        if (!auth) {
          return null
        }
        auth = JSON.parse(auth)
        return {
          ...platform,
          auth
        }
      }))
    }

    let cloud = await CliNext.store.get({
      key: `cloud_data`,
    })

    if (!cloud) {
      console.log('Please add a cloud CDN host. felwine cloud add')
      return
    }
    cloud = JSON.parse(cloud)

    const settings = {
      platforms,
      cloud
    }

    await post.update.processPath({
      path: CliNext.payload.projectPath,
      settings
    })
  },
})

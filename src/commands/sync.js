import { platform } from "@felwine/sdk"
// import { platform } from "../../../sdk/src/index.js"

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
    return
    await CliNext.prompt.ask([
      {
        name: 'projectPath',
      },
      {
        name: 'platformId',
      },
      {
        name: 'platformToken',
      },
    ])

    const auth = {
      token: CliNext.payload.platformToken,
    }
    const { isValid, error } = await platform.add({
      path: CliNext.payload.projectPath,
      platform: {
        id: CliNext.payload.platformId,
        auth
      }
    })

    await CliNext.store.save({
      key: `platform_auth_${CliNext.payload.platformId}`,
      value: JSON.stringify(auth)
    })

    const vv = await CliNext.store.get({
      key: `platform_auth_${CliNext.payload.platformId}`,
    })

    if (isValid) {
      console.log(`${CliNext.payload.platformId} has been added`)
    }
    else {
      console.log(`Could not add platform: ${error.message}`)
    }
  },
})

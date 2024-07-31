import { platform } from "@felwine/sdk"
// import { platform } from "../../../../sdk/src/index.js"
export default ({
  _clinextType: "command",
  name: 'add',
  description: 'Add a platform',
  questions: [
    {
      name: 'projectPath',
    },
    {
      name: 'platformType'
    },
    {
      name: 'platformId',
    },
    {
      name: 'platformEndpoint',
    },
    {
      name: 'platformAccessKey',
    },
    {
      name: 'platformSecretKey',
    },
  ],
  example: "$0 platform add",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'projectPath',
      },
      {
        name: 'platformType',
      },
      {
        name: 'platformId',
      }
    ])

    let platformType = CliNext.payload.platformType
    let _platform = {}
    switch (platformType) {
      case 'custom': {
        await CliNext.prompt.ask([
          {
            name: 'platformEndpoint',
          },
          {
            name: 'platformAccessKey',
          },
          {
            name: 'platformSecretKey',
          },
        ])
        _platform = {
          auth: {
            accessKey: CliNext.payload.platformAccessKey,
            secretKey: CliNext.payload.platformSecretKey,
          },
          endPoint: CliNext.payload.platformEndpoint,
        }
        break
      }
      default: {
        await CliNext.prompt.ask([
          {
            name: 'platformToken',
          },
        ])
        _platform = {
          auth: {
            token: CliNext.payload.platformToken,
          },
        }
        break
      }
    }

    const { isValid, error } = await platform.add({
      path: CliNext.payload.projectPath,
      platform: {
        type: CliNext.payload.platformType,
        id: CliNext.payload.platformId,
        ..._platform
      }
    })


    if (isValid) {
      await CliNext.store.save({
        key: `platform_auth_${CliNext.payload.platformType}_${CliNext.payload.platformId}`,
        value: JSON.stringify(_platform.auth)
      })


      console.log(`${CliNext.payload.platformType} has been added`)
    }
    else {
      console.log(`Could not add platform: ${error.message}`)
    }
  },
})

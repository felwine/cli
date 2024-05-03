// import { platform } from "@felwine/sdk"
import { platform } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: "command",
  name: 'add',
  description: 'Add a platform',
  questions: [
    {
      name: 'projectPath',
    },
    {
      name: 'platformId',
    },
    {
      name: 'platformToken',
    },
  ],
  example: "$0 project new",
  handler: async () => {
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

    const { isValid, error } = await platform.add({
      path: CliNext.payload.projectPath,
      platform: {
        id: CliNext.payload.platformId,
        auth: {
          token: CliNext.payload.platformToken,
        }
      }
    })

    if (isValid) {
      console.log(`${CliNext.payload.platformId} has been added`)
    }
    else {
      console.log(`Could not add platform: ${error.message}`)
    }
  },
})

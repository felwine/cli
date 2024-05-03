// import { platform } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: "command",
  name: 'add',
  description: 'Add a cdn',
  questions: [
    {
      name: 'projectPath',
    },
    {
      name: 'cloudType',
    },
    {
      name: 'cloudBucketName',
    },
    {
      name: 'cloudEndPoint',
    },
    {
      name: 'cloudSecretKey',
    },
    {
      name: 'cloudAccessKey',
    },

  ],
  example: "$0 project new",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'projectPath',
      },
      {
        name: 'cloudType',
      },
      {
        name: 'cloudBucketName',
      },
      {
        name: 'cloudEndPoint',
      },
      {
        name: 'cloudSecretKey',
      },
      {
        name: 'cloudAccessKey'
      }
    ])

    const data = {
      type: CliNext.payload.cloudType,
      auth: {
        endPoint: CliNext.payload.cloudEndPoint,
        accessKey: CliNext.payload.cloudAccessKey,
        secretKey: CliNext.payload.cloudSecretKey,
        bucketName: CliNext.payload.cloudBucketName
      }
    }

    await CliNext.store.save({
      key: `cloud_data`,
      value: JSON.stringify(data)
    })

    console.log(`${CliNext.payload.cloudType} has been added`)
  },
})

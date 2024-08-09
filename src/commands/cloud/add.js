// import { cloud as cloudOps } from "../../../../sdk/src/index.js"
import { cloud as cloudOps } from "@felwine/sdk"

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
    {
      name: 'bunnyPullZone',
    },
    {
      name: 'bunnyStorageZoneName',
    },
    // {
    //   name: 'storageType',
    // },
  ],
  example: "$0 cloud new",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'projectPath',
      },
      {
        name: 'cloudType',
      },
    ])

    let cloud = {
      id: CliNext.payload.cloudType,
    }
    switch (CliNext.payload.cloudType) {
      case 'minio': {
        await CliNext.prompt.ask([
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
        cloud = {
          ...cloud,
          auth: {
            endPoint: CliNext.payload.cloudEndPoint,
            accessKey: CliNext.payload.cloudAccessKey,
            secretKey: CliNext.payload.cloudSecretKey,
            bucketName: CliNext.payload.cloudBucketName,
          }
        }
        break
      }
      case 'bunny': {
        await CliNext.prompt.ask([
          {
            name: 'cloudAccessKey',
          },
          {
            name: 'bunnyPullZone',
          },
          {
            name: 'bunnyStorageZoneName',
          },
        ])
        cloud = {
          ...cloud,
          auth: {
            accessKey: CliNext.payload.cloudAccessKey,
            storageZoneName: CliNext.payload.bunnyStorageZoneName,
            pullZone: CliNext.payload.bunnyPullZone,
          }
        }
        break
      }
      default:
        return
    }

    const { isValid, error } = await cloudOps.add({
      path: CliNext.payload.projectPath,
      cloud,
    })

    if (isValid) {
      console.log(`${CliNext.payload.cloudType} has been added`)
    }
    else {
      console.log(`Could not add platform: ${error.message}`)
    }
  },
})

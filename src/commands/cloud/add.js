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

    const cloud = {
      id: CliNext.payload.cloudType,
      auth: {
        endPoint: CliNext.payload.cloudEndPoint,
        accessKey: CliNext.payload.cloudAccessKey,
        secretKey: CliNext.payload.cloudSecretKey,
        bucketName: CliNext.payload.cloudBucketName
      }
    }

    const { isValid, error } = await cloudOps.add({
      path: CliNext.payload.projectPath,
      cloud
    })


    const storeKey = `cloud_data`

    let clouds = await CliNext.store.get({ key: storeKey })
    if (!clouds) {
      clouds = []
    }
    else {
      clouds = JSON.parse(clouds)
    }

    clouds = clouds.filter(a => a.id !== cloud.id)
    clouds.push(cloud)

    await CliNext.store.save({
      key: storeKey,
      value: JSON.stringify(clouds)
    })

    if (isValid) {
      console.log(`${CliNext.payload.cloudType} has been added`)
    }
    else {
      console.log(`Could not add platform: ${error.message}`)
    }
  },
})

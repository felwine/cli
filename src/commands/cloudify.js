import { post } from "@felwine/sdk"
// import { post } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: 'command',
  name: 'cloudify',
  position: 0,
  description: `Cloudify posts`,
  questions: [
    {
      name: 'destination',
    },
  ],
  example: "$0 cloudify",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'destination',
      },
    ])

    await post.cloudify.processPath({
      path: CliNext.payload.destination,
    })

    console.log(`Posts have been cloudified at ${CliNext.payload.destination}`)
  },
})

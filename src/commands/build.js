import { post } from "@felwine/sdk"
// import { post } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: 'command',
  name: 'build',
  position: 0,
  description: `Build posts`,
  questions: [
    {
      name: 'destination',
    },
  ],
  example: "$0 build",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'destination',
      },
    ])

    await post.build.processPath.processPath({
      path: CliNext.payload.destination,
    })

    console.log(`Posts have been built at ${CliNext.payload.destination}`)
  },
})

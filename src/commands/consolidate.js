import { post } from "@felwine/sdk"
// import { post } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: 'command',
  name: 'consolidate',
  position: 0,
  description: `Consolidate posts`,
  questions: [
    {
      name: 'destination',
    },
  ],
  example: "$0 consolidate",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'destination',
      },
    ])

    await post.consolidate.processPath({
      path: CliNext.payload.destination,
    })

    console.log(`Posts have been consolidated at ${CliNext.payload.destination}`)
  },
})

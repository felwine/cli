import { post } from "@felwine/sdk"
// import { post } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: 'command',
  name: 'new',
  position: 0,
  description: `Create a post`,
  questions: [
    {
      name: 'destination',
    },
    {
      name: 'postTitle',
      validators: [{
        id: 'nonempty',
        params: { maxParams: 12 }
      }]
    },
  ],
  example: "$0 post new --postTitle='My post title'",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'postTitle',
      },
      {
        name: 'destination',
      },
    ])

    await post.create({
      title: CliNext.payload.postTitle,
      path: CliNext.payload.destination,
      force: true
    })

    console.log(`${CliNext.payload.postTitle} has been created at ${CliNext.payload.destination}`)
  },
})

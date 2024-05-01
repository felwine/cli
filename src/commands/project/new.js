import { project } from "@felwine/sdk"

export default ({
  _clinextType: "command",
  name: 'new',
  description: 'Create an empty Felwine project ✍️',
  questions: [
    {
      name: 'projectName',
    },
    {
      name: 'destination',
    }
  ],
  example: "$0 project new",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'projectName',
      },
      {
        name: 'destination',
      },
    ])

    await project.newProject.plain({
      name: CliNext.payload.name,
      path: CliNext.payload.destination,
    })
  },
})

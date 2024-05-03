import path from "path"
import chalk from 'chalk'
import isFolderProjectSync from "../../lib/lib/isFolderProjectSync.js"

export default ({
  type: "tranformer",
  modes: ["display"],
  id: "isFolderProject",
  handler: ({ toolbox, input, item }) => {
    if (!input || !input.length) {
      return input
    }

    const name = input.split(path.sep).pop()
    const isServable = isFolderProjectSync(input)
    return isServable ? `${chalk.underline(name)} 🐻` : `${name}`
  }
})

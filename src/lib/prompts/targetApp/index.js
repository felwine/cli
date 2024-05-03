/*---------------------------------------------------------
 * Copyright (C) Felwine Community. All rights reserved.
 *--------------------------------------------------------*/
import chalk from "chalk"
import isFolderProject from "./lib/isFolderProject.js"
import isFolderProjectSync from "./lib/isFolderProjectSync.js"
import getServablePackage from "./lib/getServablePackage.js"
import path from "path"
import askForGeneric from "../utils/askForGeneric.js"

export default async (props) => {
  const { toolbox, payload, } = props

  let value = toolbox.options['targetApp']
  if (value) {
    payload.targetApp = value
    return
  }

  // payload.targetApp = 'standalone'

  if (toolbox.options['quick']) {
    return
  }

  const originalDestinationPath = toolbox.originalDestinationPath

  if (await isFolderProject(originalDestinationPath)) {
    const config = await getServablePackage(originalDestinationPath)
    payload.desiredWriteDestinationPathAbsolute = originalDestinationPath
    payload.desiredWriteDestinationPath = payload.desiredWriteDestinationPathAbsolute.split(path.sep).pop()

    toolbox.log(chalk.italic(`→ No app choice required. The feature will be added felwine app in the current folder (${payload.appName}).\n`))
    return
  }

  toolbox.ui.drawSectionHeader({
    toolbox,
    title: `App choice 🚀`,
    subTitle: `Choose the app you want to add a feature to.`
  })

  await askForGeneric({
    ...props, options: {
      ...props.options,
      type: "file-tree-selection",
      name: "desiredWriteDestinationPathAbsolute",
      message: "Choose a felwine app",
      onlyShowDir: true,
      root: originalDestinationPath,
      onlyShowValid: true,
      hideRoot: true,
      // onlyShowValid: true,
      // validate: name => {
      //     return (name && name.length && !['.'].includes(name[0]))
      // }
      validate: (name,) => {
        if (!name || !name.length) {
          return false
        }
        const isServable = isFolderProjectSync(name)
        return isServable
      },
      transformer: (name,) => {
        if (!name || !name.length) {
          return name
        }

        const _name = name.split(path.sep).pop()
        //const isServable = (_name && _name.length && !['.'].includes(_name[0]))
        const isServable = isFolderProjectSync(name)
        return isServable ? `${_name} (Felwine project) ` : `${_name} ('N/A')`
      }
    }
  })

  payload.desiredWriteDestinationPath = payload.desiredWriteDestinationPathAbsolute.split(path.sep).pop()

}

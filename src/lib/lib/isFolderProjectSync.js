import { project } from "@felwine/sdk"

export default (folder) => {
  return project.isProjectsync({ path: folder })
}

import { project } from "@felwine/sdk"

export default async (folder) => {
  return project.isProject({ path: folder })
}

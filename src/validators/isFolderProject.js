import isFolderProjectSync from '../lib/lib/isFolderProjectSync.js'

export default ({
  id: "isFolderProject",
  handler: async ({ input, params }) => {
    return {
      isValid: input ? isFolderProjectSync(input) : false,
      message: 'Not a feature folder'
    }
  }
})

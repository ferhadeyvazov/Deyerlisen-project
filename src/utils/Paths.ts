import path from "path"
const allPaths = [
      {
        find: '@', 
        replacement: path.resolve(__dirname, './src')
      },
      {
        find: '@utils', 
        replacement: path.resolve(__dirname, './src/utils')
      },
      {
        find: '@components', 
        replacement: path.resolve(__dirname, './src/components')
      },
      {
        find: '@pages', 
        replacement: path.resolve(__dirname, './src/pages')
      },
      {
        find: '@layouts', 
        replacement: path.resolve(__dirname, './src/layouts')
      },
      {
        find: '@ui', 
        replacement: path.resolve(__dirname, './src/ui')
      }
]

export default allPaths
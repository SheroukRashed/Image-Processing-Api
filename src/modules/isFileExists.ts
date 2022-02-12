import fs from 'fs'

const isFileExists = (filename: string): boolean => {
  try {
    if (fs.readFileSync(filename)) {
      return true
    }
  } catch (error) {
    console.error(`Error while checking file existence : ${error}`)
  }
  return false
}

export default isFileExists

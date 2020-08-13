import fs from 'fs'

function ls() {
  return fs.readdirSync(process.cwd())
}

export { ls }

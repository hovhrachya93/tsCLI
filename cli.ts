#!/usr/bin/env node
import chalk from 'chalk'
import * as fs from 'fs'

const [, , ...args] = process.argv
const command: string = args[0]
const path: string = `./${args[1]}`
const text = args
text.shift()

if (command == 'read') {
    const fileName: string = fs.readFileSync(path, 'utf-8')
    console.log(chalk.green('your response'), chalk.bgRgb(15, 100, 204).inverse(fileName))
}

else if (command == 'write') {
    const fileName = path
    fs.writeFileSync(fileName, text)
    console.log(chalk.yellow('you write in new file->'), chalk.hwb(32, 0, 50)(fs.readFileSync(fileName, 'utf-8')))
}

else if (command == 'delete') {
    try {
        fs.unlinkSync(path)
    } catch (err) {
        console.error(err)
    }
}

else {
    console.log(chalk.red("OOPS :)"))
}




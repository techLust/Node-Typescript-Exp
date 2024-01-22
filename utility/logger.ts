import * as fs from 'fs';

export const customLogger = () => {
    return {
        info: (message: string) => {
            const date = new Date
            fs.writeFile(`${__dirname}/../logs/app.log`, `${date.toString()}:${message}`, (err) => {
                if (err) console.log(err)
            })
        },
        warn: (message: string) => {
            const date = new Date
            fs.writeFile('/logs/app.log', `${date.toString()}:${message}`, (err) => {
                if (err) console.log(err)
            })
        },
        error: (message: string) => {
            const date = new Date
            fs.writeFile('/logs/error.log', `${date.toString()}:${message}`, (err) => {
                if (err) console.log(err)
            })
        }
    }
}


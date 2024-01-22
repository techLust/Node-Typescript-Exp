import * as fs from "fs";
import { User } from "../interfaces/interface";

const fileName: string = './userDB.json'

const createJsonFile = (): boolean => {
    if (fs.existsSync(fileName)) {
        try {
            const userFile = file.read()
            return true;
        } catch (error) {
            file.write([])
        }
    } else {
        file.write([])
    }
    return true;
};

const fileSys = (fileName: string) => {
    return {
        read: () => {
            const data = JSON.parse(fs.readFileSync(fileName, 'utf-8'))
            if (!data) return []
            return data
        },
        write: (data: User[]) => {
            const userData = JSON.stringify(data, null, 4)
            fs.writeFileSync(fileName, userData)
            return data
        }
    }
}

const file = fileSys(fileName)

export {
    createJsonFile,
    file,
}
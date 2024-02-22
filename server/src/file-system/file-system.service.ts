import { Injectable } from '@nestjs/common';
import { join } from "path";
import * as fs from "fs";

@Injectable()
export class FileSystemService {

    constructor() {}

    appendFileSync(filePath: string, fileChunk: Buffer){
        fs.appendFileSync(filePath, fileChunk);
    }

    readFileSync(filePath: string) {
        try {
            return fs.readFileSync(filePath);
        }
        catch (error) {
            console.log(error)
        }
    }

    writeFileSync(filePath: string, data: string){
        try {
            return fs.writeFileSync(filePath, data);
        }
        catch (error) {
            console.log(error)
        }
    }

    joinPath(pathParts: string[]){
        try {
            return join(...pathParts);
        } catch (error) {
            console.log(error)
        }
    }

    deleteFileSync(filePath: string){
        try {
            fs.unlinkSync(filePath);
        } catch (error) {
            console.log(error)
        }
    }

}

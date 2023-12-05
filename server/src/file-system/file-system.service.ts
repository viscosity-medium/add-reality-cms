import {Injectable} from '@nestjs/common';
import * as fs from "fs";
import {join} from "path";

@Injectable()
export class FileSystemService {

    constructor() {}

    appendFileSync(filePath: string, fileChunk: Buffer){
        fs.appendFileSync(filePath, fileChunk);
    }

    readFileSync(filePath: string) {
        return fs.readFileSync(filePath);
    }

    writeFileSync(filePath: string, data: string){
        return fs.writeFileSync(filePath, data);
    }

    joinPath(pathParts: string[]){
        return join(...pathParts);
    }

}

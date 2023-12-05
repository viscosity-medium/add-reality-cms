import {AxiosApi} from "./axiosInstance";
import {UploadFileByChunks} from "./types/fileTransferApiService";

class FileTransferApiService extends AxiosApi {

    async uploadFileChunk({chunk, metadata}: UploadFileByChunks){

            let formData = new FormData();
            const stringedMataData = new Blob([JSON.stringify(metadata)], {type : 'application/json'})
            formData.append("fileChunk", chunk);
            formData.append("metadata", stringedMataData);

            try {
                await this.axiosFormDataInstance.post(
                    `/files-transfer/upload-file-chunk`,
                    formData
                );
            }
            catch(err){
                console.log(err)
            }


    }

    async getStoreFiles(){

        try {
            // await this.axiosJsonInstance.get(
            //     `/files-transfer/get-store-files`,
            // );
        }
        catch(err){
            console.log(err)
        }


    }

}

export const fileTransferApiService = new FileTransferApiService();
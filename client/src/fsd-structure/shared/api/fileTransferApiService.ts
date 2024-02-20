import {AxiosApi} from "./axiosInstance";
import {UploadFileByChunks} from "./types/fileTransferApiService";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import {PlayerDataProps} from "@/fsd-structure/widgets/InformationView/types/InformationView";

class FileTransferApiService extends AxiosApi {

    async uploadFileChunk({chunk, metadata}: UploadFileByChunks){

            let formData = new FormData();
            const stringedMataData = new Blob([JSON.stringify(metadata)], {type : 'application/json'})
            formData.append("fileChunk", chunk);
            formData.append("metadata", stringedMataData);

            try {
                return await this.axiosFormDataInstance.post<StoreFileProps[]>(
                    `/files-transfer/upload-file-chunk`,
                    formData
                );
            }
            catch(err){
                console.log(err)
            }


    }

    async getDatabaseData(){

        try {
            return await this.axiosJsonInstance.get(
                `/files-transfer/get-database-data`,
            );
        }
        catch(err){
            console.log(err)
        }


    }

    async updateStoreFiles(storeFiles: StoreFileProps[]){
        try {
            return await this.axiosJsonInstance.patch(
                "/files-transfer/update-store-files",
                storeFiles
            )
        }
        catch(err){
            console.log(err)
        }
    }

    async updatePlayerContent(playerData: PlayerDataProps){
        try {
            return await this.axiosJsonInstance.patch(
                "/files-transfer/update-player-content",
                playerData
            )
        }
        catch(err){
            console.log(err)
        }
    }

    async registerNewPlayer(playerData: PlayerDataProps){
        try {
            return await this.axiosJsonInstance.patch("/files-transfer/register-new-player", playerData);
        } catch (err){
            console.log(err);
        }
    }

    async deletePlayer(playerData: PlayerDataProps){
        try {
            return await this.axiosJsonInstance.patch("/files-transfer/delete-player", playerData);
        } catch (err){
            console.log(err);
        }
    }

}

export const fileTransferApiService = new FileTransferApiService();
import {PlayerData, StoreFileProps} from "../json-database/dto/json-database.dto";

export const generateXmlUtility = (xmlContent: string) => {
return(
`<Offer>
    <pics>${xmlContent}
    </pics>
</Offer>`
)
}

export const generateXmlContentFillingUtility = (playerData: PlayerData) => {
return playerData.content.reduce((accumulator: string, currentContentItem: StoreFileProps) => {

return (
    `${accumulator}
        <pic>${
        currentContentItem.src.replace(
            /http:\\localhost:3002\\static\\media/, 
            "C:\\Users\\evgen\\Desktop\\Job\\Web\\digisky\\addreality-cms\\server\\static\\media")
        }</pic>`
)

}, "")};
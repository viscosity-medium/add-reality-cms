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
        currentContentItem.src
            .replace(/:\\+|:\/+/, "://")
            .replace(/\\/gm, "/")
        }</pic>`
)

}, "")};
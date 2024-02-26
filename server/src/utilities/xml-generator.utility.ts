import {PlayerData, StoreFileProps} from "../json-database/dto/json-database.dto";

export const xmlGeneratorUtility = (xmlContent: string) => {
return(
`<ContentContainer>
    <CurrentContent>
        ${xmlContent}
    </CurrentContent>
</ContentContainer>`
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
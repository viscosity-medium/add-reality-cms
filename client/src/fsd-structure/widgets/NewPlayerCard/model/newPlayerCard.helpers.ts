import {PlayerData} from "@/fsd-structure/widgets/InformationView/types/InformationView";

export const generateNewXmlId = (playersList: PlayerData[]) => {

    const lastXmlId = playersList.reduce((accumulator, currentValue) => {
        const xmlId = +(currentValue.xml.replace(/\.xml/,""));
        return xmlId > accumulator ? xmlId : accumulator;
    }, 0);

    const currentXmlId = lastXmlId + 1;

    if(currentXmlId === 0) {
        return "00001.xml"
    } else {

        const stringedXmlId = currentXmlId.toString();
        const xmlIdLength = stringedXmlId.length;
        const negativeLength = 5 - xmlIdLength > 0 ? 5 - xmlIdLength : 0;
        const newXmlId = `${ "0".repeat(negativeLength) }${ stringedXmlId }.xml`;

        return newXmlId;
    }
}
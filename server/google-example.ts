const { google } = require("googleapis");
//
const NodeGoogleSheets = (
    file,
    spreadsheetId,
    keyMass,
    fun
) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: file,
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    //
    (async () => {
        const client = await auth.getClient();
        //
        const googleSheets = google.sheets({ version: "v4", auth: client });
        //
        const data = {
            auth,
            spreadsheetId,
            valueInputOption: "USER_ENTERED",
            resource: {
                values: keyMass.change,
            },
        }
        //
        if(keyMass.append) {
            data['range'] = keyMass.append;
            //
            const append = await googleSheets.spreadsheets.values.append(data);
            //
            fun(append);
        } else if(keyMass.values) {
            data['range'] = keyMass.values;
            //
            delete data.valueInputOption; delete data.resource;
            //
            const values = await googleSheets.spreadsheets.values.get(data);
            //
            fun(values);
        } else if(keyMass.update) {
            data['range'] = keyMass.update;
            //
            const update = await googleSheets.spreadsheets.values.update(data);
            //
            fun(update);
        }
    })();
}
//
NodeGoogleSheets(
    'google-credentials.json',
    '1nP95yRaykqANskH7YSXKTYt5-0ibgserSU6WrPNsVSM',
    {
        append: 'main',
        change: [['Привет', 'Как дела?']]
    },
    (data) => {
    console.log(data);
})
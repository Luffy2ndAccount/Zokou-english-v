const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZUN0NyN2NzdklHMUY3b2tnKzh2VmlUelluYVJhdm4vcDlUR2xneDduND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzFTK215V2t3RU9kYXpGdVJickdOalQ4Qy9yem9JZWJtQUxJWWpXZG13ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSi9BbEZERVB5a0lhVWVVOEl0Y21UYU9PemwyenlZcVJZYzNWLzcxN25jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0NlArTmVtakRkQTVtMkMyL0duTmYvNG50QzdTTVpiYjdaR0hGVWpHakZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGSjBpSUl3amUwTmdaek1yUHRib2FIY09FVlJwejhmUEtBdmhqRkpqV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJDdVpEY093STZkNVYxL2dUVjZ1MGVmOVpTQm1BcWNpeVNURlpDcXRrVmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BkY2VwMmNZaTZ6RDR2UXd3NnZlaTVjMEMza1ljd1hQMm9hTTZMSzBrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3BpVUFIYVZDcmZtazhWOXdXVlhuMllXS3BTaG9yZVR3d0xNQkZMQUdrTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwxUHh2WUZXaU11cWpkWER5K1hCdHB1M1RkVGM1aHd2Q2VnTnNUelR2L3Zmb3JJd0lUVzQyTlNLcnBTdlhxQTh2VkVsblVwS2libEIweG1oVy8zR0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6ImFTcnh6MEdQMkJ6Ymo3RUtuVXZYZ0pBZUZsU2Qxck1NYkJ1QWNMbjV1bEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3NjU1MjczNzgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQjA5NjZCMjZEMTk2QzFBRTFCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIxMDg0Mzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlQ2ejJPRTVrVE0tSXR1RVFHblJhamciLCJwaG9uZUlkIjoiMTE1NjdlZGItMWJlOS00OThmLTg2OTgtY2YzYWQyMWU5Nzk4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdaaUNzbUI1NWpvS0FWaW9uKzVuRVFTWGRMdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZVpSOU1qZUNLM0pIQytDSHROcVFkUUIvb2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOTQ2WUhXVksiLCJsYXN0UHJvcEhhc2giOiIxeWhJUkEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sIm1lIjp7ImlkIjoiMjM3NjU1MjczNzgyOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44K044K444On44O744K144OI44OrIFh1MyIsImxpZCI6IjEyNTQ3MzY5NDcxNjEyNjoxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGFjenVJSkVJeVVsYlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkJVajNKMmVXamt5T2xlVjlBK2ZIK0ZOKzVoYW5ITldrZWVTUFhHNW1tTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTW1ad05OdExRRVhVOUJFcGtnT3FQOUJ2YnFTcDlMcVhtamgxWEZrQk9PRy93TGR0ZXo3OVpTenI2c2RXS05TeHVUYjVLZ0hNeFpHRlE4ZW4wdmlPZ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Im1RNHVIeDlrZFp5dHcyaU5udWJ3NHJtRFl1b0ZXbHQxdzVXcGVNVld5eXlyTG9ZQmJNakdNdG9KZk42TitISW9reEZjOXdXTmdxZ1NGU256ZVpnb0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjU1MjczNzgyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlFWSTl5ZG5sbzVNanBYbGZRUG54L2hUZnVZV3B4elZwSG5rajF4dVpwaiJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjEwODQzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBbkoifQ==',
    PREFIXE: process.env.PREFIX || "#",
    OWNER_NAME: process.env.OWNER_NAME || "𝚩𝐋𝚫𝐂𝐊 𝐋𝚵𝐆𝚫𝐂𝐘",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "237655273782",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || '𝚩𝐋𝚫𝐂𝐊 𝐋𝚵𝐆𝚫𝐂𝐘',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/288b9ce52fe1b6dc9e732.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

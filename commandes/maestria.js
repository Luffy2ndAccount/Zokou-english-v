const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: ‘fiche🍃',
        categorie: '🍃𝕄𝔸𝔼𝕊𝕋ℝ𝕀𝔸🍃'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/3ab22962729d84870ef72.jpg';
            const msg = `三 𝐌𝐀𝐄𝐒𝐓𝐑𝐈𝐀 𝐑𝐏𝐕𝐄𝐑𝐒𝐄 三 
. . . . . ──𝙵𝚒𝚌𝚑𝚎 𝚍'𝚒𝚗𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗── . . . . .
*• Nom et Prénom:*
*• Âge et Sexe :*
*• Pseudo :*
*• Classe :*
*• Type de mage :* *•Rang :*
*•Spécialisation magique :* 
════════════════
🖇️ *Inventaire (cela inclut tout ce que vous portez sur vous):*
- 🔒
- 🔒
- 🔒
- 🔒
- 🔒
*❒ technique (Vous bénéficiez de deux sorts au fur et à mesure que vous évoluez):*
╔═━────━▒ ۞ ▒━────━═╗ 
*Stars⭐:*

*🖇️Mineur (2 sorts et explications de ceux ci)*

∅

∅
❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
*Raisaing Stars🦠*
*Moyen:* 🔏

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
*Ultimate🌋*
*Majeur:*🔏

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒

*●STATISTIQUES (Répartissez 8000TC pour débuter):*
*La répartition ne dépends que de vous et n'est effectué que par vous.*
*•🤸 Agilité :* 
*•💨 Vitesse :* 
*• 💪  Force :* 
*• 🔮 Magie:*
*• ❤️ Vie:*
*•🕯️Stamina:*
╔═━────━▒ ۞ ▒━────━═╗`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
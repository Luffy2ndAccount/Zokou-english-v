const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'fiche🍃',
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


zokou(
    {
        nomCom: 'guide🍃',
        categorie: '🍃𝕄𝔸𝔼𝕊𝕋ℝ𝕀𝔸🍃'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/3ab22962729d84870ef72.jpg';
            const msg = `Remplissage Fiche.

▪️ Remplissez votre fiche comme il se doit et faites les choses simples svp. Pas de sort compliqué que vous ne maîtrisez même pas. Vous n'êtes pas limité en sort. Vos sorts seront infinis tant que vous évoluerez dans ce monde. Mais comment obtenir davantage de sorts ? Voilà la véritable question 
▪️La fiche indique que vous avez droit 2 sorts distinctifs par niveau de technique du plus petit au plus grand.  Tout est sur la fiche. Donc vous pouvez avoir 2 sorts mineurs si vous voulez . Mais comment utiliser ?
♦️Pour un sort Mineur n'importe quel Participants de Niveau faible ou plus peut le faire.
♦️Pour les sorts moyens il faut être Niv C minimum voir plus pour pouvoir les utiliser. 
♦️Pour le sort majeur il faut être au moins Niveau B où B+ jusqu'à supérieur pour pouvoir l'utiliser. 
▪️Pour vos mana le système est pareil. Plus vous faites évoluer plus votre mana grandit et votre puissance aussi.
▪️Pour les aptitudes , au départ vous avez 8000 TC à partager.
▪️Points gagnés (PG) vous permet d'augmenter vos aptitudes aux combats qui seront cruciales aussi pendant les quêtes. Les joyaux représentent votre argent en poche. Les ressources c'est la valeur des objets que vous pouvez vendre ou échanger dans la boutique ou entre vous même les participants. 
▪️Il y aura des quêtes ou vous serez récompensé si vous survivez 

Remplissez sagement vos fiches ✨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'rmd🍃',
        categorie: '🍃𝕄𝔸𝔼𝕊𝕋ℝ𝕀𝔸🍃'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/3ab22962729d84870ef72.jpg';
            const msg = `═══════𝐌𝐀𝐄𝐒𝐓𝐑𝐈𝐀🍃 𝐑𝐏𝐕𝐄𝐑𝐒𝐄══════
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

❄️ `Conclusion:`


❄️ `Mot de fin:`


❄️ `CM:`

═══════❄️══════
*SCORE⚕️:*
*MODO⚕️:*
*ARENA⚕️:*
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
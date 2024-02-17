const { Client, Intents, GatewayIntentBits, Embedbuilder, } = require('discord.js');

// rajoute les commandess pour que je puisse check les messages
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        ]
});

// token du bot
const TOKEN = 'ptdr';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    // verifie si ca vient de bathbot
    if (message.author.id === '297073686916366336') {
        if (message.embeds.length > 0) {
            // parcours tous les embeds du message
            message.embeds.forEach(embed => {
                // recupere les info de l'embed
                const author = embed.author;
                // compare l'auteur de l'embed avec l'url que je veux
                if (embed.author && embed.author.url === 'https://osu.ppy.sh/users/12280995/osu') {
                    message.react('🎁');
                }
            });
    }
}});

// owobot check
client.on('messageCreate', message2 => {
    if (message2.author.id === '289066747443675143') {
        if (message2.content.includes('MwaCestTom')) {
            message2.react('🎁');
        }
    }
});

client.on('messageCreate', message3 => {
    // verifie si ca bien de bathbot
    if (message3.author.id === '297073686916366336') {
        if (message3.embeds.length > 0) {
            // parcours tous les embeds du message
            message3.embeds.forEach(embed => {
                // recupere les info de l'embed
                const author = embed.author;
                // compare l'auteur de l'embed avec l'url que je veux
                if (embed.author && embed.author.url === 'https://osu.ppy.sh/users/16420104/osu') {
                    message3.react('🇪');
                    message3.react('🇲');
                    message3.react('🇴');
                }
            });
    }
}});

// owobot check
client.on('messageCreate', message4 => {
    if (message4.author.id === '289066747443675143') {
        if (message4.content.includes('Mimil')) {
            message4.react('🇪');
            message4.react('🇲');
            message4.react('🇴');
        }
    }
});

client.login(TOKEN);


 /*         Récupère les différentes informations de l'embed
            const title = embed.title;
            const description = embed.description;
            const url = embed.url;
            const timestamp = embed.timestamp;
            const color = embed.color;
            const author = embed.author;
            const fields = embed.fields;
            const footer = embed.footer;

            // Affiche les informations récupérées dans la console
            console.log("Titre de l'embed:", title);
            console.log("Description de l'embed:", description);
            console.log("URL de l'embed:", url);
            console.log("Timestamp de l'embed:", timestamp);
            console.log("Couleur de l'embed:", color);
            console.log("Auteur de l'embed:", author);
            console.log("Champs de l'embed:", fields);
            console.log("Pied de page de l'embed:", footer);
*/


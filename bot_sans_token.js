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

const reactions = new Map();

client.on('messageCreate', message => {
    // vérifie le prefix et regarde si c'est moi l'executeur de la commande
    if (message.author.id === '380395540208418818' && message.content.startsWith('!')) {
        // separe la commande et les arguments
        const args = message.content.slice(1).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        // verifie la commande
        if (command === 'react') {
            // verifie si la commande est bonne
            if (args.length !== 2) {
                return message.reply("Utilisation : `!react <URL> <réaction>`");
            }

            const url = args[0];
            const reaction = args[1];

            // ajoute url et reaction
            reactions.set(url, reaction);
            message.reply(`Réaction ${reaction} ajoutée pour l'URL ${url}`);
        }
    }
});


client.on('messageCreate', message => {
    // Vérifie si le message est un embed et s'il correspond à une URL dans la collection
    if (message.embeds.length > 0) {
        message.embeds.forEach(embed => {
            if (embed.author && reactions.has(embed.author.url)) {
                const reaction = reactions.get(embed.author.url);
                message.react(reaction)
                    .catch(console.error);
            }
        });
    }
});

client.on('messageCreate', message => {
    if (message.author.id === '380395540208418818' && message.content.startsWith('!')) {
        const args = message.content.slice(1).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'removelink') {
            if (args.length !== 1) {
                return message.reply("Utilisation : `!removelink <URL>`");
            }

            const urlToRemove = args[0];

            // verifie si le lien existe et le supprime si oui
            if (reactions.has(urlToRemove)) {
                reactions.delete(urlToRemove);
                message.reply(`Lien ${urlToRemove} supprimé avec succès.`);
            } else {
                message.reply(`Lien ${urlToRemove} non trouvé.`);
            }
        } else if (command === 'removereaction') {
            if (args.length !== 1) {
                return message.reply("Utilisation : `!removereaction <URL>`");
            }

            const urlToRemove = args[0];

            // supprime les reac
            if (reactions.has(urlToRemove)) {
                reactions.delete(urlToRemove);
                message.reply(`Réactions pour ${urlToRemove} supprimées avec succès.`);
            } else {
                message.reply(`Aucune réaction trouvée pour ${urlToRemove}.`);
            }
        }
    }
    else if (message.content.startsWith('!')) {
        return message.reply("ratio");
    }
});



// mimil taguele
client.on('messageCreate', message4 => {
    if (message4.author.id === '597519943805960202') {
        const channel = message4.channel;
        if (    
        message4.content.includes('compétences') || 
        message4.content.includes('compétence') ||
        message4.content.includes('competences') || 
        message4.content.includes('competence')) {;
        channel.send('ta guele emo de merde');
        }
    }
});


client.login(TOKEN);


 /*          Récupère les différentes informations de l'embed
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


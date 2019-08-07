const {
    Client
} = require('discord.js');
const {
    toSay,
    token,
    max,
    min
} = require('./Config');

const client = new Client({
    restTimeOffset: 0
});

const channels = [];

const sleep = (ms) => {
    return new Promise((res, rej) => {
        setTimeout(res, ms * 1000);
    })
}

client.on('ready', async () => {
    let iRand;

    setInterval(() => {
        iRand = (Math.round(Math.random() * (+max - +min)) + +min) * 1000;
    }, (max - min) - 100);

    console.log(`${client.user.username}, ready for service. Serving ${client.guilds.size} servers!`);

    await sleep(1);

    setInterval(() => {
        const cRand = Math.floor(Math.random() * channels.length);
        const channel = channels[cRand];
        const message = toSay[Math.floor(Math.random() * toSay.length)];

        if (!message || !channel) {
            toLog = (!channel) ?
                'No channels are in the list. Channels will be added when someone sends a message in one.' :
                'No messages are in toSay in Config.js. I need at least one to work.';
            return console.log(toLog)
        } else {
            channel.send(message);

            return console.log(`After ${iRand / 1000} seconds, I sent '${message}' to #${channel.name}.`);
        };
    }, iRand);
});

client.on('message', async msg => {
    if (msg.channel.type === 'dm') return;

    if (channels.includes(msg.channel)) return;

    else {
        channels.push(msg.channel);
        return console.log(`Added ${msg.guild.name}/#${msg.channel.name} to the list of channels.`);
    };
})

client.login(token);
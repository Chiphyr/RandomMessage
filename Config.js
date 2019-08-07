let Config = {
    token: '', // the bot/user token
    prefix: 'randommessage!', // the prefix to be used for the eval command
    maintainers: ['', ''], // a list of user ids, people in here can use the eval command
    
    max: '10', // max interval time in seconds
    min: '6', // minimum interval time in seconds

    toSay: [
        'test',
        'test2',
        'test3'
    ]
    // ^ list of things to say
};

module.exports = Config;
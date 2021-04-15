const client = require('../../src/index'); //Developed By CryonicX
client.on('ready', () => {
    client.user.setStatus("online");
    client.user.setActivity('Developed by CryonicX!')
    console.log(`${client.user.tag} Bot Giriş Yaptı!`);
})
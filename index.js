'use strict';

const Constants = require('./src/util/Constants');

module.exports = {
    Client: require('./src/Client'),
    
    version: require('./package.json').version,

    // Structures
    Chat: require('./src/structures/Chat'),
    PrivateChat: require('./src/structures/PrivateChat'),
    GroupChat: require('./src/structures/GroupChat'),
    Channel: require('./src/structures/Channel'),
    Message: require('./src/structures/Message'),
    MessageMedia: require('./src/structures/MessageMedia'),
    Contact: require('./src/structures/Contact'),
    PrivateContact: require('./src/structures/PrivateContact'),
    BusinessContact: require('./src/structures/BusinessContact'),
    ClientInfo: require('./src/structures/ClientInfo'),
    Location: require('./src/structures/Location'),
    Poll: require('./src/structures/Poll'),
    ProductMetadata: require('./src/structures/ProductMetadata'),
    List: require('./src/structures/List'),
    Buttons: require('./src/structures/Buttons'),
    Broadcast: require('./src/structures/Broadcast'),
    
    // Auth Strategies
    NoAuth: require('./src/authStrategies/NoAuth'),
    LocalAuth: require('./src/authStrategies/LocalAuth'),
    RemoteAuth: require('./src/authStrategies/RemoteAuth'),
    
    ...Constants

    හරි! මෙන්න ඔයාලටම ගිහින් customize කරගන්න පුළුවන් *Basic WhatsApp Bot* එකක full code එක:

---

📁 `index.js` (Main Bot File)

```js
const { Client, Buttons, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('📲 QR Scan කරන්න');
});

client.on('ready', () => {
    console.log('🤖 Bot is Ready!');
});

client.on('message', async msg => {
    const { body, from } = msg;

    if (body === '.alive') {
        let image = fs.readFileSync('https://i.ibb.co/SX5N81P0/SulaMd.jpg'); // put image in same folder
        await client.sendMessage(from, new Buttons(
            '🧚‍♂️⃟🩵 " 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃" 🧚‍♂️⃟🩵\n\n👋 *HI*,  😎\n\n✅ *I am Alive Now!*',
            [
                { body: '.menu' },
                { body: '.ping' },
                { body: '.owner' }
            ],
            '🤖 Bot Menu'
        ), { media: image });
    }

    if (body === '.menu') {
        await msg.reply('📜 Menu:\n1. .alive\n2. .ping\n3. .owner');
    }

    if (body === '.ping') {
        await msg.reply('🏓 Bot is active!');
    }

    if (body === '.owner') {
    await msg.reply('👤 Owner: +94766351670');
    }
});

client.initialize();

```

//---

//📦 Terminal එකේ Commands:

//```bash
//npm init -y
//npm install whatsapp-web.js qrcode-terminal
//```

//---

//📁 `alive.jpg` කියන file එක bot එකට image එකක් ලෙස upload කරන්න (same folder).

//*දැනට run කරන්න පුළුවං. QR Code එක scan කරල WhatsApp එකට connect වෙනවා.*

//ඔයාට මෙකට *extra features* එහෙමත් ඕනේද?
};

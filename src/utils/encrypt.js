const bcrypt = require('bcryptjs');
const saltRounds = 10;

require('dotenv').config();

async function encrypt(text) {
    const hash = await bcrypt.hash(text, saltRounds);
    return hash;
}

async function decrypt(text, hash) {
    const match = await bcrypt.compare(text, hash);
    return match;
}

module.exports = { encrypt, decrypt };
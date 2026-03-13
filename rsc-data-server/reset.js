const bcrypt = require('bcryptjs');
const db = require('better-sqlite3')('./rsc-data-server.sqlite');

bcrypt.hash('12345', 10).then(hash => {
    console.log('Generated hash:', hash);
    const result = db.prepare('UPDATE players SET password = ? WHERE username = ?').run(hash, '1');
    console.log('Update result:', result);
    console.log('Saved:', db.prepare('SELECT username, password FROM players WHERE username = ?').get('1'));
});
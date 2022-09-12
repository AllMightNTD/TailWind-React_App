const moogoose = require('mongoose');

async function connect() {
    try {
        await moogoose.connect('mongodb://127.0.0.1:27017/Film_Dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully');
    } catch (error) {
        console.log(error.message);
    }
}
// export nó ra ngoài
module.exports = { connect };

const mongoose = require('mongoose');

const connectdatabase = () => {
        mongoose.connect(process.env.DB_url).then((con)=>{
            console.log('mongodb connected at host:'+con.connection.host)
        })

};

module.exports = connectdatabase ;
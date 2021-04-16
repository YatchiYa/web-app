
const db = require('./db-info')
/*
ii12562


const mongoose_db =  'mongodb+srv://' + db.username + ':' + db.password + '@' + 
                        db.cluster + '-2b8o3.mongodb.net/test?retryWrites=true&w=majority'

*/

// skybreaker
const mongoose_db =  'mongodb+srv://' + db.username + ':' + db.password + '@' + 
                        db.cluster + '-gcpvn.mongodb.net/test?retryWrites=true&w=majority'

module.exports = {
    mongoose_db
}
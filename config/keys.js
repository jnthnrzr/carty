const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

module.exports = {
    mongoURI: `mongodb://${username}:${password}@ds161183.mlab.com:61183/jr_mern_shopping_list`
};
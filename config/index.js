var configValues =require("./config.json");

module.exports ={
    getDbConectionString :function () {
        return `mongodb+srv://${configValues.username}:${configValues.password}@kimkun.wvzeg.azure.mongodb.net/${configValues.db}?retryWrites=true&w=majority`;
    }
}
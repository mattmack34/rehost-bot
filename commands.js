const fs = require('fs');

module.exports = {
    async add() {
        var curFileJSON = fs.readFileSync('rehost.json');
        var fileDataObject = JSON.parse(curFileJSON);
        fileDataObject.rehostNum += 1;
        fs.writeFile("rehost.json", JSON.stringify(fileDataObject), err => {
            if(err) throw err;
        });
        return fileDataObject.rehostNum;
    },

    async rm(){
        var curFileJSON = fs.readFileSync('rehost.json');
        var fileDataObject = JSON.parse(curFileJSON);
        if (fileDataObject.rehostNum > 0) {
            fileDataObject.rehostNum -= 1;
        }
        fs.writeFile("rehost.json", JSON.stringify(fileDataObject), err => {
            if(err) throw err;
        });
        return fileDataObject.rehostNum;
    },

    async clear() {
        var curFileJSON = fs.readFileSync('rehost.json');
        var fileDataObject = JSON.parse(curFileJSON);
        fileDataObject.rehostNum = 0;
        fs.writeFile("rehost.json", JSON.stringify(fileDataObject), err => {
            if(err) throw err;
        });
        return fileDataObject.rehostNum;
    }
}
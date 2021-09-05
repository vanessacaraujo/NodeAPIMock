
const path = require('path');
const fs = require('fs');

const basePathToData = path.join(__dirname, '../Data');

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  console.log(filename)
  let conteudo = fs.readFileSync(filename, 'utf-8')
  return JSON.parse(conteudo);
};

exports.getData = function (request, response) {
  var data = getJsonData(basePathToData, 'data.json');
  return response.send(data)
};

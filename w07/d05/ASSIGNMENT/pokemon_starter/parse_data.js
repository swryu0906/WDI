module.exports = {
  searchById: function(jsonData, id){
    for(var index in jsonData){
      if(Number(id) === Number(jsonData[index]['id']))
        return jsonData[index];
    }
    // if there is no matched elements with the given id, false will be returned.
    return false;
  },

  searchByName: function(jsonData, name){
    var resultArray = [];
    // all elements with the same name

    for(var i in jsonData){
      if(name.toUpperCase() === jsonData[i]['name'].toUpperCase()){
        console.log('query.name = ' + name + ', jsonData[i][\'name\'] = ' + jsonData[i]['name']);
        console.log('jsonData[i] = \n' + jsonData[i]);
        resultArray.push(jsonData[i]);
      }
    }
    // if there is no matched elements with the given id, false will be returned.
    if(resultArray.length === 0) return false;
    else return resultArray;

    // return resultArray
  },

  searchByType: function(jsonData, type){
    var resultArray = [];
    // all elements with the same type
    for(var i in jsonData){
      for(var j in jsonData[i]['type']){
        if(type.toUpperCase() === jsonData[i]['type'][j].toUpperCase())
          resultArray.push(jsonData[i]);
      }
    }
    // if there is no matched elements with the given id, false will be returned.
    if(resultArray.length === 0) return false;
    else return resultArray;
  },

  random: function(jsonData){
    // randomIndex is a random number between 0 and jsonData.length
    var randomIndex = Math.floor(Math.random() * (jsonData.length + 1));
    console.log('randomIndex = ' + randomIndex);
    return jsonData[randomIndex];
  }
}

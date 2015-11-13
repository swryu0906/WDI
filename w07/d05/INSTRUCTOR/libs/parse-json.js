module.exports = {
  parseIt: function(json){
      var data = JSON.parse(json);
      var list = '<ul>';
      for(var data_obj in data['dataset']['data']){
        list += '<li>' + data['dataset']['data'][data_obj] + '</li>';
      }
      list += '</ul>'
      return list
  }
};

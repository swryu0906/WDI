module.exports = {
  parseIt: function(json){
      var data = JSON.parse(json);
      // console.log(data);
      var ul = '<ul>';
      var list;
      for(var data_obj in data['dataset']['data']){
        list += '<li>' + data['dataset']['data'][data_obj] + '</li>';
      }
      ul += list + '</ul>'
      return ul;
  }
};

(function() {
  var listProseccor = $('.list-item-wrap--processor');
  var listSystem = $('.list-item-wrap--system');
  var listMemory = $('.list-item-wrap--memory');
  var param = {
    url: "https://sheets.googleapis.com/v4/spreadsheets/15n-YNXTIW50oUODqx_ugi5I5F0s1VR2fXTD-Aq2e8GY/values/sheet1?key=AIzaSyDG5x2V3WMrxXEnGkSd2XBn-fuM7qvElLg",
    // type: "post",
    dataType: "json"
  };
  var type = 'processor';

  function replacefunc($str) {
    var $Restr = $str.replace(/,/g, '');
    return $Restr;
  }


  $.ajax(param)
  .done(function(data) {
    var dataVal = data.values;
    var type = "processor";
    for(let i = 1; i < dataVal.length; i++ ) {
      var $_node = 
      `<li class="list-item list-item--${dataVal[i][0]}" data-price="${replacefunc(dataVal[i][3])}">
        <label class="label" for="${dataVal[i][0]}"></label>
        <input class="input" type="radio" id="${dataVal[i][0]}" name="${type}">
        <p class="name">${dataVal[i][2]}</p>
        <p class="price">${dataVal[i][3]}円</p>
      </li>`;
      // プロセッサーカテゴリーに追加
      if(dataVal[i][1] == "プロセッサー"){
        listProseccor.append($_node);
      }
      // オペレーティングシステムに追加
      if(dataVal[i][1] == "オペレーティングシステム"){
        var type = "memory";
        listSystem.append($_node);
      }

      // メモリーに追加
      if(dataVal[i][1] == "メモリー"){
        var type = "memory";
        listMemory.append($_node);
      }
    }
  })
  .fail(function(err) {
    console.log(err);
  });

}());
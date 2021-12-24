(function () {
  $(function () {

    var get_num = 5;
    var now_num = 0; //現在の表示件数
    var loopcount = 0; // 取得件数に当たる

    $(window).on('load', function () {
      $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/15n-YNXTIW50oUODqx_ugi5I5F0s1VR2fXTD-Aq2e8GY/values/sheet1?key=AIzaSyDG5x2V3WMrxXEnGkSd2XBn-fuM7qvElLg",
        dataType: "json",
        // data: {id: 1}
      })
        .done(function (data) {
          console.log(data.values);
          var dataobj = data.values;
          for (let i = 0; i < get_num; i++) {
            $node = `<li class="list-item list-item--${dataobj[i][0]}">${dataobj[i][2]}</li>`;
            if (i == 0) {
              continue;
            }
            $('#number-list ul').append($node);
          }
          now_num = now_num + get_num;
          
          console.log(loopcount);
        })
        .fail(function (err) {
          console.log(err);
        });
    });

    $('.more-btn').on('click', function () {
      $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/15n-YNXTIW50oUODqx_ugi5I5F0s1VR2fXTD-Aq2e8GY/values/sheet1?key=AIzaSyDG5x2V3WMrxXEnGkSd2XBn-fuM7qvElLg",
        dataType: "json",
        // data: {id: 1}
      })
        .done(function (data) {
          console.log(data.values);
          var dataobj = data.values;
          var sum_num = now_num + get_num;
          for (let i = now_num; i < sum_num; i++) {
            $node = `<li class="list-item list-item--${dataobj[i][0]}">${dataobj[i][2]}</li>`;
            if (i == 0) {
              continue;
            }
            $('#number-list ul').append($node);
            now_num = now_num + get_num;
            loopcount++;
          }
          console.log(loopcount);
          if (data.values.length > loopcount) {
            $('.more-btn').show();
          } else {
            $('.more-btn').hide();
          }
        })
        .fail(function (err) {
          console.log(err);
        });
    });
  });
}());
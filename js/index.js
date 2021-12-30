(function () {
  function appendfunc() {
    for (let i = 0; i < optionlist.length; i++) {
      var $_node = $('<li class="checklist-item"></li>');
      $_node = $_node.html(optionlist[i]);
      $('#js-checklist-wrap').append($_node);
    }
  }
  function pushedArray() {
    $_inputcheck.each(function (i) {
      optionlist.push($(this).next().html());
      console.log(optionlist);
    });
  }
  function removelist() {
    if ($('#js-checklist-wrap').children('li')) {
      $('#js-checklist-wrap').children('li').remove();
    };
  }
  // 初期化
  optionlist = [];
  var $_inputcheck = $('input:checked');

  // ajax処理後の処理
  $(window).ajaxStop(function () {
    // 計算処理
    $('input[type="radio"]').on('click', function () {
      var result = 0;
      $('input:checked').each(function () {
        var price = $(this).parent().data('price');
        result = result + price;
      });
      $('#result').html(result + '円');
    });

    $('input[type="radio"]').on('change', function () {
      // 初期化
      $_inputcheck = $('input:checked');
      optionlist = [];
      // 処理実行
      pushedArray();
      removelist();
      appendfunc();
  });
  });
}());
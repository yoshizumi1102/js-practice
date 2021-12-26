(function() {
  $(window).ajaxStop(function() {
    $('.list-item').each(function() {
      // console.log($(this).data('price'));
    });
    $('input[type="radio"]').on('click', function() {
      // 計算処理
      var result = 0;

      $('input:checked').each(function() {
        var price = $(this).parent().data('price');
        result = result + price;
      });
      $('#result').html(result + '円');
    });
    });
}());
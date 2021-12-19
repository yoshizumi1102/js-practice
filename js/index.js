(function() {
  // labelのスタイル処理
  

  $('input[type="radio"]').on('click', function() {
    // 計算処理
    var result = 0;
    $('input:checked').each(function() {
      result = result + parseInt($(this).val().replace(/,/g, ''), 10);
    });
    $('#result').html(`${result}円`);
  });
}());
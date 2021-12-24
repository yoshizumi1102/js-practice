<?php

require_once __DIR__ . '/config/sheetapi.php';

$cat = null;
$option = null;
$price = null;

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="/css/style.css">
</head>

<body>
  <div class="wrap wrap-js">
    <main id="form">
      <div class="container">
        <div class="main-container">

          <!-- プロセッサー -->
          <div class="wrap wrap--processor">
            <h2 class="ttl">プロセッサー</h2>
            <ul class="list-item-wrap">
            </ul>
          </div>

          <!-- オペレーティングシステム -->
          <div class="wrap wrap--system">
            <h2 class="ttl">オペレーティングシステム</h2>
            <ul class="list-item-wrap">
              
            </ul>
          </div>
        </div>
        <div class="side-container">
          <p id="resultText">価格： <span id="result"></span></p>
        </div>
      </div>
    </main>
  </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script src="/js/index.js"></script>
<script src="/js/ajax.js"></script>


</html>
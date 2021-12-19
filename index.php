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
              <?php foreach ($values as $key => $value) :
                $count = count($value);
                $id = $value[0];
                $cat = $value[1];
                $option = $value[2];
                $price = $value[3];

              ?>
                <?php if ($cat == 'プロセッサー') : ?>
                  <li class="list-item list-item--<?php echo $id; ?>" data-id="<?php echo $id; ?>" data-price="<?php echo $price; ?>">
                    <input type="radio" name="processor" id="<?php echo $key; ?>" value="<?php echo $price; ?>">
                    <label class="list-label" for="<?php echo $key; ?>"></label>
                    <h4 class="list-item-name"><?php echo $option; ?></h4>
                    <p class="list-item-price"><?php echo $price; ?></p>
                  </li>
              <?php endif;
              endforeach; ?>
            </ul>
          </div>

          <!-- オペレーティングシステム -->
          <div class="wrap wrap--system">
            <h2 class="ttl">オペレーティングシステム</h2>
            <ul class="list-item-wrap">
              <?php foreach ($values as $key => $value) :
                $id = $value[0];
                $cat = $value[1];
                $option = $value[2];
                $price = $value[3];
              ?>
                <?php if ($cat == 'オペレーティングシステム') : ?>
                  <li class="list-item list-item--<?php echo $id; ?>" data-id="<?php echo $id; ?>" data-price="<?php echo $price; ?>">
                    <input type="radio" name="system" id="<?php echo $key; ?>" value="<?php echo $price; ?>">
                    <label class="list-label" for="<?php echo $key; ?>"></label>
                    <h4 class="list-item-name"><?php echo $option; ?></h4>
                    <p class="list-item-price"><?php echo $price; ?></p>
                  </li>
              <?php endif;
              endforeach; ?>
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

</html>
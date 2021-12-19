<?php 

require_once __DIR__ . '/../vendor/autoload.php';

$key = __DIR__ . '/../js-project7903-b26e59eaa706.json';

$client = new Google_Client();//Googleクライアントインスタンスを作成
$client->setScopes([//スコープを以下の内容でセット
    \Google_Service_Sheets::SPREADSHEETS,
    \Google_Service_Sheets::DRIVE,]);
$client->setAuthConfig($key);//サービスキーをセット
 
$sheet = new Google_Service_Sheets($client);//シートを操作するインスタンス
$sheet_id = '15n-YNXTIW50oUODqx_ugi5I5F0s1VR2fXTD-Aq2e8GY';//対象のスプレッドシートのIDを指定
$range = 'シート1!A2:D12';//取得範囲を指定
$response = $sheet->spreadsheets_values->get($sheet_id, $range);
$values = $response->getValues();//帰ってきたresponseから値を取得

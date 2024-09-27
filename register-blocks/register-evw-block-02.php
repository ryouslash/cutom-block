<?php
function evw_block_02_enqueue()
{
  // アセットファイルをインクルードして、変数に保存
  $asset_file = include(dirname(plugin_dir_path(__FILE__)) . '/build/evw-block-02.asset.php');

  // ブロック用のスクリプトを登録
  wp_register_script(
    'evw-block-02',
    plugins_url('build/evw-block-02.js', dirname(__FILE__)),
    $asset_file['dependencies'], // 依存スクリプトの配列
    $asset_file['version'] // バージョン
  );

  //フロント&エディター用スタイル（追加）
  wp_register_style(
    'evw-block-02-style', //ハンドル名
    //style.scss は build ディレクトリに style-evw-block-02.css として出力される
    plugins_url('build/style-evw-block-02.css', dirname(__FILE__)), // URLを取得する
    array(),
    filemtime(dirname(plugin_dir_path(__FILE__)) . '/build/style-evw-block-02.css') // ファイルの更新時刻をバージョンに
  );

  //エディター用スタイル（追加）
  wp_register_style(
    'evw-block-02-editor-style', //ハンドル名
    //editor.scss は build ディレクトリに evw-block-02.css として出力される
    plugins_url('build/evw-block-02.css', dirname(__FILE__)), // URLを取得する
    array('wp-edit-blocks'),  //依存スタイルのハンドル
    filemtime(dirname(plugin_dir_path(__FILE__)) . '/build/evw-block-02.css') // ファイルの更新時刻をバージョンに
  );

  // ブロックを登録
  register_block_type('evw/block-02', array(
    'editor_script' => 'evw-block-02',
    //フロント&エディター用スタイルのハンドル名を style に指定（追加）
    'style' => 'evw-block-02-style',
    //エディター用スタイルのハンドル名を editor_style に指定（追加）
    'editor_style' => 'evw-block-02-editor-style',
  ));
}
add_action('init', 'evw_block_02_enqueue');

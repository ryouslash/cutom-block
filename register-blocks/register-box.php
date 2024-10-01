<?php
function box_block_enqueue()
{
  // アセットファイルをインクルードして、変数に保存
  $asset_file = include(dirname(plugin_dir_path(__FILE__)) . '/build/box.asset.php');

  // ブロック用のスクリプトを登録
  wp_register_script(
    'box',
    plugins_url('build/box.js', dirname(__FILE__)),
    $asset_file['dependencies'], // 依存スクリプトの配列
    $asset_file['version'] // バージョン
  );

  //フロント&エディター用スタイル（追加）
  wp_register_style(
    'box-style', //ハンドル名
    //style.scss は build ディレクトリに style-evw-block-02.css として出力される
    plugins_url('build/style-box.css', dirname(__FILE__)), // URLを取得する
    array(),
    filemtime(dirname(plugin_dir_path(__FILE__)) . '/build/style-box.css') // ファイルの更新時刻をバージョンに
  );

  //エディター用スタイル（追加）
  wp_register_style(
    'box-editor-style', //ハンドル名
    //editor-box.scss は build ディレクトリに box.css として出力される
    plugins_url('build/box.css', dirname(__FILE__)), // URLを取得する
    array('wp-edit-blocks'),  //依存スタイルのハンドル
    filemtime(dirname(plugin_dir_path(__FILE__)) . '/build/box.css') // ファイルの更新時刻をバージョンに
  );

  // ブロックを登録
  register_block_type('evw/box', array(
    'editor_script' => 'box',
    //フロント&エディター用スタイルのハンドル名を style に指定（追加）
    'style' => 'box-style',
    //エディター用スタイルのハンドル名を editor_style に指定（追加）
    'editor_style' => 'box-editor-style',
  ));
}
add_action('init', 'box_block_enqueue');

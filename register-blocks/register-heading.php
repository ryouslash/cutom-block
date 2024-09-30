<?php
function heading_block_enqueue()
{
  // アセットファイルをインクルードして、変数に保存
  $asset_file = include(dirname(plugin_dir_path(__FILE__)) . '/build/heading.asset.php');

  // ブロック用のスクリプトを登録
  wp_register_script(
    'heading',
    plugins_url('build/heading.js', dirname(__FILE__)),
    $asset_file['dependencies'], // 依存スクリプトの配列
    $asset_file['version'] // バージョン
  );

  //フロント&エディター用スタイル（追加）
  wp_register_style(
    'heading-style', //ハンドル名
    //style.scss は build ディレクトリに style-heading.css として出力される
    plugins_url('build/style-heading.css', dirname(__FILE__)), // URLを取得する
    array(),
    filemtime(dirname(plugin_dir_path(__FILE__)) . '/build/style-heading.css') // ファイルの更新時刻をバージョンに
  );

  //エディター用スタイル（追加）
  wp_register_style(
    'heading-editor-style', //ハンドル名
    //editor.scss は build ディレクトリに heading.css として出力される
    plugins_url('build/heading.css', dirname(__FILE__)), // URLを取得する
    array('wp-edit-blocks'),  //依存スタイルのハンドル
    filemtime(dirname(plugin_dir_path(__FILE__)) . '/build/heading.css') // ファイルの更新時刻をバージョンに
  );

  // ブロックを登録
  register_block_type('evw/heading', array(
    'editor_script' => 'heading',
    //フロント&エディター用スタイルのハンドル名を style に指定（追加）
    'style' => 'heading-style',
    //エディター用スタイルのハンドル名を editor_style に指定（追加）
    'editor_style' => 'heading-editor-style',
  ));
}
add_action('init', 'heading_block_enqueue');

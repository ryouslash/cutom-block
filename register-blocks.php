<?php
function register_my_custom_block()
{
  // アセットファイルをインクルードして、変数に保存
  $asset_file = include plugin_dir_path(__FILE__) . 'build/evw-block-01.asset.php';

  // ブロック用のスクリプトを登録
  wp_register_script(
    'evw-block-01',
    plugins_url('build/evw-block-01.js', __FILE__),
    $asset_file['dependencies'], // 依存スクリプトの配列
    $asset_file['version'] // バージョン
  );

  // ブロックを登録
  register_block_type('evw/block-01', array(
    'editor_script' => 'evw-block-01',
  ));
}
add_action('init', 'register_my_custom_block');

<?php

/**
 * Plugin Name: EVW Blocks
 * Description: E-VALUE WORKS オリジナルブロック
 * Version: 1.0.0
 * Author: Ryo Ikeda
 */

//ブロックカテゴリーの追加
function add_block_categories($categories)
{
  $add_categories = [
    [
      'slug' => 'custom-block-category',  //スラッグ名
      'title' => 'EVWブロック',  //表示名
    ],
  ];
  $categories = array_merge($categories, $add_categories);
  return $categories;
}
add_filter('block_categories', 'add_block_categories');

// ブロックの登録関数をインクルード
require_once plugin_dir_path(__FILE__) . 'register-blocks/register-heading.php';
require_once plugin_dir_path(__FILE__) . 'register-blocks/register-box.php';

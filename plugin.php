<?php

/**
 * Plugin Name: My Custom Blocks
 * Description: A plugin to register custom Gutenberg blocks.
 * Version: 1.0.0
 * Author: Ryo Ikeda
 */

// ブロックの登録関数をインクルード
require_once plugin_dir_path(__FILE__) . 'register-blocks/register-evw-block-01.php';
require_once plugin_dir_path(__FILE__) . 'register-blocks/register-evw-block-02.php';

import { registerBlockType } from '@wordpress/blocks';
//スタイルシートを読み込む（インポート）
import './style-01.scss';
import './editor-01.scss';
 
registerBlockType( 'evw/block-01', {
  title: 'EVW Sample Block 01',
  icon: 'smiley',
  category: 'layout',
  //簡単な説明
  description: '最初のサンプルブロック',
  //ブロックのプレビュー（この例では空のオブジェクト {} を設定）
  example: {},
  //拡張機能のサポート（「HTMLとして編集」のオプションを非表示）
  supports: {
    html: false,
  },
  //ブロックスタイル
  styles: [
    {
      name: 'default',
      label: '角丸',
      isDefault: true
    },
    {
      name: 'squared',
      label: '角丸なし'
    },
  ],
  edit: ({ className }) => <div className={ className }>Hello World! (Edit)</div>,
  save: () => <div>Hello World! (Save)</div>,
} );
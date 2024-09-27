import { registerBlockType } from '@wordpress/blocks';
//スタイルシートを読み込む（インポート）
import './style-02.scss';
import './editor-02.scss';
 
registerBlockType( 'evw/block-02', {
  title: 'EVW Sample Block 02',
  icon: 'smiley',
  category: 'layout',
  edit: ({ className }) => {
    return <div className={ className }>Hello World No.2! (Edit2)</div>
  },
  save: () => {
    return <div>Hello World No.2! (Save2)</div>
  },
});
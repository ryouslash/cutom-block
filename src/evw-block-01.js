import { registerBlockType } from '@wordpress/blocks';
//RichText コンポーネントを block-editor パッケージからインポート
import { RichText } from '@wordpress/block-editor';

//スタイルシートを読み込む（インポート）
import './style-01.scss';
import './editor-01.scss';
 
registerBlockType( 'evw/block-01', {
  title: '見出しブロック-EVW',
  icon: 'heading',
  category: 'custom-block-category',
   //属性を定義
   //入力された値を保存するための属性 myContent を設定
   attributes: {
    //RichText の値を保持する属性
    myContent: {
      type: 'string',
      default: ''
    },
  },
  //簡単な説明
  description: '独自スタイルの見出しブロックです。',
  //ブロックのプレビュー（この例では空のオブジェクト {} を設定）
  example: {},
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
  edit: ( {className, attributes: { myContent }, setAttributes } ) => {
    return (
      <RichText
        className = {className}
        //値は attributes に設定した属性 myContent の値を設定
        value={ myContent }
        //onChange イベントで setAttributes を使って値（属性 myContent）を更新
        onChange={ (newContent) => setAttributes({ myContent: newContent }) }
      />
    );
  },
 
  save: ( {attributes: {myContent }} ) => {
    //save 関数では RichText.Content を使います
    return (
      <RichText.Content
        //値は属性から取得
        value={ myContent }
      />
    )
  },
});
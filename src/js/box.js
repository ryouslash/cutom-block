import { registerBlockType } from '@wordpress/blocks';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

//スタイルシートを読み込む（インポート）
import '../scss/box.scss';
import '../scss/editor-box.scss';

const BoxIcon = () => (
  <svg viewBox="0 0 60 60" width="28" height="28" aria-hidden="true" focusable="false">
    <path d="M55,7H5C3.9,7,3,7.9,3,9v42c0,1.1,0.9,2,2,2h50c1.1,0,2-0.9,2-2V9C57,7.9,56.1,7,55,7z M54,48H6V21.5h48V48z"></path>
  </svg>
);
 
registerBlockType( 'evw/box', {
  title: '見出し付きボックス-EVW',
  icon: BoxIcon,
  category: 'custom-block-category',
  description: '独自の見出し付きボックスを追加します。',
  // attributes を定義

  attributes: {
    heading: {
      type: 'string', // データ型は文字列
      source: 'html', // HTML コンテンツを保存
      selector: '.wp-block-evw-box__title', // 見出し部分の要素からデータを取得
    },

    content: {
      type: 'array', // 本文は複数のブロックを含むため配列
      source: 'children', // 子要素として保存
      selector: '.wp-block-evw-box__content', // 本文部分の要素からデータを取得
    },
  },
  //ブロックスタイル
  styles: [
    {
        name: 'default',
        label: 'デフォルト',
        isDefault: true
    },
    {
        name: 'pattern1',
        label: 'パターン1'
    },
  ],
  edit: ({ attributes, setAttributes, className }) => {
    const { heading } = attributes;

    return (
      <div className={ className }>
        {/* 見出し部分 */}
        <RichText
          tagName="div"
          className="wp-block-evw-box__title"
          placeholder="見出しを入力してください。"
          value={ heading }
          onChange={( newHeading ) => setAttributes({ heading: newHeading })}
        />
        {/* 本文部分 */}
        <div className="wp-block-evw-box__content">
          <InnerBlocks />
        </div>
      </div>
    );
  },
  save: ({ attributes }) => {
    const { heading } = attributes;

    return (
      <div>
        {/* 保存された見出し */}
        <RichText.Content tagName="div" className="wp-block-evw-box__title" value={ heading } />
        {/* 保存された本文部分 */}
        <div className="wp-block-evw-box__content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  },
});
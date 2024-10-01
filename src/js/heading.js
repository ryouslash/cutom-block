import { registerBlockType } from '@wordpress/blocks';
import { RichText, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import '../scss/heading.scss';
import '../scss/editor-heading.scss';

registerBlockType('evw/heading', {
    title: '見出しブロック-EVW',
    icon: 'heading',
    category: 'custom-block-category',
    description: '独自の見出しを追加します。',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            // 複数のタグに対応するため、'h2, h3, h4, h5, h6'と設定
            selector: 'h2, h3, h4, h5, h6',
        },
        level: {
            type: 'number',
            default: 2, // デフォルトの見出しレベルを h2 に設定
        },
    },
    styles: [
        {
            name: 'default',
            label: '装飾なし',
            isDefault: true,
        },
        {
            name: 'pattern1',
            label: 'パターン1',
        },
    ],
    edit: ({
        className,
        attributes: { content, level },
        setAttributes,
    }) => {
        const tagName = `h${level}`; // 動的にタグ名を生成

        return (
            <>
                <BlockControls>
                    <ToolbarGroup>
                        {[2, 3, 4, 5, 6].map((headingLevel) => (
                            <ToolbarButton
                                key={headingLevel}
                                label={`H${headingLevel}`}
                                isPressed={level === headingLevel}
                                onClick={() =>
                                    setAttributes({ level: headingLevel })
                                }
                            >
                                {`H${headingLevel}`}
                            </ToolbarButton>
                        ))}
                    </ToolbarGroup>
                </BlockControls>

                <RichText
                    className={className}
                    tagName={tagName}
                    value={content}
                    onChange={(newContent) =>
                        setAttributes({ content: newContent })
                    }
                    placeholder="見出しを入力"
                />
            </>
        );
    },

    save: ({ attributes: { content, level } }) => {
        const tagName = `h${level}`; // 動的にタグ名を生成
        return <RichText.Content tagName={tagName} value={content} />;
    },
});

import ReactMarkdown from "react-markdown";
import React from "react";

interface MarkdownViewProps {
  content: string;
}

export const MarkdownView = ({ content }: MarkdownViewProps) => {
  return (
    <div className="flex flex-col">{/* ← ここに flex-col を追加 */}
      <ReactMarkdown
        components={{
          // 段落：last:mb-0 で、引用(blockquote)や親要素内での下の隙間を最適化
          p: ({ children }) => {
            // children（中身）の中に迷い込んだ "\n" だけを消去する処理
            const content = React.Children.map(children, (child) => {
              return typeof child === "string"
                ? child.replace(/\n/g, "")
                : child;
            });

            return (
              <p className="mb-2 last:mb-0 leading-[1.8] text-base text-clr-main-1/90 text-justify tracking-tight">
                {content}
              </p>
            );
          },
          // 強調：アクセントライン付き
          strong: ({ children }) => (
            <strong className="font-bold text-clr-main-2 bg-gradient-to-b from-transparent from-70% to-clr-primary-1/30 inline-block">
              {children}
            </strong>
          ),
          // 引用：枠線と薄い背景で「メッセージ」を際立たせる
          blockquote: ({ children }) => (
            <div className="my-8 border-l-4 border-clr-primary-1 bg-clr-base-1/50 p-6 italic shadow-sm">
              {children}
            </div>
          ),
          // 箇条書き：リスト全体
          ul: ({ children }) => (
            <ul className="my-6 space-y-3 list-none">{children}</ul>
          ),
          // 箇条書き：各項目（独自のドットを表示）
          li: ({ children }) => (
            <li className="flex items-start gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-clr-primary-1 before:rounded-full before:mt-2 text-sm">
              {children}
            </li>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

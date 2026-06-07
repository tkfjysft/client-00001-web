import ReactMarkdown from "react-markdown";
import React from "react";

interface MarkdownViewProps {
  content: string;
}

export const MarkdownView = ({ content }: MarkdownViewProps) => {
  return (
    <div className="flex flex-col">
      <ReactMarkdown
        components={{
          p: ({ children }) => {
            const content = React.Children.map(children, (child) => {
              return typeof child === "string"
                ? child.replace(/\n/g, "")
                : child;
            });

            return (
              <p className="mb-2 last:mb-0 text-base text-clr-main-1/80">
                {content}
              </p>
            );
          },
          strong: ({ children }) => (
            <strong className="font-bold text-clr-main-2 bg-gradient-to-b from-transparent from-70% to-clr-primary-1/30 inline-block">
              {children}
            </strong>
          ),
          blockquote: ({ children }) => (
            <div className="my-8 border-l-4 border-clr-primary-1 bg-clr-base-1/50 p-6 italic shadow-sm">
              {children}
            </div>
          ),
          ul: ({ children }) => (
            <ul className="my-6 space-y-3 list-none">{children}</ul>
          ),
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

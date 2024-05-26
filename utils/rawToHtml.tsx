import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";

const RawToHtml = ({ raw }) => {
  return (
    <RichText
      content={raw}
      renderers={{
        bold: ({ children }: any) => (
          <strong className="font-bold">{children}</strong>
        ),
        italic: ({ children }: any) => <em className=" italic">{children}</em>,
        a: ({ children, openInNewTab, href, rel, ...rest }) => {
          if (href.match(/^https?:\/\/|^\/\//i)) {
            return (
              <Link
                href={href}
                target={openInNewTab ? "_blank" : "_self"}
                rel={rel || "external"}
                className="link text-lg"
                {...rest}
              >
                {children}
              </Link>
            );
          }

          return (
            <Link href={href} {...rest} className="link">
              {children}
            </Link>
          );
        },
        p: ({ children }: any) => (
          <p className="dark:text-white text-lg my-2">{children}</p>
        ),
        li: ({ children }: any) => (
          <li className="dark:text-white text-lg my-2">{children}</li>
        ),
        h1: ({ children }: any) => (
          <h1 className="dark:text-white text-2xl font-bold my-4">
            {children}
          </h1>
        ),
        h2: ({ children }: any) => (
          <h2 className="dark:text-white text-2xl font-bold my-4">
            {children}
          </h2>
        ),
        code_block: ({ children }: any) => (
          <pre
            className=" bg-slate-100 dark:bg-slate-500 text-md my-4 p-2 rounded font-mono leading-3 "
            style={{ overflowX: "auto" }}
          >
            {children}
          </pre>
        ),
        code: ({ children }: any) => (
          <code className="text-md  p-1 rounded font-mono">{children}</code>
        ),
      }}
    />
  );
};
export default RawToHtml;

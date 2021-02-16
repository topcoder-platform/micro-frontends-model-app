/**
 * This Code component takes care of rendering code using prism-react-renderer
 * A copy code functionality has been added to it to ease use by developers
 */

import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import "./styles.module.scss";

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

// Button for copying code in the snippet
const Button = (props) => <button styleName="button" {...props} />;

export const Code = ({ codeString, children, language, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "2rem",
            position: "relative",
            border: "1px white solid"
          }}
        >
          <Button
            onClick={() => {
              copyToClipboard(codeString);
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 3000);
            }}
          >
            {isCopied ? "Copied!" : "Copy"}
          </Button>

          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} style={style}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

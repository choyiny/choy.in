import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import vsLight from "prism-react-renderer/themes/vsLight";
import { Box, Stack, Tag, useColorMode } from "@chakra-ui/react";
import { Copy } from "./copy";

export default ({ children, className, title = undefined }) => {
  const language = className ? className.replace(/language-/, "") : "";
  const { colorMode } = useColorMode();
  const hasLineNumbers = false;

  return (
    <Box
      sx={{
        backgroundColor: "#515151",
        borderRadius: "5px",
        width: "100%",
        marginBottom: "0.5em",
      }}
    >
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language as Language}
        theme={colorMode === `light` ? vsLight : vsDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="code-block-wrapper">
            {(title || language) && (
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="flex-end"
                className="gatsby-highlight-header"
                p="0.3em"
              >
                {title && <Box flexGrow={1}>{title}</Box>}
                {language && (
                  <Tag textTransform="uppercase" data-lang={language}>
                    {language}
                  </Tag>
                )}
                <Copy content={children} fileName={title} />
              </Stack>
            )}
            <div
              className="gatsby-highlight"
              data-prism-renderer="true"
              data-has-line-numbers={hasLineNumbers}
            >
              <pre
                className={className}
                style={{ ...style, padding: "10px", overflowX: "scroll" }}
              >
                <code className={`language-${language}`}>
                  {tokens.map((line, i) => {
                    const lineProps = getLineProps({ line, key: i });

                    // if (shouldHighlightLine(i)) {
                    //   lineProps.className = `${lineProps.className} highlight-line`
                    // }

                    return (
                      <div {...lineProps}>
                        {hasLineNumbers && (
                          <span className="line-number-style">{i + 1}</span>
                        )}
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>
          </div>
        )}
      </Highlight>
    </Box>
  );
};

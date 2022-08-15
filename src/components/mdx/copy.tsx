import * as React from "react";
import { VisuallyHidden, Box, useClipboard } from "@chakra-ui/react";

// eslint-disable-next-line no-promise-executor-return
const delay = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

type CopyProps = {
  content: string;
  duration?: number;
  fileName?: string;
  trim?: boolean;
};

export const Copy = ({ content, fileName = `` }: CopyProps) => {
  const { hasCopied, onCopy } = useClipboard(content.trim());
  return (
    <Box
      as="button"
      type="button"
      disabled={hasCopied}
      onClick={onCopy}
      transition="all 0.3s ease-in-out"
      border="1px solid transparent"
      px={2}
      borderRadius="6px"
      _hover={{
        border: `1px solid currentColor`,
      }}
      _disabled={{
        opacity: 0.5,
        cursor: `not-allowed`,
      }}
    >
      {hasCopied ? `Copied` : `Copy`}
      <VisuallyHidden as="span" aria-roledescription="status">
        {hasCopied ? `Copied` : `Copy`}
      </VisuallyHidden>
    </Box>
  );
};

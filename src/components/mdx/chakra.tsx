import * as React from "react";
import {
  Code,
  OrderedList,
  Table,
  TableContainer,
  Td,
  Th,
  Tr,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import Codeblock from "./codeblock";

export const chakra = {
  a: (props: object) => <Link {...props} textDecoration="underline" />,
  ol: (props: object) => <OrderedList {...props} mb="0.3em" />,
  ul: (props: object) => <UnorderedList {...props} mb="0.3em" />,
  code: Codeblock,
  inlineCode: Code,
  table: (props: object) => (
    <TableContainer>
      <Table variant="simple" size="sm" {...props} />
    </TableContainer>
  ),
  tr: (props: object) => <Tr {...props} />,
  td: (props: object) => <Td {...props} />,
  th: (props: object) => <Th {...props} />,
};

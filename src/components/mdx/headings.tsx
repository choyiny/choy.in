import { Heading } from "@chakra-ui/react";
import * as React from "react";

export const headings = {
  h1: (props: object) => (
    <Heading as="h1" size="xl" mb="0.5em" mt="0.5em" {...props} />
  ),
  h2: (props: object) => (
    <Heading as="h2" size="lg" mb="0.5em" mt="0.5em" {...props} />
  ),
  h3: (props: object) => (
    <Heading as="h3" size="md" mb="0.5em" mt="0.5em" {...props} />
  ),
  h4: (props: object) => (
    <Heading as="h4" size="sm" mb="0.5em" mt="0.5em" {...props} />
  ),
};

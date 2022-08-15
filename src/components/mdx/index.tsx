import * as React from "react";
import { headings } from "./headings";
import { Text } from "@chakra-ui/react";
import { chakra } from "./chakra";

export const components = {
  p: (props: object) => (
    <Text
      {...props}
      fontSize="md"
      lineHeight="1.6"
      textAlign="justify"
      mb="1em"
    />
  ),
  ...headings,
  ...chakra,
};

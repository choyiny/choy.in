import * as React from "react"
import {LinkBox} from "@chakra-ui/react"
import {transforms} from "../constants/motion";

export const LinkCard = ({
  children,
  ...rest
}) => {
  return (
    <LinkBox
      p={4}
      borderRadius="lg"
      height={[`150px`, null, null, `200px`]}
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      color="white"
      fontSize={[`lg`, null, `md`, `1.125rem`, `1.3125rem`]}
      sx={{ textShadow: `0 1px 2px rgba(0, 0, 0, 0.5)` }}
      transition={transforms.beforeHover.transition}
      transform={transforms.beforeHover.transform}
      _hover={
        { transform: transforms.onHover.transform, boxShadow: transforms.onHover.boxShadow }
      }
      {...rest}
    >
      {children}
    </LinkBox>
  )
}
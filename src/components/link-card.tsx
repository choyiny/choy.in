import * as React from "react"
import {Image, LinkBox, LinkOverlay, Text} from "@chakra-ui/react"
import {transforms} from "../constants/motion";


export const LinkCard = ({
  projectName,
  projectDescription,
  projectLink,
  projectLogo,
  ...rest
}) => {
  return (
    <LinkBox
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
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
      <LinkOverlay href={projectLink} mb='1em'>
        {
          projectLogo
          ? <Image height='36px' src={projectLogo}/>
          : <Text fontWeight='bold' fontSize='2xl'>{projectName}</Text>
        }
      </LinkOverlay>
      <Text fontSize='md'>
        {projectDescription}
      </Text>
    </LinkBox>
  )
}
import React from "react"
import {Flex, HStack, IconButton, Link, useColorMode, Text} from "@chakra-ui/react";
import {useNavigation} from "../hooks/use-navigation";
import {BsGithub, BsLinkedin, MdOutlineBrightness4, MdOutlineBrightness6} from "react-icons/all";
import {DisplayContainer} from "./display-container";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLight = colorMode === `light`
  return (
    <IconButton
      aria-label={isLight ? `Activate Dark Mode` : `Activate Light Mode`}
      variant="ghost"
      color="textMuted"
      _hover={{ color: isLight ? `black` : `white` }}
      icon={isLight ? <MdOutlineBrightness4 fontSize="1.25rem"/> : <MdOutlineBrightness6 fontSize="1.25rem" />}
      onClick={toggleColorMode}
    />
  )
}

export default function Navigation() {
  // const navigation = useNavigation()
  const navigation: { link: string, name: string }[] = []
  return (
    <DisplayContainer variant={'navigation'}>
      <Flex flexDirection={[`column`, `row`]} textAlign="center" alignItems="center" justifyContent="space-between" my={5}>
        <Text fontWeight='bold' fontSize='xl'>Cho Yin Yong</Text>
        <HStack spacing={[`2`, `4`]}>
          <nav aria-label="Navigation">
            <HStack as="ul" listStyleType="none" spacing={[`2`, `6`]}>
              {navigation.map((item) => (
                <li key={item.link}>
                  <Link href={item.link} fontSize={[`md`, null, null, `lg`]} p="2" className="active">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href='https://github.com/choyiny'>
                  <BsGithub/>
                </Link>
              </li>
              <li>
                <Link href='https://linkedin.com/in/choyiny'>
                  <BsLinkedin/>
                </Link>
              </li>
            </HStack>
          </nav>
          <Toggle />
        </HStack>
      </Flex>
    </DisplayContainer>
  )
}
import React from 'react';
import NextLink from 'next/link';

import {
  Box,
  Button,
  HStack,
  Flex,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons'
import { ConnectModal } from './connect'

const WrappedLink = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};

type HeaderProps = {
    innerWidth: string;
  };

const Header = (props: HeaderProps) => {
  const innerWidth = props.innerWidth || '1040px';
  const [largeScreen] = useMediaQuery('(min-width: 700px)');
  const [connectModalStaus, setConnectModalStaus] = React.useState(false);

  const handleOpenConnectModal = () => {
    setConnectModalStaus(true);
  }

  const handleCloseConnectModal = () => {
    setConnectModalStaus(false);
  }

  return (
    <Flex
      px={[4, 8]}
      h='100px'
      backgroundColor="#F2F2F2"
    >
      <Flex
        align='center'
        whiteSpace='nowrap' // ensure signle line
        justifyContent='space-between'
        w='full'
        maxW={innerWidth}
        m='0 auto'
        my={2}
      >
        <HStack spacing={4}>
          {largeScreen ? (
            <WrappedLink href='/'>
              <Box fontSize='lg' fontWeight='bold'>
                Site Logo
              </Box>
            </WrappedLink>
          ) : null}
        </HStack>
        <HStack mx={3} spacing={4} flex="1">
            <>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon boxSize="1.5em" viewBox="-5 0 27 15" color="gray.300" />}
                    />
                    <Input focusBorderColor="black" shadow="lg" type="search" borderRadius="999px"  placeholder="Search Foundation..." size="lg" />
                </InputGroup>
            </>
        </HStack>
        <HStack spacing={6} size="lg">
          <Button size="lg" shadow="lg" borderRadius="999px" color="white" backgroundColor="#000000" onClick={() => handleOpenConnectModal()} >
            Connect Wallet
          </Button>
        </HStack>
        <ConnectModal isOpen={connectModalStaus} handleClose={handleCloseConnectModal} />
      </Flex>
    </Flex>
  );
};

export {Header};

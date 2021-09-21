// import { Flex, FlexProps, Text } from '@chakra-ui/react'

// export const Footer = () => (
//   <Flex as="footer" py="3rem">
//     <Text>Next ❤️ Chakra</Text>
//   </Flex>
// )


import { Box, Stack, ButtonGroup, ButtonGroupProps, IconButton, Button } from '@chakra-ui/react'
import * as React from 'react'
import { Link } from './Link'

export const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <ButtonGroup variant="ghost" color="gray.600">
        <Link>
          Instagram
        </Link>
        <Link>
          Twitter
        </Link>
        <Link>
          Blog
        </Link>
      </ButtonGroup>
      
      <ButtonGroup variant="ghost" color="gray.600">
        <Link>
          About
        </Link>
        <Link>
          Community Guidelines
        </Link>
        <Link>
          Terms of Service
        </Link>
        <Link>
          Privacy
        </Link>
        <Link>
          Careers
        </Link>
        <Link>
          Help
        </Link>
      </ButtonGroup>
    </Stack>
  </Box>
)
import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/system'
import * as React from 'react'

export const Link = (props: HTMLChakraProps<'a'>) => (
  <chakra.a
    marginStart="1"
    href="#"
    color={useColorModeValue('black.500', 'black.200')}
    _hover={{ color: useColorModeValue('black.600', 'black.300') }}
    display={{ base: 'block', sm: 'inline' }}
    style={{ fontWeight: 600 }}
    {...props}
  />
)
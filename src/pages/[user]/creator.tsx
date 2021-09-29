
import { Box, Stack, ButtonGroup, Heading, Image, Flex, Text } from '@chakra-ui/react'
import * as React from 'react'

export const Creator = () => (
  <Box as="section" role="contentinfo" mx="auto" maxW="9xl" py="12" px={{ base: '4', md: '8' }}>
    <Box mb="3">
        <Heading as="h2" size="lg" letterSpacing="tight">
            Creator
        </Heading>
    </Box>
    <hr />
    <Stack
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      spacing="5"
      mt="14"
    >   
        <Box>
            <Flex align="center" >
                <Image  src="/images/user.jfif" rounded="full" mx="auto" objectFit="cover" w="28" h="28" mr="5" />
                <Box ml="3" mr="5">
                    <Stack spacing={5}>
                        <Heading as="h3" size="2xl" fontWeight="bold" letterSpacing="tight">
                            Kitasavi
                        </Heading>
                        <Text fontSize="xl" fontWeight="bold" color='gray.400'>
                            @kitasavi
                        </Text>
                    </Stack>
                </Box>
            </Flex>
        </Box>
        
        <Box>
            <Text mr="2" fontSize="2xl">
                I casually create new worlds and chaos is my order.
            </Text>
        </Box>
      
        
    </Stack>
  </Box>
)
import { 
  Flex,
  Stack, 
  Heading, 
  Box, 
  Text, 
  Image, 
  SimpleGrid, 
  useColorModeValue as mode, 
  Center, 
  Button, 
  Spacer,
  Divider,
  Stat as ChakraStat,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  AvatarGroup,
  Avatar
} from '@chakra-ui/react'

import { Footer } from '../../components/front/Footer'
import { ViewIcon, ExternalLinkIcon, InfoIcon, LockIcon, ArrowDownIcon, DownloadIcon, NotAllowedIcon, LinkIcon, PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { DividerWithText } from '../../components/front/DividerWithText'
import { Creator } from './creator';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

type ItemPageProps = {
  id: string;
  user: string;
};


const ItemPage = ({ id, user }: ItemPageProps) => {

  const handle = useFullScreenHandle();

  return (
    <>
      <Box as="section" backgroundColor='#F2F2F2'>
        <Box
          maxW="9xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '20', sm: '28' }}
          sx={{ ".my-component": { background: "#fff" }, ".fullscreen-enabled .my-component":  { background: "#000" }}}

        >
          <Center>
            
            <FullScreen handle={handle}>
              <Image cursor="zoom-in" src="" fallbackSrc="https://via.placeholder.com/350" width={350} height={400} onClick={handle.enter} />
            </FullScreen>
            
          </Center>
          <Button size="lg" shadow="base" height="16" borderRadius="50%" onClick={handle.enter} right="8" float="right">
            <SearchIcon />
          </Button>
        </Box>
      </Box>
      <Box as="section" maxW="9xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
        <Stack position="relative" top="-20">
          <Flex align="center" >
            <Box  >
              <Popover placement="top" matchWidth={false} trigger='hover' variant="responsive">
                <PopoverTrigger>
                  <Button size="lg" height="16" leftIcon={<Image src="/images/user.jfif" rounded="full" mx="auto" objectFit="cover" w="9" h="9" />} shadow="base" borderRadius="999px">@kitasavi</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                      <Box mt="5" ml="5" mr="5">
                        <Flex align="center">
                          <Image  src="/images/user.jfif" rounded="full" mx="auto" objectFit="cover" w="16" h="16" />
                          <Spacer />
                          <Button size="lg" height="14" shadow="base" borderRadius="999px">Follow</Button>
                        </Flex>
                      </Box>
                      <Box mt="5" ml="5" mr="5"  mb="5">
                        <Stack spacing={2}>
                            <Heading as="h3" size="lg" fontWeight="bold" letterSpacing="tight">
                                Kitasavi
                            </Heading>
                            <Text fontSize="xl" fontWeight="bold" color='gray.400'>
                                @kitasavi
                            </Text>
                            <Text fontSize="sm" letterSpacing="tight">
                              I casually create new worlds and chaos is my only order.
                            </Text>
                            <Flex align="center">
                              <Heading as="h5" size="sm" mr="2" fontWeight="bold" letterSpacing="tight">
                                  Followed by
                              </Heading>
                              <AvatarGroup size="sm" max={2}>
                                <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                                <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                                <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                              </AvatarGroup>
                            </Flex>
                        </Stack>
                      </Box>
                      <hr />
                      <Box mt="5" ml="5" mr="5"  mb="5">
                        <Stack spacing={2}>
                            <Flex align="center">
                              <Box mr="3">
                                <Heading mr="2" as="h5" size="sm">
                                  74
                                </Heading>
                                
                                <Text fontSize="md" color='gray'>
                                  Following
                                </Text>
                              </Box>
                              <Box>
                                <Heading mr="2" as="h5" size="sm">
                                  1840 
                                </Heading>
                                
                                <Text fontSize="md" color='gray'>
                                  Followers
                                </Text>
                              </Box>
                            </Flex>
                        </Stack>
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Box>
            <Spacer />
            <Flex align="center">
              <Popover placement="top" variant="responsive">
                <PopoverTrigger>
                  <Button size="lg" shadow="base" height="16" borderRadius="50%" mr="5">
                    <svg width="42" height="4" fill="none" xmlns="http://www.w3.org/2000/svg" className="css-13o7eu2">
                      <path d="M11 4a2 2 0 100-4 2 2 0 000 4zM2 4a2 2 0 100-4 2 2 0 000 4zM20 4a2 2 0 100-4 2 2 0 000 4z" fill="#000"></path>
                    </svg> 
                  </Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                      <Button size="lg" width="100%" height="16" color="red" leftIcon={<NotAllowedIcon mx="auto" objectFit="cover" w="6" h="6" />}> Report </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>

              <Popover placement="top" matchWidth={false}  variant="responsive">
                <PopoverTrigger>
                  <Button size="lg" height="16" width="100%" leftIcon={<DownloadIcon mx="auto" objectFit="cover" w="6" h="6" />} shadow="base" borderRadius="999px">Share</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                      <Box>
                        <Button size="lg" height="16" width="100%" leftIcon={<PhoneIcon mx="auto" objectFit="cover" w="6" h="6" />}> Tweet </Button>
                      </Box>
                      <Box>
                        <Button size="lg" height="16" width="100%" leftIcon={<LinkIcon mx="auto" objectFit="cover" w="6" h="6" />}> Copy Link </Button>
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
              
              
            </Flex>
          </Flex>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
          <Stack spacing="10">
            <Stack spacing={3}>
              <Heading as="h3" size="2xl" fontWeight="bold" letterSpacing="tight">
                Legwork
              </Heading>
              <Text fontSize="md" fontWeight="bold" color='gray.400'>
                <ArrowDownIcon w={5} h={5} /> Artwork Information
              </Text>
            </Stack>
            
            <Stack spacing={3}>
              <Text fontWeight="bold" fontSize="lg">
                Description
              </Text>
              <Text fontSize="md">
                "Legwork"
              </Text>
              <Text fontSize="md">
                1 of 1
              </Text>
              <Text fontSize="md">
                4000 x 5000px
              </Text>
              <Text fontSize="md">
                Kitasavi 2021.
              </Text>
            </Stack>
            
            <Stack spacing={3}>
              <Text fontWeight="bold" fontSize="lg">
                Edition of 
              </Text>
              <Heading as="h3" size="2xl" fontWeight="bold" letterSpacing="tight">
                1
              </Heading>
            </Stack>

            <Stack spacing={3}>
              <Text fontWeight="bold" fontSize="lg" >
                Tags
              </Text>
              <Stack spacing={4} direction="row" align="center">
                <Button shadow="base" size="sm">
                  3d
                </Button>
                <Button shadow="base" size="sm">
                  digital
                </Button>
                <Button shadow="base" size="sm">
                  kitasavi
                </Button>
                <Button shadow="base" size="sm">
                  contemporary art
                </Button>
              </Stack>
            </Stack>

            <Stack spacing={3}>
              <ChakraStat
                px={{ base: 4, sm: 6 }}
                py="5"
                bg={mode('white', 'gray.700')}
                shadow="base"
                rounded="lg"
                width="70%"
              >
                <Flex align="center">
                  <Flex align="center">
                    <InfoIcon mr="3" />
                    <Heading as="h5" size="sm">
                      View on Etherscan
                    </Heading>
                  </Flex>
                  <Spacer />
                  <Box  >
                    <ExternalLinkIcon />
                  </Box>
                </Flex>
              </ChakraStat>
              <ChakraStat
                px={{ base: 4, sm: 6 }}
                py="5"
                bg={mode('white', 'gray.700')}
                shadow="base"
                rounded="lg"
                width="70%"
              >
                <Flex align="center">
                  <Flex align="center">
                    <ViewIcon mr="3" />
                    <Heading as="h6" size="sm">
                      View on IPFS
                    </Heading>
                  </Flex>
                  <Spacer />
                  <Box>
                    <ExternalLinkIcon />
                  </Box>
                </Flex>
              </ChakraStat>
              <ChakraStat
                px={{ base: 4, sm: 6 }}
                py="5"
                bg={mode('white', 'gray.700')}
                shadow="base"
                rounded="lg"
                width="70%"
              >
                <Flex align="center">
                  <Flex align="center">
                    <LockIcon mr="3" />
                    <Heading as="h6" size="sm">
                      View IPFS Metadata
                    </Heading>
                  </Flex>
                  <Spacer />
                  <Box>
                    <ExternalLinkIcon />
                  </Box>
                </Flex>
              </ChakraStat>
            </Stack>

          </Stack>
          <Stack spacing="5">
          <ChakraStat
            px={{ base: 4, sm: 6 }}
            py="5"
            bg={mode('white', 'gray.700')}
            shadow="base"
            rounded="lg"
          >
            <Flex
              as="dl"
              direction={{ base: 'column', sm: 'row' }}
            >
              <Box as="dt" minWidth="180px">
                <Stack spacing={3}>
                  <Text fontWeight="bold" fontSize="lg">
                    Sold for 
                  </Text>
                  <Heading as="h2" size="xl" letterSpacing="tight">
                    1.50 ETH
                  </Heading>
                  <Text fontSize="md" fontWeight="bold" color='gray.500'>
                    $4,569.57
                  </Text>
                </Stack>
              </Box>
              <Box as="dd">
                <Stack spacing={8}>
                  <Text fontWeight="bold" fontSize="lg">
                    Owned by
                  </Text>
                  <Popover placement="top" matchWidth={false} trigger='hover'>
                    <PopoverTrigger>
                      <Button size="lg" leftIcon={<Image src="/images/avatar.jpeg" rounded="full" mx="auto" objectFit="cover" w="9" h="9" />} shadow="base" borderRadius="999px">@jakefried</Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                          <Box mt="5" ml="5" mr="5">
                            <Flex align="center">
                              <Image  src="/images/avatar.jpeg" rounded="full" mx="auto" objectFit="cover" w="16" h="16" />
                              <Spacer />
                              <Button size="lg" height="14" shadow="base" borderRadius="999px">Follow</Button>
                            </Flex>
                          </Box>
                          <Box mt="5" ml="5" mr="5"  mb="5">
                            <Stack spacing={2}>
                                <Heading as="h3" size="lg" fontWeight="bold" letterSpacing="tight">
                                    Jake Fried
                                </Heading>
                                <Text fontSize="xl" fontWeight="bold" color='gray.400'>
                                    @jakefried
                                </Text>
                                <Flex align="center">
                                  <Heading as="h5" size="sm" mr="2" fontWeight="bold" letterSpacing="tight">
                                      Followed by
                                  </Heading>
                                </Flex>
                            </Stack>
                          </Box>
                          <hr />
                          <Box mt="5" ml="5" mr="5"  mb="5">
                            <Stack spacing={2}>
                                <Flex align="center">
                                  <Box mr="3">
                                    <Heading mr="2" as="h5" size="sm">
                                      1
                                    </Heading>
                                    
                                    <Text fontSize="md" color='gray'>
                                      Following
                                    </Text>
                                  </Box>
                                  <Box>
                                    <Heading mr="2" as="h5" size="sm">
                                      2 
                                    </Heading>
                                    
                                    <Text fontSize="md" color='gray'>
                                      Followers
                                    </Text>
                                  </Box>
                                </Flex>
                            </Stack>
                          </Box>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                  
                </Stack>
              </Box>
            </Flex>
              
          </ChakraStat>

          <Stack spacing="5">
            <Box>
              <Heading as="h2" size="lg" letterSpacing="tight">
                Provenance
              </Heading>
            </Box>
            <ChakraStat
              px={{ base: 4, sm: 6 }}
              py="5"
              bg={mode('white', 'gray.700')}
              shadow="base"
              rounded="lg"
            >
              <Flex align="center">
                <Flex align="center" >
                  <Image  src="/images/avatar.jpeg" rounded="full" mx="auto" objectFit="cover" w="9" h="9" />
                  <Box ml="3">
                    <Flex align="center">
                      <Heading mr="2" as="h5" size="sm">
                        Auction settled by 
                      </Heading>
                      <Text cursor="pointer" fontSize="md" color='gray'>
                        @jakefried
                      </Text> 
                    </Flex>
                    
                    <Text fontSize="md" color='gray'>
                      Sep 21, 2021 at 12:44am
                    </Text>
                  </Box>
                </Flex>
                <Spacer />
                <Box  >
                  <ExternalLinkIcon />
                </Box>
              </Flex>
            </ChakraStat>

            <Flex >
              <Box flex="1" marginTop="74px" mr="3">
                <Divider borderColor="black" />
              </Box>
              <Flex direction="column" align="center" textAlign="center">
                <Image  src="/images/avatar.jpeg" rounded="full" mx="auto" objectFit="cover" w="9" h="9" />
                <Box ml="3">
                  <Flex align="center">
                    <Heading mr="2" as="h5" size="sm">
                      Auction won by 
                    </Heading>
                    <Text cursor="pointer" fontSize="md" color='gray'>
                      @jakefried
                    </Text> 
                  </Flex>
                    <Flex align="center">
                      <Heading mr="2" as="h5" size="sm">
                        Sold for 1.50 ETH
                      </Heading>
                      <Text cursor="pointer" fontSize="md" color='gray'>
                        $4569.57
                      </Text> 
                    </Flex>
                  <Text fontSize="md" color='gray'>
                    Sep 21, 2021 at 12:40am
                  </Text>
                </Box>
              </Flex>
              <Box flex="1" marginTop="74px" ml="3">
                <Divider borderColor="black" />
              </Box>
            </Flex>

            <ChakraStat
              px={{ base: 4, sm: 6 }}
              py="5"
              bg={mode('white', 'gray.700')}
              shadow="base"
              rounded="lg"
            >
              <Flex align="center">
                <Flex align="center" >
                  <Image  src="/images/avatar.jpeg" rounded="full" mx="auto" objectFit="cover" w="9" h="9" />
                  <Box ml="3">
                    <Flex align="center">
                      <Heading mr="2" as="h5" size="sm">
                        Auction settled by 
                      </Heading>
                      <Text cursor="pointer" fontSize="md" color='gray'>
                        @jakefried
                      </Text> 
                    </Flex>
                    
                    <Text fontSize="md" color='gray'>
                      Sep 21, 2021 at 12:44am
                    </Text>
                  </Box>
                </Flex>
                <Spacer />
                <Flex align="center" >
                  <Stack spacing={2} mr="7">
                    <Heading as="h5" size="sm" letterSpacing="tight">
                      1.50 ETH
                    </Heading>
                    <Text fontSize="md" fontWeight="bold" color='gray.500'>
                      $4,569.57
                    </Text>
                  </Stack>
                  <ExternalLinkIcon />
                </Flex>
              </Flex>
            </ChakraStat>

            <ChakraStat
              px={{ base: 4, sm: 6 }}
              py="5"
              bg={mode('white', 'gray.700')}
              shadow="base"
              rounded="lg"
            >
              <Flex align="center">
                <Flex align="center" >
                  <Image  src="/images/user.jfif" rounded="full" mx="auto" objectFit="cover" w="9" h="9" />
                  <Box ml="3">
                    <Flex align="center">
                      <Heading mr="2" as="h5" size="sm">
                        Listed by 
                      </Heading>
                      <Text cursor="pointer" fontSize="md" color='gray'>
                        @kitasavi
                      </Text> 
                    </Flex>
                    
                    <Text fontSize="md" color='gray'>
                      Sep 18, 2021 at 11:30pm
                    </Text>
                  </Box>
                </Flex>
                <Spacer />
                <Flex align="center" >
                  <Stack spacing={2} mr="7">
                    <Heading as="h5" size="sm" letterSpacing="tight">
                      1.50 ETH
                    </Heading>
                    <Text fontSize="md" fontWeight="bold" color='gray.500'>
                      $4,569.57
                    </Text>
                  </Stack>
                  <ExternalLinkIcon />
                </Flex>
              </Flex>
            </ChakraStat>

            <ChakraStat
              px={{ base: 4, sm: 6 }}
              py="5"
              bg={mode('white', 'gray.700')}
              shadow="base"
              rounded="lg"
            >
              <Flex align="center">
                <Flex align="center" >
                  <Image  src="/images/user.jfif" rounded="full" mx="auto" objectFit="cover" w="9" h="9" />
                  <Box ml="3">
                    <Flex align="center">
                      <Heading mr="2" as="h5" size="sm">
                        Minted by 
                      </Heading>
                      <Text cursor="pointer" fontSize="md" color='gray'>
                        @kitasavi
                      </Text> 
                    </Flex>
                    
                    <Text fontSize="md" color='gray'>
                      Sep 18, 2021 at 11:29pm
                    </Text>
                  </Box>
                </Flex>
                <Spacer />
                <Box  >
                  <ExternalLinkIcon />
                </Box>
              </Flex>
            </ChakraStat>

          </Stack>
        </Stack>
        </SimpleGrid>
      </Box>

      <Creator />
      <Footer />
    </>
  )
}

ItemPage.defaultProps = {
  id: '1',
  user: 'John Smith',
}

export default ItemPage

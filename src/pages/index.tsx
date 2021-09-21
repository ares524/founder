import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Flex,
  Heading
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/front/Hero'
import { Container } from '../components/front/Container'
import { Header } from '../components/front/Header'
import { Footer } from '../components/front/Footer'

const inner = {
  m: '0 auto',
  maxW: '1040px',
  width: '100%',
  flexGrow: 1,
};

const Index = () => (
  <>
    <Header innerWidth={inner.maxW} />

    <Container height="100vh">
      <Hero />
    </Container>

    <Footer />
  </>
  
)

export default Index

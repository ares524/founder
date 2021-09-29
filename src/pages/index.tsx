

import { Hero } from '../components/front/Hero'
import { Container } from '../components/front/Container'
import { Footer } from '../components/front/Footer'

const inner = {
  m: '0 auto',
  maxW: '1040px',
  width: '100%',
  flexGrow: 1,
};

const Index = () => (
  <>
    <Container height="100vh">
      <Hero />
    </Container>

    <Footer />
  </>
  
)

export default Index

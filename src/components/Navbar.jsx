import { Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Container p={3} bg={"teal.800"} color="white" fontSize='20px'>
        <Flex justify={'space-around'}>
        <Heading size='2xl'>My Library</Heading>
        <Flex justify={'space-between' } w={'30%'}>
        <Link as='Link' to='/'>Home</Link>
        <Link as='Link' to='/login'>Login</Link>
         <Link as='Link' to='/register'>Register</Link>
        </Flex>
        </Flex>
    </Container>
    </>
  )
}

export default Navbar

import { Input, VStack,Button, Flex,Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
const Register = () => {
  const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      useEffect (()=>{},[])
    return (
     <Flex h={'90vh'} justify={'center'} align={'center'}>
       <VStack gap={4} border='2px solid teal' p={'5'} borderRadius={7} w={'sm'}>
          <Heading>Register</Heading>
         <Input type="text" placeholder='Enter Email Here...' value={email} onChange={(e)=>setEmail(e.target.value)}/> 
         <Input type="password" placeholder='Enter Password..' value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <Button onClick={handleRegister} bg={'teal.800'}>Register</Button>
      </VStack>
     </Flex>
    )
}

export default Register

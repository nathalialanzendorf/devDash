
import { Box, Button, HStack, Heading, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function Notfound() {

  return (
    
    <Stack width="60vw" height="60vh" border="1px">
      <Stack w="fit-content">
        <HStack spacing={4}>
          <Link to="/auth/signIn">
              <Button colorScheme="blue">SignIn</Button>
            </Link>
            <Link to="/auth/signUp">
              <Button colorScheme="blue">SignUp</Button>
            </Link>
            <Link to="/dashboard">
              <Button colorScheme="blue">Dashboard</Button>
            </Link>
            <Link to="/auth/nathalialanzendorf">
              <Button colorScheme="blue">My github</Button>
            </Link>
            <Link to="/notfound">
              <Button colorScheme="blue">NotFound</Button>
            </Link>
          </HStack>
      </Stack>
      
      <Box as="form" margin="auto">
        <Stack w="fit-content">
          <Heading textDecoration="underline">DashDev</Heading>
          <Heading fontSize={20}>Esta página não existe.</Heading>
          <Link to="/auth/login">
              <Button colorScheme="gray">Voltar</Button>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
} 
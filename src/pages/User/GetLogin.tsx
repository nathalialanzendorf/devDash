import { Box, Button, HStack, Heading, Spinner, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaHeading } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

interface User {
  login: string,
  bio: string
}

const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function GetUser() {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
    useEffect(() => {
      async function GetUser(){
        setLoading(true);
        await timeout(800);
        const req = await fetch(`https://api.github.com/users/${username}`);
        console.log(req);
        const res = await req.json();
        if (!req.ok) {
          setLoading(false);
          setError("usuário não encontrado");
          return;
        }
        console.log(res);
        setUser(res);
        setLoading(false);
      }
      GetUser();

      }, [])

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
          {user && (
            <>
              <Heading fontSize={25}>{user?.name}</Heading>
              <Text>{user.login}</Text>
              <img src={user?.avatar_url} alt="Avatar" style={{ width: '100px', height: '100px' }} /> {/* Display avatar image */}
              
            </>
          )}
          { loading && (
            <Heading>
              <Spinner
                thickness='4px'
                speed='0.65'
                emptyColor='gray.200'
                color='blue.500'
                size='x1'
                />Carregando...
            </Heading>
          )}
          <div>
            {error && <Text>{error}</Text>}
          </div>
        </Stack>
      </Box>
    </Stack>
  );
}
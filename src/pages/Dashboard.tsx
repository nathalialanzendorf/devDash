
import { useState } from 'react';
import { Box, Button, HStack, Heading, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { ButtonComponent } from '../components/Button/ButtonComponent';
import { H1Component } from '../components/Button/H1Component';

export default function Dashboard() {
  const [isClicked, setIsClicked] = useState(false);

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
          <Heading fontSize={20}>Dashboard</Heading>
          <Button>Botão</Button>
          <ButtonComponent
            onClick={() => setIsClicked(true)}
            clicked={isClicked}
            >
            Botão customizado
          </ButtonComponent>
          <H1Component selected={false}>Texto customizado</H1Component>
          <H1Component selected={true}>Texto Selecionado customizado</H1Component>
        </Stack>
      </Box>
    </Stack>
  );
}
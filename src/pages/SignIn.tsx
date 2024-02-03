import { Box, Button, Heading, Input, Stack, useToast, Text, HStack } from '@chakra-ui/react' 
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

export default function SignUp() {

  const toast = useToast()
  const navigate = useNavigate();
    
  function sucess () {
   toast({
      title: "Login realizado com sucesso!",
      description: "Você está pronto para acessar",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  function error () {
    toast({
       title: "Erro ao realizar o login,",
       description: "Tente novamente!",
       status: "error",
       duration: 3000,
       isClosable: true,
     })
   }

 const loginSchem = z.object({
    username: z.string()
    .email(
      {message: "O usuário deve ser um e-mail válido"}
    ),
    password: z.string()
    .min(6,
      {message: "A senha deve ter no mínimo 6 caracteres"})
    .max(12,
      {message: "A senha deve ter no máximo 12 caracteres"})
  });

  const { register, handleSubmit, formState:{errors}} = useForm({
      resolver: zodResolver(loginSchem)
  });

  function submitForm(data: any) {
    console.log(`Usuário: ${data.username} Senha: ${data.password}`);

    if(data.password === 'admin@' && data.username === 'admin@admin.com'){
      navigate('/auth/nathalialanzendorf');
      sucess();
    }else {
      error();
    }
  }

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

      <Box as="form" margin="auto" onSubmit={handleSubmit(submitForm)}>
        <Stack w="fit-content">
          <Heading textDecoration="underline">DashDev</Heading>
          <Heading fontSize={20}>Login</Heading>
          <Input 
            placeholder="Usuário"
            {...register("username") }
          />
            {errors.username && <Text textColor="red">{errors.username.message as string}</Text>}
          <Input 
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password && <Text textColor="red">{errors.password.message as string}</Text>}
          <Button
            colorScheme="blue" 
            type='submit'>
              SignIn
          </Button>
          </Stack>
        </Box>
    </Stack>
  );
}
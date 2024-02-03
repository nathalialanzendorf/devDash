import { Button, Heading, Input, Stack, useToast, Text, Box, HStack } from '@chakra-ui/react' 
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

export default function SignUp() {

  const toast = useToast()
  // const navigate = useNavigate();

  function sucess () {
    toast({
       title: "Cadastro realizado com sucesso!",
       description: "Você está pronto para logar",
       status: "success",
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
    sucess();
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
          <Heading fontSize={20}>Cadastre-se</Heading>
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
              Salvar
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
} 
import { Box, Button, Heading, Input, Stack, Text, useToast } from '@chakra-ui/react' 
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const toast = useToast()
 // const navigate = useNavigate();
    
  function openNotification () {
  console.log(`Login realizado com sucesso! Email: ${username} Senha: $ ${password}`);
   //  navigate('/dashboard')
    toast({
      title: "Login realizado com sucesso!",
      description: "Você está pronto para acessar",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }
  return (
    <Stack width="60vw" height="60vh" border="1px">
      <Box margin="auto">
        <Stack w="fit-content">
          <Heading>DashDev</Heading>
          <Input 
            placeholder="Usuário" 
            type='username'
            onChange={(e)=>setUsername(e.target.value)}
          />
          <Input 
            placeholder="Senha" 
            type='password' 
            onChange={(e)=>setPassword(e.target.value)}
          />
          {
            password?.length < 5 && (
              <Text fontSize={12} color="red" fontStyle={'italic'}> 
                A senha é muito curta!
              </Text>
            )
          }
          <Button 
            isDisabled={password.length < 5} 
            colorScheme="blue" 
            onClick={()=>openNotification()}>
              Logar
          </Button>
          <Link to="auth/signUp">
            <Button colorScheme="blue">Cadastrar</Button>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}

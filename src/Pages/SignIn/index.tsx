import { Container, Form, FormValidatorAdvisor } from "./styles";

import { Button } from "../../components/Button";
import Input from "../../components/Input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const loginFormSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(3, "A senha deve ter no mínimo 3 caracteres"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  async function handleLogin({ email, password }: LoginFormData) {

    const { data } = await api.get(
      `/users?email=${email}&password=${password}`
    );

      if(data.length  > 0) {
        const user = data[0]
        localStorage.setItem('@ws-front:user', JSON.stringify(user))

        return navigate('/home')
      } else {
        alert('Senha ou e-mail inválidos')
      }
      
    return
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <h1>Login Page</h1>
        <Input placeholder="Insert your email" {...register("email")} />
        <FormValidatorAdvisor>
          {errors.email ? errors.email?.message : ""}
        </FormValidatorAdvisor>

        <Input
          placeholder="Insert your password"
          type="password"
          {...register("password")}
        />

        <FormValidatorAdvisor>
          {errors.password ? errors.password?.message : ""}
        </FormValidatorAdvisor>

        <Button type="submit" title={"SignIn"} isLoading={isSubmitting} />
      </Form>
    </Container>
  );
}

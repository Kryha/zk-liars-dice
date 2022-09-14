import { FC } from "react";
import { useForm } from "react-hook-form";
import { text } from "../../assets/text";

import { Heading1, Heading4, Input, Paragraph, BaseInput } from "../../components";
import { Link, PrimaryButton } from "../../components/buttons";
import { useViewport } from "../../hooks/use-viewport";
import { useAuthState } from "../../service/authentication";
import { AuthContainer, FormContainer, InformationContainer, LoginFormContainer, SignOrJoinContainer } from "./styles";

interface LoginProps {
  username: string;
  password: string;
  email: string;
}

export const LoginForm: FC = () => {
  const authenticateUser = useAuthState((state) => state.authenticateUser);
  const { width, height } = useViewport();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ mode: "onChange", reValidateMode: "onChange" });

  const onSubmit = (username: string, password: string, email: string) => {
    console.log("we are here");
    authenticateUser({ username: username, password: password, email: email }); // TODO: use actual email
  };

  return (
    <LoginFormContainer>
      <InformationContainer>
        <Heading1>{text.loginForm.firstThingsFirst}</Heading1>
        <Heading4>{text.loginForm.whoAreYou}</Heading4>
      </InformationContainer>
      <form onSubmit={handleSubmit((data) => onSubmit(data.username, data.password, data.email))}>
        <FormContainer>
          <Input label={text.loginForm.username} isError={errors.username && errors.username.type === "required"}>
            <BaseInput
              isError={errors.username && errors.username.type === "required"}
              type="text"
              defaultValue=""
              {...register("username", { required: true })}
            />
          </Input>
          <AuthContainer width={width}>
            {/* TODO: add validation */}
            <Input label={text.loginForm.email} isError={errors.email && errors.email.type === "required"}>
              <BaseInput
                isError={errors.email && errors.email.type === "required"}
                type="text"
                defaultValue=""
                {...register("email", { required: true })}
              />
            </Input>
            <Input label={text.loginForm.password}>
              <BaseInput type="password" defaultValue="" {...register("password", { required: true })} />
            </Input>
          </AuthContainer>
          <SignOrJoinContainer width={width} height={height}>
            <Paragraph>{text.loginForm.iAlreadyHaveAnAccount}</Paragraph>
            <Link text={text.loginForm.signIn} />
            <PrimaryButton type="submit" text={text.loginForm.join} />
          </SignOrJoinContainer>
        </FormContainer>
      </form>
    </LoginFormContainer>
  );
};

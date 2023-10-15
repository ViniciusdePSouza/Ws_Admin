import { Container } from "./styles";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, type = "text", ...rest },
    ref
  ) => {
    return (
      <Container>
        <input ref={ref} placeholder={placeholder} type={type} step={type === "number" ? "any" : undefined}  {...rest} />
      </Container>
    );
  }
);


export default Input;
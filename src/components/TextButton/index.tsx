import { Container } from "./styles"
import { ButtonHTMLAttributes } from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
    isLoading: boolean
    icon: string
}

export function TextButton({ title, isLoading, icon,  ...rest }: ButtonProps){


     return (
        <Container
        type='button'
        disabled={isLoading}
        {...rest}
        >
            <img src={icon} />
            {isLoading ? 'Loading' : title}
        </Container>
    )
}
import { ButtonPrimary } from "./style"

interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | string;
    isDisabled: boolean;
}

function ButtonComponent({ children, onClick, isDisabled, ...rest }: ButtonComponentProps) {

    return (
        <>
            <ButtonPrimary isDisabled={isDisabled} onClick={onClick} {...rest}>
                {children}
            </ButtonPrimary>
        </>
    )
}

export default ButtonComponent

import { ButtonPrimary } from "./style"

function ButtonComponent({ children, onClick, isDisabled, ...rest }: { children: React.ReactNode | string; onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; isDisabled: boolean; }) {

    return (
        <>
            <ButtonPrimary isDisabled={isDisabled} onClick={onClick} {...rest}>
                {children}
            </ButtonPrimary>
        </>
    )
}

export default ButtonComponent

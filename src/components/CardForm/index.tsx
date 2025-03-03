import { CardForm } from "./style"

function CardFormComponent({ children }: { children: React.ReactNode; }) {

    return (
        <>
            <CardForm>
                {children}
            </CardForm>
        </>
    )
}

export default CardFormComponent

import { StyledButton } from './Button.styled'

const Button = ({ onClick, text, primary }) => {
    return (
        <StyledButton onClick={onClick} $primary={primary}>{text}</StyledButton>
    )
}

export {
    Button
}
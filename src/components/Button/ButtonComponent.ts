import styled from 'styled-components';

interface ButtonProps {
    clicked: boolean;
}

export const ButtonComponent = styled.button<ButtonProps>`
        background-color: ${props => props.clicked ? 'blue' : 'white'};
        border: solid 1px red;
        padding: 10px 20px;
`;
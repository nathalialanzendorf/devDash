import styled from 'styled-components';

interface H1ComponentProps {
    selected: boolean;
}

export const H1Component = styled.h1<H1ComponentProps>`
        color: #4CAF50;
        font-size: 30px;
        text-align: center;
        color: ${props => props.selected ? 'red' : 'green'};
        font-size: 2em;
`;
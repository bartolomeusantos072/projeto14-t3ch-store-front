import styled from "styled-components"

const Button = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.width};
    height: ${props => props.height ? props.height : '36px'};
    padding: 10px 15px;
    border-radius: 5px;
    background-color: ${props => props.background ? props.background : '#0E1A1E'};

    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.color ? props.color : '#00FF7A'};


    cursor: pointer;
`;

export default Button;
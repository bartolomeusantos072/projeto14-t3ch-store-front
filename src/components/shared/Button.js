import styled from "styled-components"

const Button = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: ${props => props.width};
    height: 36px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #0E1A1E;

    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bold;
    color: #00FF7A;
`;

export default Button;
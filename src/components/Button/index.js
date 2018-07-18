import styled from 'styled-components';


const Button = styled.button`
    background: #4285f4;
    border: none;
    border-radius: 2px;
    padding: 10px;
    color: white;
    font-family: inherit
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 5px 8px rgba(0,0,0,0.1);
    }
`;
 
export default Button;
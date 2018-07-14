import React from 'react';
import styled from 'styled-components';

const List = ({listData}) => {
    console.log(listData);
    return ( 
        <div>
            <Button>
                Normal Text
            </Button>
        </div>
     );
}

const Button = styled.button`
    width: 100%;
    padding: 15px;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        background: #eeeeee;
    }
`;
 
export default List;
import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
    color: rgb(220, 220, 220);
    margin-bottom: 7px;
    font-size: 12px;
    font-weight: bold;
`;

const Votes = ({votes}) => {
    return(
        <Text>✨ {votes} / 10</Text>
    )
}

export default Votes;
import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from "./Poster";
import Votes from "./Votes";
import {trimText} from "../utils";

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const Title = styled.Text`
    color: #fff;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
`;



const Vertical = ({id, poster, title, votes}) => {
    return(
        <Container>
            <Poster url={poster} />
            <Title>{trimText(title, 10)}</Title>
            {votes > 0 && <Votes votes={votes} />}
        </Container>
    )
}

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
}

export default Vertical;
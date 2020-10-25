import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import Poster from "./Poster";
import Votes from "./Votes";
import {apiImage} from "../api";
import {formatDate, trimText} from "../utils";

const Container = styled.View`
    padding: 0 30px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;

const Data = styled.View`
    align-items: flex-start;
    width: 60%;
    margin-left: 25px;
`;

const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
    color: white;
    font-size: 12px;
`;

const Overview = styled.Text`
    margin-top: 10px;
    color: white;
`;

const Horizontal = ({id, title, poster, overview, releaseDate}) => {
    return(
        <TouchableOpacity>
            <Container>
                <Poster url={poster} />
                <Data>
                    <Title>{trimText(title, 20)}</Title>
                    {releaseDate ? (
                        <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
                    ) : null}
                    <Overview>{trimText(overview, 100)}</Overview>
                </Data>
            </Container>
        </TouchableOpacity>
    )
}

Horizontal.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    poster: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
}


export default Horizontal;
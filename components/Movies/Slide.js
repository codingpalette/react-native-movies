import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from "react-native";
import {apiImage} from "../../api";
import Poster from "../Poster";
import Votes from "../Votes";
import {trimText} from "../../utils";




const Container = styled.View`
    width: 100%;
    height: 100%;
`;

const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
`;


const Content = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Data = styled.View`
    width: 50%;
    align-items: flex-start;
`;

const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 10px;
`;

const VotesContainer = styled.View`
    margin-bottom: 7px;
`;

const Overview = styled.Text`
    color: rgb(220, 220, 220);
    font-weight: 500;
    font-size: 14px;
`;

const Button = styled.View`
    background-color: #e74c3c;
    padding: 7px 10px;
    margin-top: 10px;
    border-radius: 3px;
`;

const ButtonText = styled.Text`
    color: #fff;
`;

const Slide = ({id, title, backgroundImage, votes, overview, poster}) => {
    return(
        <Container>
            <BG resizeMode="cover" source={{url: apiImage(backgroundImage)}} />
            <Content>
                <Poster url={poster} />
                <Data>
                    <Title>{trimText(title, 20)}</Title>
                    <VotesContainer>
                        <Votes votes={votes} />
                    </VotesContainer>
                    <Overview>{trimText(overview, 60)}</Overview>
                    <TouchableOpacity>
                        <Button>
                            <ButtonText>자세히 보기</ButtonText>
                        </Button>
                    </TouchableOpacity>

                </Data>
            </Content>
        </Container>
    )
}

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Slide;
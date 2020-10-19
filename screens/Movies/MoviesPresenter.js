import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions, ActivityIndicator } from 'react-native';

const {width, height} = Dimensions.get("screen");

const Container = styled.View`
    flex:1;
    background-color: #000;
    justify-content: center;
`;

const Header = styled.View`
    width: 100%;
    height: ${height / 3}px;
`;

const Section = styled.View`
    height: 100%;
    background-color: red;

`;

const Text = styled.Text`

`;

export default ({ loading, nowPlaying }) => {
    return(
        <Container>
            {loading ? (
                <ActivityIndicator color="#FFF" size="small" />
            ) : (
                <Header>
                    <Swiper controlsEnabled={false} loop timeout={3}>
                        {nowPlaying.map((movie) => (
                            <Section key={movie.id}>
                                <Text>{movie.original_title}</Text>
                            </Section>
                        ))}


                    </Swiper>
                </Header>
            )}

        </Container>
    )
}
import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 4}px;
    margin-bottom: 50px;
`;

const Container = styled.View`
    
`;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;


export default ({ loading, nowPlaying, popular, upcoming }) => {
    return(
        <ScrollView
            style={{backgroundColor:"#000"}}
            contentContainerStyle={{
                flex: loading ? 1 : "auto",
                justifyContent: loading ? "center" : "flex-start"
            }}
        >
            {loading ? (
                <ActivityIndicator color="#FFF" size="small" />
            ) : (
                <>
                    <SliderContainer>
                        <Swiper controlsEnabled={false} loop timeout={3}>
                            {nowPlaying.map((movie) => (
                                <Slide
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    overview={movie.overview}
                                    votes={movie.vote_average}
                                    backgroundImage={movie.backdrop_path}
                                    poster={movie.poster_path}
                                />
                            ))}
                        </Swiper>
                    </SliderContainer>
                    <Container>
                        <Title title={"Popular Movies"} />
                        <ScrollView
                            style={{marginTop:20, marginBottom:40}}
                            contentContainerStyle={{paddingLeft:30}}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {popular.map(movie => (
                                <Vertical
                                    key={movie.id}
                                    id={movie.id}
                                    votes={movie.vote_average}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                />
                            ))}
                        </ScrollView>
                        <Title title={"Coming Soon"} />
                        <UpcomingContainer>
                            {upcoming.map((movie) => (
                                <Horizontal
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    poster={movie.poster_path}
                                    overview={movie.overview}
                                    releaseDate={movie.release_date}
                                />
                            ))}
                        </UpcomingContainer>
                    </Container>
                </>
            )}

        </ScrollView>
    )
}
import React from 'react';
import styled from 'styled-components/native';
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

const Container = styled.ScrollView`
    background-color: #000;
`;

const Text = styled.Text`
    color: #fff;
`;

const SearchPresenter = ({movies, shows, keyword, onChange, onSubmit }) => {
    return(
        <ScrollContainer
            refreshFn={onSubmit}
            loading={false}
            contentContainerStyle={{paddingTop: 10}}
        >
            <Input
                value={keyword}
                onChange={onChange}
                onSubmit={onSubmit}
                placeholder="검색"
            />
            {movies.length !== 0 && (
                <HorizontalSlider title={"Movie Results"}>
                    {movies.map((movie) => (
                        <Vertical
                            key={movie.id}
                            id={movie.id}
                            votes={movie.vote_average}
                            title={movie.title}
                            poster={movie.poster_path || movie.backdrop_path}
                        />
                    ))}
                </HorizontalSlider>
            )}

            {shows.length !== 0 && (
                <HorizontalSlider title={"Show Results"}>
                    {shows.map((show) => (
                        <Vertical
                            key={show.id}
                            id={show.id}
                            votes={show.vote_average}
                            title={show.name}
                            poster={show.poster_path}
                        />
                    ))}
                </HorizontalSlider>
            )}
        </ScrollContainer>
    )
}

export default SearchPresenter;
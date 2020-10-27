import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

const Container = styled.View`
  margin-top: 30px;
`;

const TvPresenter = ({ refreshFn, loading, popular, topRated, today }) => {
    return(
        <>
            <ScrollContainer refreshFn={refreshFn} loading={loading} >
                <Container>
                    <HorizontalSlider title="Popular Shows">
                        {popular.map((show) => (
                            <Vertical
                                key={show.id}
                                id={show.id}
                                votes={show.vote_average}
                                poster={show.poster_path}
                                title={show.name}
                            />
                        ))}
                    </HorizontalSlider>
                    <HorizontalSlider title="Top Rated">
                        {topRated.map((show) => (
                            <Vertical
                                key={show.id}
                                id={show.id}
                                votes={show.vote_average}
                                poster={show.poster_path}
                                title={show.name}
                            />
                        ))}
                    </HorizontalSlider>
                    <List title="Airing Today">
                        {today.map(show => (
                            <Horizontal
                                key={show.id}
                                id={show.id}
                                title={show.name}
                                poster={show.poster_path}
                                overview={show.overview}
                            />
                        ))}
                    </List>
                </Container>
            </ScrollContainer>
        </>
    )
}

export default TvPresenter;
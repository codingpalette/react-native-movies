import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {ActivityIndicator, ScrollView} from "react-native";
import Title from "./Title";
import HorizontalSlider from "./HorizontalSlider";

const Container = styled.View`
    margin-top: 20px;
`;

const List = ({title, children}) => {
    return(
        <>
            <Title title={title} />
            <Container>
                {children}
            </Container>
        </>
    )
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default List;


import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {apiImage} from "../api";


const Image = styled.Image`
    width: 100px;
    height: 160px;
    border-radius: 5px;
`;

const Poster = ({url}) => {
    return(
        <>
            <Image resizeMove="cover" source={{uri: apiImage(url)}} />
        </>
    )
}

Poster.prototype = {
    url: PropTypes.string.isRequired
}

export default Poster;
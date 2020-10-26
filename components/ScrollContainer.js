import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, ScrollView} from "react-native";


const ScrollContainer = ({ loading, children }) => {
    return(
        <>
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
                    {children}
                </>
            )}
        </ScrollView>

        </>
    )
}

ScrollContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default ScrollContainer;
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, ScrollView, RefreshControl} from "react-native";

const ScrollContainer = ({ loading, children, contentContainerStyle, refreshFn }) => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true);
        await refreshFn();
        setRefreshing(false);
    };
    return(
        <>
        <ScrollView
            refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} enabled={false} tintColor={"#fff"}  />}
            style={{backgroundColor:"#000"}}
            contentContainerStyle={{
                flex: loading ? 1 : "auto",
                justifyContent: loading ? "center" : "flex-start",
                ...contentContainerStyle
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
    children: PropTypes.node,
    contentContainerStyle: PropTypes.object,
    refreshFn: PropTypes.func
}

export default ScrollContainer;
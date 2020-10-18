import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import {movieApi} from "../api";


export default ({navigation}) => {

    const getData = async () => {
        const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
        const [popular, popularError] = await movieApi.popular();
    };
    useEffect(() => {
        getData()
    }, [])
    return(
        <View style={{flex:1, backgroundColor:"#000"}}>
            <Text>Movies</Text>
            <Button
                onPress={() => navigation.navigate("Detail")}
                title="Go to Detail"
            />
        </View>
    )
}
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import {movieApi, tvApi} from "../api";


export default () => {
    const [shows, setShows] = useState({
        today: [],
        thisWeek: [],
        popular: [],
        topRated: [],
        todayError: null,
        thisWeekError: null,
        popularError: null,
        topRatedError: null
    })
    const getData = async () => {
        const [today, todayError] = await tvApi.today();
        const [thisWeek, thisWeekError] = await tvApi.thisWeek();
        const [popular, popularError] = await tvApi.popular();
        const [topRated, topRatedError] = await tvApi.topRated();
        setShows({
            today,
            thisWeek,
            popular,
            topRated,
            todayError,
            thisWeekError,
            popularError,
            topRatedError,
        })
    };
    useEffect(() => {
        getData()
    }, [])
    return(
        <View style={{flex:1, backgroundColor:"#000"}}>
            <Text style={{color:"#fff"}}>{shows.today?.length}</Text>
        </View>
    )
}
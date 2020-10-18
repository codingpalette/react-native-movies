import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import {Platform} from "react-native-web";

const Tab = createBottomTabNavigator();

const getHeaderName = (route) => {
    return route?.state?.routeNames[route.state.index] || "Movies"
}

export default ({navigation, route}) => {
    useLayoutEffect(() => {
        const name = getHeaderName(route)
        navigation.setOptions({
            title: name
        })
    }, [route])
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-'
                    if (route.name === 'Movies') {
                        iconName += 'film'
                    } else if (route.name === 'Tv') {
                        iconName += 'tv'
                    } else if (route.name === 'Search') {
                        iconName += 'search'
                    } else if (route.name === 'Favourites') {
                        iconName += 'heart'
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            color={focused? "#fff" : "gray"}
                            size={26}
                        />
                    )
                }
            })}
            tabBarOptions={{
            showLabel: false,
            style:{
                backgroundColor:"#000",
                borderTopColor:"#000"
            }
        }}>
            <Tab.Screen name="Movies" component={Movies} />
            <Tab.Screen name="Tv" component={Tv} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Favourites" component={Favs} />
        </Tab.Navigator>
    )
}
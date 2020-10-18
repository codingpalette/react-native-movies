import React from 'react';
import { Text, View, Button } from 'react-native';


export default ({navigation}) => {
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
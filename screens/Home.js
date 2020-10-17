import React from 'react';
import { Text, View, Button } from 'react-native';


export default ({navigation}) => {
    return(
        <View>
            <Text>Home</Text>
            <Button
                onPress={ () => navigation.navigate("Detail")}
                title="Detail Go"
            />
        </View>
    )
}
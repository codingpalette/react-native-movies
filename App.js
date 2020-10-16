import React, {useState} from 'react';
import {AppLoading} from "expo";
import { Text, Image } from "react-native";
import { Asset } from 'expo-asset';

const cacheImages = (images) => images.map(image => {
    if (typeof image === 'string') {
        return Image.prefetch(image)
    } else {
        return Asset.fromModule(image).downloadAsync();
    }
})

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadAssets = async () => {
        const images = cacheImages([
            "https://placeimg.com/1000/1000/any",
            require("./assets/splash.png")
        ])
        console.log(images)
    }
    const onFinish = () => setIsReady(true);

    return (
        isReady ? (
            <Text>
                Ready1111
            </Text>
        ) : (
            <AppLoading
                startAsync={loadAssets}
                onFinish={onFinish}
                onError={console.error}
        />)
    );
}



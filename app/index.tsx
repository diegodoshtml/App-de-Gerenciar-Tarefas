import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Bem-vindo ao meu App!</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar"onPress={() => {}}/>
        </View>
    );
}
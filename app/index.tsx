import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
    const STARTVALUE = 0;
    const [count, setCount] = useState(STARTVALUE);

    function alterarCount(value: number){
        setCount(count + value);
    }

    return (
        <View>
            <Text>Bem-vindo ao meu App!</Text>
            <Text>Contador: {count}</Text>
            <Button 
                title="Aumentar"
                onPress={() => {setCount(count + 1)}} color="green"/>
                <br></br>
            <Button 
                title="Diminui"
                onPress={() => {setCount(count - 1)}} color="red"/>
                <br></br>
            <Button 
                title="Resetar"
                onPress={() => {setCount(0)}} color="blue"/>
                <br></br>

        </View>
    );
}
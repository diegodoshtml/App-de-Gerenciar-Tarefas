import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
    const nome = "Diego";

    const [count, setCount] = useState(0);
    const [name, setNome] = useState(nome);

    return (
        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text>Bem-vindo ao meu app, {name}!</Text>

            <Text>Contador: {count}</Text>
             <Button title="Aumentar" onPress={() => {setCount(count + 1)}} />
             <Button title="Diminui" onPress={() => {setCount(count - 1)}}/>
             <Button title="Resetar" onPress={() => {setCount(count - count)}}/>

                <TextInput
                 placeholder="Digite seu nome aqui"
                 onChangeText={setNome}
                />

              <CustomButton 
                   title="Botão vermelho"
                   onPress={() => {setNome('Diego ' + count)}}
                />
        </View>
    );
}
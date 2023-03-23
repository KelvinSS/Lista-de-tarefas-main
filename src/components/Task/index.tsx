import { View, Text, TouchableOpacity, Alert } from "react-native";
import CheckBox from 'expo-checkbox';
import { useDispatch } from 'react-redux';

import { styles } from "./style";
import { finishTask, removeTask } from "../../features/counter/counterSlice";

import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    name: string;
    checked: boolean;
}

export function Task({ name, checked }: Props) {
    const dispatch = useDispatch()

    function hadleTaskRemove() {
       Alert.alert('Remover', `Deseja remover a tarefa ${name}?`, [
            {
                text: 'Sim',                
                onPress: () => dispatch(removeTask(name))
            },
            {
                text: 'Cancelar',
                style: 'cancel'
            },
        ]) 
    }

    return (
        <View style={styles.container}>
            <CheckBox style={checked ? styles.check : styles.noCheck}
                value={checked}
                onValueChange={() => dispatch(finishTask(name))}
                color={checked ? '#5E60CE' : undefined}
            />
            <Text style={checked ? styles.nameChecked : styles.name}>
                {name}
            </Text>

            <View style={styles.containerTask}>
                <TouchableOpacity style={styles.button} onPress={hadleTaskRemove}>
                    <Text>
                        <MaterialCommunityIcons name="trash-can-outline" size={24} color="grey" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}



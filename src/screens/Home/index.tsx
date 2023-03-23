import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from 'expo-image';

import { styles } from './style';
import { Task } from '../../components/Task'
import { addTask } from '../../features/counter/counterSlice';
import type { RootState } from '../../../store';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Home() {

  const tasks = useSelector((state: RootState) => state.taskList)
  const [tasksName, setTasksName] = useState('')

  const dispatch = useDispatch()

  function handleTaskAdd() {
    if (tasks.find(handle => handle.name == tasksName)) {
      return Alert.alert('Tarefa já adicionada', 'Você já adicionou essa tarefa')
    }
    var newTask = { name: tasksName, checked: false }

    setTasksName('')
    dispatch(addTask(newTask))
  }

  return (
      <View style={styles.container}>
        <View style={styles.titulo}>
          <View style={styles.rocketIcon}>
            <Image
              style={styles.image}
              source={require('../../../assets/rocket.svg')}
              contentFit="fill"
              contentPosition={'center'}
              transition={1000}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textTitle1}>
              to
            </Text>
            <Text style={styles.textTitle2}>
              do
            </Text>
          </View>
        </View>


        <View style={styles.form}>
          <TextInput style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={'#6b6b6b'}
            onChangeText={setTasksName}
            value={tasksName}
          />
          <View style={styles.divButton}>
            <TouchableOpacity style={styles.button}
              onPress={handleTaskAdd}>
              <Text style={styles.buttonText}>
                <Ionicons name="ios-add-circle-outline" size={24} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerList}>
          <View style={styles.menu}>
            <Text style={styles.created}>
              Criadas {tasks.length}
            </Text>

            <Text style={styles.completed}>
              Concluidas {tasks.filter(tasks => tasks.checked).length}
            </Text>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={item => item.name}
            style={styles.list}
            renderItem={({ item }) => (
              <Task
                key={item.name}
                name={item.name}
                checked={item.checked}
              />
            )}

            ListEmptyComponent={() => (
              <View style={styles.listEmpty}>
                <View>
                  <Feather name="clipboard" size={56} color="grey" />
                </View>
                <Text style={styles.emptyTextTitle}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyText}>
                  Crie tarefas  organize seus itens a fazer
                </Text>

              </View>
            )}
          />
        </View>
      </View>
  )
}

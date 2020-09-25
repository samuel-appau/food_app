import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
    const [task,setTask]=useState('')
    return (
        <View style={{flex:1}}>
            <Header title="MelloTasks" />
            <View style={styles.container}>
            <TextInput
            multiline={true}
            onChangeText={task=>setTask(task)} 
            placeholderColor="#c4c3cb" 
            style={styles.createTextInput} 
            

            />
            <TouchableOpacity>
                <View style={styles.createBtn}>
                    <Text style={styles.createText}>Create</Text>
                </View>

            </TouchableOpacity>
            {/* <Text>HomeScreen</Text> */}

            <View style={styles.taskcontainer}>
              <Text style={styles.task}>Every goal is achieved by preparation and determination</Text>
            </View>
            <View>
                <Text style={styles.author}>-Samuel Appau</Text>

            </View>

            </View>

           
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        width:'96%',
        alignSelf:'center',
        marginTop:100

    },

    createBtn:{
        alignSelf:'center',
        width:80,
        
       backgroundColor:'#0f6abf',
       padding: 10,
       marginHorizontal: 5,
       shadowColor: '#000',
       shadowOffset: {
           width: 0,
           height: 2,
          },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,
    },
    createText:{
        color:'white',
        fontSize:16,
        alignSelf:'center',
        

    },
    createTextInput:{
        height: 59,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#0f6abf",
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop:18,
        marginBottom: 5, 
    },
    task:{
        
        alignSelf:'center',
        textAlign:'center',
        fontSize:20,
        fontFamily: 'montserrat-bold',
        color: "#0f6abf",
    },
    taskcontainer:{
        alignSelf:'center',
        marginTop:30,
       
        
    },
    author:{
        marginTop:20,
        textAlign:'center',
        color: "#0f6abf",
        fontSize:18,
        fontStyle: 'italic'

    }

});

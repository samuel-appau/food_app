import React from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import Header from '../components/Header';
import { Ionicons, AntDesign,MaterialIcons,Fontisto, FontAwesome ,Feather} from '@expo/vector-icons';

const TaskData=[
    {
        id:1,
        task:"Go to the market after class",
   
      },
      {
        id:2,
        task:"Go to the market after class",
   
      },

      {
        id:3,
        task:"Go to the market after class",
   
      },

      {
        id:4,
        task:"Go to the market after class",
   
      },

      {
        id:5,
        task:"Go to the market after class",
   
      },

]

const TaskScreen = () => {


    const TaskDataThumbnail = function ({ item }) {
        
            return (     
                <View style={styles.container}>
                   
                    <View style={styles.content}>
                        <Text style={styles.taskText}>{item.task}</Text>
                        <Feather name="edit-2" size={18} color="#0f6abf" />
                        
                    </View>

                    <View style={styles.bottomContainer}>
                        <View  style={{flexDirection:'row',flex:12}}>
                        <View>
                            <Text  style={styles.taskText}>status</Text>
                        </View>
                        <View style={styles.statusContainer}>
                            <Text style={styles.status}>
                                Not completed
                            </Text>
                        
                        </View>

                        
                    </View>

                    <View style={{flex:1.9,flexDirection:'row',justifyContent:'space-between'}}>
                    <MaterialIcons name="star" size={18} color="#0f6abf" />
                    <Fontisto name="bell-alt" size={16} color="#0f6abf" />

                    </View>
               
                 </View> 

                 </View>
           );
        }
    
        

    return (
        <View>
             <Header title="MelloTasks" />
            <FlatList
                style={{ borderBottomWidth: 0.5, borderBottomColor: '#ccc', flexGrow: 0,marginBottom:8 }}
                contentContainerStyle={{ paddingLeft: 5 }}
                showsHorizontalScrollIndicator={false}
                data={TaskData}
                renderItem={TaskDataThumbnail}
                keyExtractor={(item) => String(item.id)}/>
        </View>
    );
};

export default TaskScreen;

const styles = StyleSheet.create({

    container:{
         width:'94%',
         height:89,
         borderRadius: 7,
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
         marginTop:29
        
    },
    content:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#ccc',
        justifyContent:'space-between',
        height:49

    },
    taskText:{
        color:"#0f6abf",
        fontFamily: 'montserrat-bold'
    },
    bottomContainer:{
        marginTop:5,
        height:20,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    status:{
        color:'white',
        fontSize:10,
        alignSelf:'center',
        marginTop:0.6,
        fontWeight:'bold',
        

    }
    ,statusContainer:{
        height:17.5,
        backgroundColor:'#0f6abf',
        borderRadius:2,
        padding:0.9,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
           },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft:10

    }
});

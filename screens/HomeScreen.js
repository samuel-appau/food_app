import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Platform,FlatList,Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box'
import { SearchBar } from 'react-native-elements'
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';





const CategoryItem = [
    {
      id: 1,
      category: 'BEVERAGES',
      categoryIcon: require('../assets/images/drinks.png'),
      color: '#4287f5'
    },
    {
      id: 2,
      category: 'DESSERT',
      categoryIcon: require('../assets/images/popcorn.png'),
      color: '#09d654'
    },
    {
      id: 3,
      category: 'FRUITS',
      categoryIcon:require('../assets/images/fruit.png'),
      color: '#bff716'
    },
    {
      id: 4,
      category: 'SNACKS AND PASTRIES',
      categoryIcon: require('../assets/images/groceries.png'),
      color: '#fc3b26'
    },
    {
        id: 5,
        category: 'LOCAL FOODS',
        categoryIcon: require('../assets/images/pretzel.png'),
        color: '#09d654'
      },

      {
        id: 6,
        category: 'FOREEIGN FOODS',
        categoryIcon: require('../assets/images/groceries.png'),
        color: '#4287f5'
      },
   
  ];
  

const HomeScreen = () => {

    const imageGallery= [
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" ,
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
       
      ];

    const [search,setSearch]=useState('');
    const [category,setCateegory]=useState(CategoryItem);
    const [images,setImages]=useState(imageGallery);
    
    
    
    //  const SearchFilterFunction=(text)=>{
    //     const newData = arrayholder.filter(function(item) { const itemData = item.title ? item.title.toUpperCase() :
    //     ''.toUpperCase();
    //     const textData = text.toUpperCase(); return itemData.indexOf(textData) > -1;
    //     });
    //     this.setState({ dataSource: newData, search: text,
    //     });
    //     }
    

    
const categoryDataThumbnail = ({ item }) => {
    return (
      <View style={[styles.categoryContainer,{backgroundColor:item.color}]}>
       
  
        <View>
          <Image
            source={item.categoryIcon}
            style={{ width: 70, height: 70, borderRadius: 50, marginTop: 15 }}
          />
        </View>
  
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 11, fontWeight: 'bold', color:'#FFFFFF',marginTop:10}}>{item.category.toUpperCase()}</Text>
        </View>
      </View>
    );
  };

    
    return (
        <View style={styles.container}>
              <SearchBar round
                  searchIcon={{ size: 25 }}
                  inputStyle={{backgroundColor: 'white'}}
                  inputContainerStyle={{
                               backgroundColor: 'white', 
                               borderColor: '#eeeeee',
                               borderWidth: 0.5,
                               borderRadius:4,
                               marginTop:6,
                               marginBottom: 4,
                               shadowColor: '#000',
                               shadowOffset: {
                                width: 0,
                                height: 1
                                           },
                                shadowOpacity: 0.2,
                                shadowRadius: 1.41,
                                elevation: 2,}}
                  containerStyle={{backgroundColor: '#0f6abf', borderBottomWidth: 0.2, borderRadius: 1}}
                  //onChangeText={text => SearchFilterFunction(text)} 
                  //onClear={text => SearchFilterFunction('')} 
                  placeholder="Type Here to Search..." 
                  value={search}
              />

             <SliderBox
              autoplay={true}
              circleLoop={true}
              images={images}
              // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
              // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}

            />

            <View style={{marginTop:20,marginBottom:10}}>
                <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold'}}>Categories</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <FlatList
                numColumns={2}
                key={'*'}
                data={category}
                renderItem={categoryDataThumbnail}
                keyExtractor={(item) => String(item.id)}
              />
              </View>



        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        
    },
    categoryContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 5,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        borderRadius: 5,
        width: '46%'
      },
   
});

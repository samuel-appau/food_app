
import React, { Component, memo } from "react";
import { ImageBackground, View, Image,StyleSheet ,Text} from 'react-native';
// import { connect } from "react-redux";
import {
  Container,
  Content,
  Button,
  Icon
} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'



const Onboarding = class Onboarding extends Component {
  constructor(props) {
    super(props);

    this.slides = [
      {
        key: 'slide1',
        title: "FOOD APPLICATION",
        text: "A mobile application that provide services such as meal order and enhances food delivery to users at their doorstep in short time",
        image: require('../../assets/images/user-interface.png')
      },
      {
        key: 'slide2',
        title: "MAKE AN ORDER",
        text: "You can easily make a meal order with just some few steps",
        image: require('../../assets/images/reservation.png')
      },
      {
        key: 'slide3',
        title: "DELIVERY OF ORDER",
        text: "Orders can be delivered at your door-step",
        image: require('../../assets/images/delivery-man.png')
      }
    ];
  }
  renderItem = ({ item }) => {
    return (
      <View style={[styles.slide,styles.rowXYcenter,{padding:20}]}>
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Image source={item.image} style={styles.slideImage} resizeMode="contain"/>
        <Text style={styles.slideText}>{item.text}</Text>
      </View>
    );
  }
  onDone = () => {
      this.props.navigation.navigate('Login')
  }
  renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
       
        <AntDesign
         name="right"
         size={20}
         style={styles.slideIcon} 
         
         />
      </View>
    );
  };
  renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign 
          name="check" 
          size={20}
          style={styles.slideIcon}
           />
      </View>
    );
  };
  render() {
    return <AppIntroSlider 
      renderItem={this.renderItem} 
      data={this.slides} 
      onDone={this.onDone}
      renderDoneButton={this.renderDoneButton}
      renderNextButton={this.renderNextButton}
      activeDotStyle={styles.activeDotStyle}
      />;
  }
}

// const mapStateToProps = (state) => {
//   return {
//     language: getLanguage(state.settings.languageId),
//     showIntro: state.auth.showIntro
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//       hideIntro: () => dispatch({ type: ActionTypes.SHOWINTRO, showIntro: false })
//     };
// };

// Exports
// export default connect(mapStateToProps, mapDispatchToProps)(memo(appIntro));

export default Onboarding;


const styles=StyleSheet.create({
  rowXYcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide:{
    backgroundColor: '#529F4B',
    flex:1
  },
  slideTitle:{
    color: '#FFF',
    fontSize: 30,
    textAlign:'center',
  },
  slideText:{
    textAlign:'center',
    color: '#FFF'
  },
  slideImage: {
    width: 300,
    height: 300,
  },
  slideIcon: {
    backgroundColor: 'transparent', 
    color: '#FFF',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    color: '#FFF',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCircle:{
    width: 18,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnShadow:{
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
  },
  activeDotStyle:{
    backgroundColor: '#f58c23',
  },
})
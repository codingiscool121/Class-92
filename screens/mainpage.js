import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
 
export default class Motivation extends React.Component{
    constructor(props){
    super(props)   
    this.state={
        emailId: firebase.auth().currentUser.email,
        Username: "",
    }
    }
    componentDidMount(){
        this.getUserDetails()
    }
       
    getUserDetails=()=>{
        db.collection('users').where('emailId', '==', this.state.emailId).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                this.setState({
                    Username:doc.data().Username
                })
            })
        })
    }
    render(){
        
        return(
          
           <View
            style={styles.container}
            >
         <View style={{flexDirection:"row", backgroundColor:"#51a3a3", padding:50}}>
            <Text style={{textAlign:"center", fontSize:40, fontWeight:"bold", marginLeft: "10%"}}>What would you like to do today, {this.state.Username}?</Text></View>
              <TouchableOpacity style={styles.button}
              onPress={()=>{
              this.props.navigation.navigate('Motivation')
              }}
              
              >
                  <Text>
                      Motivate
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text>
                      Entertain
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text>
                      Read
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text>
                      Inspire
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text>
                      Get Info(weather, location, etc)
                  </Text>
              </TouchableOpacity>

                </View>
         )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#FFFFFF",
    },
    title:{
        fontSize:50,
        fontWeight:"bold",
        color:"#546a76",
        marginTop:"1%",
        marginLeft:"35%"
    },
    text:{
        width:"30%",
        height: "10%",
        marginTop: 30,
        color:"#3cab4f",
        padding:10,
        borderWidth: 5,
        borderColor: "#14213d",
        textAlign: "center",
        shadowColor:"#14213d",
        shadowOffset:{width:0,height:10},
        shadowRadius:5,
        shdowOpacity:0.2,
    },
    button:{
        width:500,
        height: 40,
        padding:10,
        backgroundColor:"#0197f6",
        marginRight:10,
        justifyContent: "center",
        textAlign: "center",
        borderRadius:30,
        marginLeft: 30,
        marginTop:30,

    }
})
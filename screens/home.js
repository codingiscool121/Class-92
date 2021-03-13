import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Image} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'
export default class Home extends React.Component {
    render(){
        return(
            <View
            style={styles.container}
            >
            <View style={{flexDirection:"row", backgroundColor:"#51a3a3", padding:50}}>
            <Text style={styles.title}>The Everything Hub</Text>       
                <TouchableOpacity 
                onPress={()=>{
                    this.props.navigation.navigate('Login')
                }}
                style={[styles.button, {marginLeft:300}]}>
                 <Text>Login</Text>
             </TouchableOpacity>
             <TouchableOpacity 
               onPress={()=>{
                this.props.navigation.navigate('SignUp')
            }}
             style={styles.button}>
                 <Text>Sign Up</Text>
             </TouchableOpacity>
            </View>
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
        width:100,
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
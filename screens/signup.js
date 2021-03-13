import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'

export default class SignUp extends React.Component {
 constructor(props){
     super(props)
     this.state={
         emailId: "",
         password: "",
        //  Address: "",
        //  PhoneNumber: "",
         UserId: "",
         Username: "",
         confirmPassword: "",
     }
 }
 userSignUp=()=>{
var password = this.state.password
var confirmPassword=this.state.confirmPassword
var email = this.state.emailId
     console.log(this.state.emailId)
    if(password!==confirmPassword){
    return(
        alert("Your password doesn't match," + this.state.Username)
    )
    }else{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(response=>{
            db.collection('users').add({
                emailId: this.state.emailId,
                Username: this.state.Username,
                confirmPassword: this.state.confirmPassword,
            })    
            this.setState({
                Username:"",
                emailId:"",
                password:"",
                confirmPassword:"",
                UserId: "",
            })
       
              alert("Your account has been created successfully, " + this.state.Username + " and will now be directed to the homepage.")
              this.props.navigation.navigate("MainPage")
        }).catch(function(error){
            return(
                alert("We have encountered an error. Here is what it is: " + error.message + ".")
            )
        })

    }
    }
  
 render(){
     return(
         <View style={styles.container}>
             <Text style={styles.title}> Sign Up For Everything Hub</Text>
             <TextInput
             placeholder="Enter your preferred username."
             placeholderTextColor="#3188d1"
             keyboardType="email-address"
             style={styles.text}
             onChangeText={user => {
                this.setState({
                    Username: user,
                })
              }}
              value={this.state.Username}
             />
             <TextInput
             placeholder="Enter your preferred email address."
             placeholderTextColor="#3188d1"
             keyboardType="email-address"
             style={styles.text}
             onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
              value={this.state.emailId}
             />
             <TextInput
             placeholder="Enter your preffered password"
             placeholderTextColor="#3188d1"
             style={styles.text}
             secureTextEntry={true}
             onChangeText={password=>{
                this.setState({
                    password:password
                })
            }}           
            value={this.state.password} 
             />
             <TextInput
             placeholder="Confirm your password"
             placeholderTextColor="#3188d1"
             style={styles.text}
             secureTextEntry={true}
             onChangeText={confirm=>{
                this.setState({
                    confirmPassword:confirm
                })
            }}    
            value={this.state.confirmPassword}                   
             />
             <TouchableOpacity 
              onPress={()=>{
                  
                this.userSignUp()
            }}
             style={styles.button}>
                 <Text>Sign Up</Text>
             </TouchableOpacity>
        
         </View>
     )
 }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#A3CEF1",
        justifyContent: "center",
        alignItems:"center",
    },
    title:{
        fontSize:50,
        fontWeight:"bold",
        color:"#1153c8"
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
        
        width:"20%",
        height: "5%",
        padding:10,
        backgroundColor:"#0197f6",
        marginTop:100,
        justifyContent: "center",
        textAlign: "center",
        borderRadius:30,
    }
})
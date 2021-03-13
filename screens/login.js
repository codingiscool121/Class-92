import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'

export default class Login extends React.Component {
 constructor(props){
     super(props)
     this.state={
         emailId: "",
         password: "",
     }
 }
 userLogin = (emailId, password) => {
    firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
        return(
            // alert("Welcome," + Username),
            this.props.navigation.navigate('MainPage')
        )
    }).catch(error=>{
        switch(error.code){
            case 'auth/user-not-found':
                alert("It appears that you don't have an account with Everything Hub "+ emailId +". Instead of clicking the Login button, please click the sign up button first. 🧾");
                console.log(error.message)
            break;
            case 'auth/invalid-email':
                alert("Your email is invalid. You should format it to be something like example@domain.com.");
                console.log(error.message)
                break;
            case 'auth/wrong-password':
                alert("Your password is invalid, "+ emailId + "! Please enter the correct password to continue.");
                console.log(error.message)
                break;
                case 'auth/user-disabled':
                    alert("Your account has been disabled, " + emailId + ". Please contact codersaregreat119@gmail.com for assistance. We are very sorry for the inconvenience.")
                   break;
                   case 'auth/too-many-attempts':
                    alert("Your account has been disabled, " + emailId + ". Please contact codersaregreat119@gmail.com for assistance. We are very sorry for the inconvenience.")
                   break;
        }})
        
  };
  forgotPassword = ()=>{
    if(this.state.emailId){
        console.log(this.state.emailId)
        firebase.auth().sendPasswordResetEmail(this.state.emailId)
        alert("A password reset email has been sent to your account.")
    }else{
        alert("Please provide a email Id.")

    }
}
 render(){
     return(
         <View style={styles.container}>
             <Text style={styles.title}> Login To Everything Hub</Text>
             <TextInput
             placeholder="Enter your email address."
             placeholderTextColor="#3188d1"
             keyboardType="email-address"
             style={styles.text}
             onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
             />
             <TextInput
             placeholder="Enter your password"
             placeholderTextColor="#3188d1"
             style={styles.text}
             secureTextEntry={true}
             onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
             />
             <TouchableOpacity  onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }} style={styles.button}>
                 <Text>Login</Text>
             </TouchableOpacity>
             <TouchableOpacity  
             onPress={()=>{
                 this.props.navigation.navigate("SignUp")
             }}
             style={styles.button}>
                 <Text>Sign Up</Text>
             </TouchableOpacity>
             <TouchableOpacity 
              onPress={()=>{
                  
                this.forgotPassword()
            }}
            >
                 <Text style={{fontWeight:"bold", fontSize: 30, marginTop:100}}>Forgot Password?</Text>
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
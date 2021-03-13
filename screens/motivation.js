import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'
const Quote = require('inspirational-quotes');
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default class Motivation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Username: "",
            emailId: firebase.auth().currentUser.email
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

    getQuote(){
       const q= Quote.getRandomQuote()
       return q 
    }
    render(){
        return(
            <View>
            {/* <Text style={{fontWeight:"bold", fontSize:100, alignItems: 'center'}}>{`Hello, ${this.state.Username}` }</Text> */}
            <Card style={{width:"30%", height:"50%", justifyContent:'center', alignItems:"center", marginLeft: 500}}>  
            <Card.Title>A Motivational Quote By Author Nm</Card.Title>          
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
      <Paragraph>{this.getQuote()}</Paragraph>
    </Card.Content>
            </Card>
            </View>
        )
    }
}
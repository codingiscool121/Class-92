import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'


export default class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Quote:""
        }
    }
    render(){
        return(
            <Text>Info Screen</Text>
        )
    }
}
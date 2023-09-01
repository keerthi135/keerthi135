import React, { useState } from 'react'
import { View, Text ,StyleSheet,TextInput,Button} from 'react-native'
import {db} from './config'
import {ref,set} from 'firebase/database'

const AddData = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [name,setname]=useState('');
const dataAddon =()=>
{
  set (ref(db , 'posts/' +title),
    {
      
        title:title,
        body:body,
        name:name,
    });
    setTitle('')
    setBody('')
    setname('')
}
  return ( 
    <View style= {styles.container}>
        <Text style= {styles.header}>Tirunelveli Police Department Data </Text>
        
     
      <TextInput
      placeholder='Cr. No'
      value ={title}
      onChangeText={(text)=> setTitle(text)
       
    } style={styles.input} 
      />
         <TextInput
      placeholder='Selection of Law'
      value ={body}
      onChangeText={(text)=> setBody(text)
   
}
style={styles.input} 
      />
         <TextInput
      placeholder='Accuse Name'
      value ={name}
      onChangeText={(text)=> setname(text)
   
}
style={styles.input}
  />
      <Button 
        title ='Add Data'
        onPress ={dataAddon}
      />
      </View>
   

  )
}

export default AddData

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        
      },
      header: {
        fontSize: 36,
        padding: 24,
        marginTop: 120,
        fontWeight:'Bold',
        textAlign: "center",
      },
      
    
      input: {
        borderwidth :1,
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        paddingRight: 30,
        margin :10,
        padding:10,
        borderRadius:6,
      }
    });

import React, { useState } from "react";

import {StyleSheet,Text,View,TextInput,TouchableOpacity} from "react-native";
import Toast from 'react-native-toast-message';

export default function App() {

  const [Username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });

  return (
    

    <View style={styles.container}>
    
        <Text style={styles.logintxt}>Login</Text>
        <View style={styles.inputView}>
     
     <TextInput

       style={styles.TextInput}

       placeholder="user name"

       placeholderTextColor="#fff"

      

       onChangeText={(username) => setUsername(username)}
       />
       </View>
       <View style={styles.inputView}>
     
        <TextInput

          style={styles.TextInput}

          placeholder="Password"

          placeholderTextColor="#fff"

          secureTextEntry={true}

          onChangeText={(password) => setPassword(password)}

        />

      </View>

      <TouchableOpacity>

        <Text style={styles.forgot_button}>Forgot Password</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>

        <Text style={styles.logintxtinText}>Login</Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'purple',

    alignItems: "center",

    justifyContent: "center",

  },

  image: {

    marginBottom: 20,

  },

  inputView: {

    borderwidth :1,
        height: 40,
        borderColor: "#fff",
        borderBottomWidth: 1,
        paddingRight: 30,
        margin :30,
        padding:10,
        borderRadius:7,
    

  },
  
    

  TextInput: {

    height: 50,

    flex: 1,

    padding:5,

    margintop: 10,

  },

  forgot_button: {

    height: 30,

    marginBottom: 30,

  },

  loginBtn: {

    width: "55%",

    borderRadius: 35,

    height: 35,

    alignItems: "center",

    justifyContent: "center",

    marginTop: 10,

    backgroundColor: "#fff",

  },

  logintxt:{
    fontSize:40,
    height:40,
    margintop:66,
    alignItems:"center",
    color:"white"


    
  },

});
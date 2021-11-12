/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity

} from 'react-native';

import {
  Colors,
  DebugInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const [flexDirection, setflexDirection] = useState("column");

  const backgroundStyle = {
    backgroundColor:Colors.lighter,
  };

  return (
    

    <View style={styles.container}>


        <View style={styles.singleRows}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 100, height: 100 }}
        />

        </View>



        <View style={styles.buttonRow1}> 
          <View>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button</Text>
          </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button</Text>
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonRow2}> 
          <View>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button</Text>
          </TouchableOpacity>
      
          </View>
          <View>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button</Text>
          </TouchableOpacity>
  
          </View>
        </View>

        <View style={styles.singleRows}>
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
        </View>



      </View>

  );
};


const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 100,
    backgroundColor: "#d6d7d7",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  buttonText: {
    textTransform: 'uppercase',
    color: "black",
    fontSize: 15
         
  },
  container: {
    flex: 1, 
    flexDirection: 'column', 
    paddingTop: 10,     
  },
  singleRows:{ 
    margin: 40, 
    alignSelf: 'center',

  },
  buttonRow1:{
    flex: 0, 
    marginTop: 0,
    flexDirection: 'row', 
    justifyContent: 'space-around'

  },
  buttonRow2:{
    flex: 0, 
    marginTop: 40,
    flexDirection: 'row', 
    justifyContent: 'space-around'

  },

});

export default App;

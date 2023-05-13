import React, { useState } from 'react';
import { Dimensions, Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;


function Rating() {
    const [value, setValue] = useState(1);
  
    const handleChange = (newValue) => {
      setValue(newValue);
    };
  
    return (
      <View style={styles.masterContainer}>
        <View style={styles.headerContainer}>

            <View style={styles.header}>
            <Text style={styles.title}>CONNECTED</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>{'Just before we connect you with a mentor, please indicate the severity of the distress you are currently experiencing. \n\nChoose a value from 1 to 5:'}</Text>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, value === 1 && styles.activeButton]}
              onPress={() => handleChange(1)}
            >
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>Not distressed (I just want to chat with someone)</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, value === 2 && styles.activeButton]}
              onPress={() => handleChange(2)}
            >
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>Mildly distressed(I am unhappy but it does not interfere with my functioning)</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, value === 3 && styles.activeButton]}
              onPress={() => handleChange(3)}
            >
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>Moderately distressed(I am quite distressed and just barely managing to function)</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, value === 4 && styles.activeButton]}
              onPress={() => handleChange(4)}
            >
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>Severely distressed(I am highly distressed and unable to function)</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, value === 5 && styles.activeButton]}
              onPress={() => handleChange(5)}
            >
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>Extremely distressed(I am too distressed to function and may pose a risk to myself or others)</Text>
          </View>
        </View>
        <Text style={styles.value}>{`Current value: ${value}`}</Text>

        <View>
        <Button title="Submit" 
                // style={{ backgroundColor: '#FF9900', color:'#6D83A9', borderRadius:'15',backgroundColor:'#EDE5EC'}} 
                color='#6D83A9'
                backgroundColor='#EDE5EC'
                onPress={() => {
          alert('Goes to Chat Page!');
        }}
        />
      </View>

      </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

    masterContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex:1,
        padding:40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerContainer: {
        height:120,
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
      fontSize: 20,
      color: '#6D83A9',
      marginBottom: 10,
      marginHorizontal: 10,
    },
    buttonGroup: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginBottom: 10,
      marginLeft: 30,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginHorizontal: 10,
      marginVertical: 5
    },
    button: {
      backgroundColor: '#EEE',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      borderRadius: 50,
    },
    activeButton: {
      backgroundColor: '#AAA',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#6D83A9',
    },
    buttonLabel: {
      fontSize: 16,
    //   marginLeft: 10,
      marginHorizontal: 30,
      color: '#6D83A9',
    },
    value: {
      fontSize: 20,
      marginVertical: 10,
      color: '#6D83A9',
    },

    header: {
        backgroundColor: '#EDE5EC',
        height: 10,
        width: SCREENWIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        flex: 2,
      },
      title: {
        marginTop: 50,
        fontSize: 25,
        color: '#6D83A9',
        fontWeight: 'bold',
      },
  });
  

export default Rating;

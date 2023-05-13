import { 
    Dimensions, 
    View, 
    Text, 
    StyleSheet,
    Image,
    Button,
    TextInput
  } from 'react-native';
import React from 'react';
const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;


export default function Resource(props) {
    return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.title}>CONNECTED</Text>
        </View>

        
        <Text style={{margin: 20, color: '#6D83A9', fontSize: 30}}>
            Here are a few resources we think will help you
        </Text>
        <Text style={[styles.label, styles.textColor]}/>


        <Text style={{margin: 20, color: '#6D83A9', fontSize: 30}}>
            In addition to this resources, would you like to consult with a mentor?
        </Text>
        
        <View>
            <View>
                <Text style={{margin: 20, color: '#6D83A9', fontSize: 20}}>
                    Gender Match?
                </Text>

                <Text style={{margin: 20, color: '#6D83A9', fontSize: 15}}>
                    I would prefer my mentor to be the same gender as me
                </Text>
            </View>

            <TouchableOpacity style={styles.container} onPress={onChange}>
                <Icon name={checked ? 'check-square-o' : 'square-o'} size={24} color="#000" />
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
          
        </View>
        


    
        <View>
            <Button title="Yes" 
                    // style={{ backgroundColor: '#FF9900', color:'#6D83A9', borderRadius:'15',backgroundColor:'#EDE5EC'}} 
                    color='#6D83A9'
                    backgroundColor='#EDE5EC'
                    onPress={() => {
            props.navigation.navigate('Resource');
            }}
            />
        </View>
    </View>

    );

}


const styles = StyleSheet.create({
  description: {
    flexDirection: "column",
    height: SCREENHEIGHT,
    width: SCREENWIDTH,
    paddingVertical: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 15,
    width: SCREENWIDTH - 50,
    height: 300,
    borderRadius : 20,
    borderColor: '#DACFE0',
    borderWidth: 5,
    margin : 20,
    paddingHorizontal: 10,
    textAlign: 'left',
    alignSelf: 'stretch',
  },

  inputLabel: {
    fontSize: 15,
    width: 200,
    height: 30,
    borderRadius : 20,
    borderColor: '#DACFE0',
    borderWidth: 5,
    textAlign: 'left',
  },

  textColor: {
    color: '#6D83A9',
    textAlign: 'center', 
    textAlignVertical: 'center',
    fontSize: 15,
  },

  header: {
    backgroundColor: '#EDE5EC',
    height: 60,
    width: SCREENWIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    flex: 1,
  },
  title: {
    marginTop: 50,
    fontSize: 25,
    color: '#6D83A9',
    fontWeight: 'bold',
  },

})
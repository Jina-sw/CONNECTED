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

export default function Description(props) {
    return (
      <View style={styles.container}>
        {/* <View
        screenOptions={{
          headerStyle: {
            backgroundColor: '#EDE5EC', // set the background color
          },
          headerTitle: () => ( // set the logo and app name
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../../../assets/icon.png')}
                style={{ width: 30, height: 30, marginRight: 10 }}
              />
              <Text style={{ color: '#6D83A9', fontSize: 20 }}>CONNECTED</Text>
            </View>
          ),
        }}
      > */}
        {/* // </View> */}
        <Text style={{margin: 20, color: '#6D83A9', fontSize: 15}}> Please provide a brief description of the issue you 
          are currently facing. Describe your thoughts, 
          feelings, and any symptoms you may be 
          experiencing. Feel free to mention any specific 
          triggers or events that you believe are related to 
          your mental health concern to for the most appropriate support and resources: </Text>
      <TextInput
        style={[styles.label, styles.textColor]} defaultValue="Please Type Here"
      />
      <Text style={{margin: 20, color: '#6D83A9', fontSize: 15}}> If you are comfortable with it, please provide 
      the following details for us to better tailor 
      your experience: </Text>
      <View style={styles.inputContainer}>
        <Text style={{margin: 20, color: '#6D83A9', fontSize: 20}}> * Gender: </Text>
        <TextInput
        style={[styles.inputLabel, styles.textColor]} defaultValue="Please Type Here"
        />
      </View>

      <Text style={{color: '#6D83A9', fontSize: 12}}> *Please type either: female , male, N/A, or leave it empty </Text>

      <View style={styles.inputContainer}>
        <Text style={{margin: 20, color: '#6D83A9', fontSize: 20, paddingRight: 40}}> Age: </Text>
        <TextInput
        style={[styles.inputLabel, styles.textColor]} defaultValue="Please Type Here"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={{margin: 20, color: '#6D83A9', fontSize: 20}}> Location: </Text>
        <TextInput
        style={[styles.inputLabel, styles.textColor]} defaultValue="Please Type Here"
        />
      </View>

      <View>
        <Button title="Submit" 
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

})
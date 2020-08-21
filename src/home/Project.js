import React, { Component } from 'react';

import { StyleSheet, Text, View, PixelRatio, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

import ImagePicker from 'react-native-image-picker';

import RNFetchBlob from 'rn-fetch-blob';

export default class Project extends Component {

  constructor() {

    super();

    this.state = {

      ImageSource: null,

      data: null,

      Image_TAG: ''

    }
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        this.setState({

          ImageSource: source,
          data: response.data

        });
      }
    });
  }

  uploadImageToServer = () => {

    RNFetchBlob.fetch('POST', 'http://10.82.77.96/Project/upload_image.php', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data },
        { name: 'image_tag', data: this.state.Image_TAG }
      ]).then((resp) => {

        var tempMSG = resp.data;

        tempMSG = tempMSG.replace(/^"|"$/g, '');

        Alert.alert(tempMSG);

      }).catch((err) => {
        // ...
      })

  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>

          <View style={styles.ImageContainer}>

            {this.state.ImageSource === null ? <Text>Select a Photo</Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
            }

          </View>

        </TouchableOpacity>


        <TextInput

          placeholder="Enter Image Name "

          onChangeText={data => this.setState({ Image_TAG: data })}

          underlineColorAndroid='transparent'

          style={styles.TextInputStyle}
        />


        <TouchableOpacity onPress={this.uploadImageToServer} activeOpacity={0.6} style={styles.button} >

          <Text style={styles.TextStyle}> UPLOAD IMAGE TO SERVER </Text>

        </TouchableOpacity>

      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingTop: 20
  },

  ImageContainer: {
    borderRadius: 10,
    width: 250,
    height: 250,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDDC39',

  },

  TextInputStyle: {

    textAlign: 'center',
    height: 40,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#028b53',
    marginTop: 20
  },

  button: {

    width: '80%',
    backgroundColor: '#00BCD4',
    borderRadius: 7,
    marginTop: 20
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    padding: 10
  }

});
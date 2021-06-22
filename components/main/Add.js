import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'

export default function Add() {
  const [camera, setCamera] = useState(null)
  const [hasPermission, setHasPermission] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)
    }
  }

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={styles.flex1}>
      <View style={styles.cameraContainer}>
        <Camera 
          style={styles.fixedRatio} 
          ref={ ref => setCamera(ref)}
          type={type} 
          ratio={'1:1'}
        />
      </View>             
      
      <Button
        title="Flip Image"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
            );
          }}>
      </Button>

      <Button title="Take Picture" onPress={() => takePicture()}></Button>
      {image && <Image source={{ uri: image }} style={styles.flex1}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
      flexDirection: 'row'
  },
  fixedRatio: {
      flex: 1,
      aspectRatio: 1
  },
  flex1: {
    flex: 1
  }
})

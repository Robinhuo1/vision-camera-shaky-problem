import {Image} from "expo-image";
import {StyleSheet, View} from "react-native";

export default function PreviewScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/images/react-logo.png')} contentFit="contain"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
});

import {Pressable, View, StyleSheet} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useRouter} from "expo-router";

export default function FooScreen() {
  const router = useRouter()

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={() => router.navigate('preview')}><ThemedText>Preview</ThemedText></Pressable>
    </View>
  )

}
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

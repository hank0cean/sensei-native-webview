import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `

  return (
    // <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://poppy-dev.pierasystems.com/'
        }}
        // scalesPageToFit={isAndroid() ? false : true}
        injectedJavaScript={INJECTEDJAVASCRIPT}
        style={{ marginTop: 35 }}
      />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

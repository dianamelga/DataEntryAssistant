import React, {ReactNode} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenProps {
  children: ReactNode;
  style?: object;
}

const Screen: React.FC<ScreenProps> = ({children, style}) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, {paddingTop: insets.top}, style]}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 16, // Adjust padding as needed
  },
});

export default Screen;

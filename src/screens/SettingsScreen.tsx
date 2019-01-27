import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

export class SettingsScreen extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Settings Screen </Text>
      </View>
    );
  }
}

export default SettingsScreen;

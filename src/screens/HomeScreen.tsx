import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

class HomeScreen extends PureComponent<NavigationScreenProps> {
  onPress = () => this.props.navigation.navigate('SelectStageScreen');

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> HomeScreen </Text>
        <Button title="Open Modal" onPress={this.onPress} />
      </View>
    );
  }
}

export default HomeScreen;

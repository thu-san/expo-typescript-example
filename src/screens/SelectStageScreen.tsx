import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

class SelectStageScreen extends PureComponent<NavigationScreenProps> {
  onPress = () => this.props.navigation.goBack();
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> SelectStageScreen </Text>
        <Button title="Back" onPress={this.onPress}/>
      </View>
    );
  }
}

export default SelectStageScreen;

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const IncreaseButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'green',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 3,
  },
  buttonStyle: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 5,
    marginRight: 5
  }
};

export { IncreaseButton };

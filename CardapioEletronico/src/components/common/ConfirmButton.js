import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ConfirmButton = ({ onPress, children }) => {
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
    color: '#ff8f00',
    fontSize: 16,
    fontWeight: '100',
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    width: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff8f00',
    marginLeft: 5,
    marginRight: 5
  }
};

export { ConfirmButton };

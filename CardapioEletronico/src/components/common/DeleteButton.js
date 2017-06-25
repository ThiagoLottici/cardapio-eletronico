import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const DeleteButton = ({ onPress, children }) => {
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
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 3,
  },
  buttonStyle: {
    width: 30,
    height: 30,
    backgroundColor: '#fafafa',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'red',
    marginLeft: 5,
    marginRight: 5
  }
};

export { DeleteButton };

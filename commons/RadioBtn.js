import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/colors';
export default function RadioBtn({
  label,
  options,
  selectedOption,
  onPress,
  direction = 'row',
  labelStyle = {},
  mainView = {},
  activeColor = Colors.borderColor,
  deActiveColor = '#787878',
}) {
  return (
    <View>
      <Text style={{}}>{label}</Text>
      <View
        style={{
          flexDirection: direction,
          marginLeft: 10,
          ...mainView,
        }}>
        {options?.map((item, i) => {
          return (
            <View
              style={{
                marginVertical: 10,
                marginRight: 10,
              }}
              key={i}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onPress(item)}
                style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    alignSelf: 'center',
                    height: 20,
                    width: 20,
                    borderWidth: 1,
                    borderRadius: 100,
                    justifyContent: 'center',
                    borderColor:
                      selectedOption == item ? activeColor : deActiveColor,
                  }}>
                  {selectedOption == item && (
                    <View
                      style={{
                        backgroundColor: activeColor,
                        height: 13,
                        width: 13,
                        borderRadius: 100,
                        alignSelf: 'center',
                      }}
                    />
                  )}
                </View>
                <Text style={{ marginLeft: 5, ...labelStyle }}>{item}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

import React from 'react'
import { StyleSheet,Pressable, Text } from 'react-native'

export default function ButtonComponent({
  title,
  style,
  onPress,
  accessibilityLabel,
  ...rest
}) {
  return (
    <Pressable style={{ ...styles.button, ...style }} color="#097303" title={title} onPress={onPress} accessibilityLabel={accessibilityLabel} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#097303',
    color:'#FFFFFF',
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#E8E8E8',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

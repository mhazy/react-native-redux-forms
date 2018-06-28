import React from "react";
import { TextInput, Text, View } from "react-native";

const FormInput = ({
  input,
  label,
  meta: { touched, error, warning },
  ...props
}) => (
  <View>
    <Text>{label}</Text>
    <TextInput
      value={input.value}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      {...props}
    />
    <View>
      {touched && (error && <Text style={{ color: "red" }}>{error}</Text>)}
    </View>
  </View>
);

export default FormInput;

import React from "react";
import { View } from "react-native";
import { reduxForm, Field } from "redux-form";

import FormInput from "../text-input";

const requiredValidator = value =>
  !!value ? undefined : "Value is really required";

const SimpleForm = () => (
  <View>
    <Field
      validate={[requiredValidator]}
      component={FormInput}
      name="first"
      label="First Input"
      style={{ color: "red" }}
    />
    <Field
      validate={[requiredValidator]}
      component={FormInput}
      name="second"
      label="Second Input"
    />
  </View>
);

export default reduxForm({ form: "simple" })(SimpleForm);

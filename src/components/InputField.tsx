import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useField, FieldHookConfig } from "formik";
import React, { ReactElement } from "react";

export type InputFieldProps = FieldHookConfig<string> & {
  name: string;
  placeholder: string;
  label: string;
  mt?: string;
  textarea?: boolean;
};

export function InputField(props: InputFieldProps): ReactElement | null {
  const [field, meta, _helpers] = useField(props);

  const Field = props.textarea ? Textarea : Input;

  return (
    <FormControl isInvalid={!!meta.error} mt={props.mt}>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      <Field
        {...field}
        id={field.name}
        placeholder={props.placeholder}
        type={props.type}
      />
      {meta.error ? <FormErrorMessage>{meta.error}</FormErrorMessage> : null}
    </FormControl>
  );
}

import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
} from '@gezit-native/ui/checkbox';
import { CheckIcon } from '@gezit-native/ui/icon';
import React from 'react';
import { HStack } from '@gezit-native/ui/hstack';

export function CheckboxHorizontal() {
  const [values, setValues] = React.useState(['Illustration']);
  return (
    <CheckboxGroup
      value={values}
      onChange={(keys) => {
        setValues(keys);
      }}
    >
      <HStack space="2xl">
        <Checkbox value="Illustration">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Illustration</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Animation">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Animation</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Typography">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Typography</CheckboxLabel>
        </Checkbox>
      </HStack>
    </CheckboxGroup>
  );
}

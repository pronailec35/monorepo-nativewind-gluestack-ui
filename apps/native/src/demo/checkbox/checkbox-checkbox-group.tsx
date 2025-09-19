import { Center } from '@repo/ui/center';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
} from '@repo/ui/checkbox';
import { CheckIcon } from '@repo/ui/icon';
import { VStack } from '@repo/ui/vstack';
import React from 'react';

export function CheckboxGroupExample() {
  const [values, setValues] = React.useState([]);
  return (
    <Center>
      <CheckboxGroup value={values} onChange={setValues}>
        <VStack space="sm">
          <Checkbox isDisabled={true} value="Label 1">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Label 1</CheckboxLabel>
          </Checkbox>
          <Checkbox value="Label 2">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Label 2</CheckboxLabel>
          </Checkbox>
        </VStack>
      </CheckboxGroup>
    </Center>
  );
}

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

export function CheckboxControlled() {
  const [values, setValues] = React.useState(['UX Research']);
  return (
    <CheckboxGroup
      value={values}
      onChange={(keys) => {
        setValues(keys);
      }}
    >
      <VStack space="md">
        <Checkbox value="UX Research">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>UX Research</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Software">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Software Development</CheckboxLabel>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  );
}

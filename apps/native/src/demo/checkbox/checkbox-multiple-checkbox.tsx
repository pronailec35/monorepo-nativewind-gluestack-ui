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

export function CheckboxMultipleExample() {
  const [values, setValues] = React.useState(['Eng']);
  return (
    <CheckboxGroup
      value={values}
      onChange={(keys) => {
        setValues(keys);
      }}
    >
      <VStack space="xl">
        <Checkbox value="Eng">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Framer</CheckboxLabel>
        </Checkbox>
        <Checkbox value="invison">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Invision Studio</CheckboxLabel>
        </Checkbox>
        <Checkbox value="adobe">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Adobe XD</CheckboxLabel>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  );
}

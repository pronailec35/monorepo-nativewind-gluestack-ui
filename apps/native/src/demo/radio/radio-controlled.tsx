import { VStack } from '@gezit-native/ui/vstack';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@gezit-native/ui/radio';
import { CircleIcon } from '@gezit-native/ui/icon';
import React from 'react';

export function RadioControlled() {
  const [values, setValues] = React.useState('Apartments');
  return (
    <RadioGroup value={values} onChange={setValues}>
      <VStack space="md">
        <Radio value="Apartments">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Apartments</RadioLabel>
        </Radio>
        <Radio value="Houses">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Houses</RadioLabel>
        </Radio>
      </VStack>
    </RadioGroup>
  );
}

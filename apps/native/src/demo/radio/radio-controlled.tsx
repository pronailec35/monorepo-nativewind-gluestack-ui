import { VStack } from '@repo/ui/vstack';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@repo/ui/radio';
import { CircleIcon } from '@repo/ui/icon';
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

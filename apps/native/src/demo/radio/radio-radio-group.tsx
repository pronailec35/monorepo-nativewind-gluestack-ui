import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@gezit-native/ui/radio';
import { VStack } from '@gezit-native/ui/vstack';
import { CircleIcon } from '@gezit-native/ui/icon';
import React from 'react';

export function RadioGroupExample() {
  const [values, setValues] = React.useState('1st');
  return (
    <RadioGroup value={values} onChange={setValues}>
      <VStack space="sm">
        <Radio value="1st">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Label 1</RadioLabel>
        </Radio>
        <Radio value="2nd">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Label 2</RadioLabel>
        </Radio>
        <Radio value="3rd">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Label 3</RadioLabel>
        </Radio>
      </VStack>
    </RadioGroup>
  );
}

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

export function RadioMultipleRadio() {
  const [values, setValues] = React.useState('Eng');
  return (
    <RadioGroup value={values} onChange={setValues}>
      <VStack space="sm">
        <Radio value="Eng">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>English</RadioLabel>
        </Radio>
        <Radio value="Fre">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>French</RadioLabel>
        </Radio>
        <Radio value="Ger">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>German</RadioLabel>
        </Radio>
      </VStack>
    </RadioGroup>
  );
}

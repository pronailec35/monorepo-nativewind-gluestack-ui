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

export function RadioLableLeft() {
  const [values, setValues] = React.useState('Monday');
  return (
    <RadioGroup value={values} onChange={setValues}>
      <VStack space="lg" className="w-40">
        <Radio value="Monday" className="justify-between">
          <RadioLabel>Jane Cooper</RadioLabel>
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
        </Radio>
        <Radio value="Tuesday" className="justify-between">
          <RadioLabel>Wade Warren</RadioLabel>
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
        </Radio>
      </VStack>
    </RadioGroup>
  );
}

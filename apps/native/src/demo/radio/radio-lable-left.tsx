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

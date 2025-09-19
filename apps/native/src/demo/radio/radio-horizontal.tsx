import { HStack } from '@repo/ui/hstack';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@repo/ui/radio';
import { CircleIcon } from '@repo/ui/icon';
import React from 'react';

export function RadioHorizontal() {
  const [values, setValues] = React.useState('Cash On Delivery');
  return (
    <RadioGroup value={values} onChange={setValues}>
      <HStack space="2xl">
        <Radio value="Credit Card">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Credit Card</RadioLabel>
        </Radio>
        <Radio value="Cash On Delivery">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Cash On Delivery</RadioLabel>
        </Radio>
      </HStack>
    </RadioGroup>
  );
}

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

export function RadioUncontrolled() {
  const radioRef = React.useRef(null);
  const handleRadioChange = (e) => {
    e.preventDefault();
    const checkboxValue = radioRef.current.checked;
  };
  return (
    <RadioGroup>
      <VStack space="md">
        <Radio value="Hotels" ref={radioRef} onChange={handleRadioChange}>
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Hotels</RadioLabel>
        </Radio>
        <Radio
          value="Living quarters"
          ref={radioRef}
          onChange={handleRadioChange}
        >
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Living quarters</RadioLabel>
        </Radio>
      </VStack>
    </RadioGroup>
  );
}

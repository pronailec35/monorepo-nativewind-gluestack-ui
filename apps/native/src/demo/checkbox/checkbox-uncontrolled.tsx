import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@repo/ui/checkbox';
import { VStack } from '@repo/ui/vstack';
import { CheckIcon } from '@repo/ui/icon';
import React from 'react';

export function CheckboxUncontrolled() {
  const checkboxRef = React.useRef(null);
  const handleCheckboxChange = (e) => {
    const checkboxValue = checkboxRef.current.checked;
  };
  return (
    <CheckboxGroup ref={checkboxRef}>
      <VStack space="md">
        <Checkbox onChange={handleCheckboxChange} value="Apartments">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Apartments</CheckboxLabel>
        </Checkbox>
        <Checkbox onChange={handleCheckboxChange} value="Residents">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Residents</CheckboxLabel>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  );
}

import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
} from '@gezit-native/ui/checkbox';
import { CheckIcon } from '@gezit-native/ui/icon';
import { VStack } from '@gezit-native/ui/vstack';
import React from 'react';

export function CheckboxLabelLeft() {
  const [values, setValues] = React.useState(['Jane']);
  return (
    <CheckboxGroup
      value={values}
      onChange={(keys) => {
        setValues(keys);
      }}
    >
      <VStack space="lg" className="w-40">
        <Checkbox className="justify-between" value="Jane">
          <CheckboxLabel>Jane Cooper</CheckboxLabel>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
        <Checkbox value="Wade" className="justify-between">
          <CheckboxLabel>Wade Warren</CheckboxLabel>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
        <Checkbox className="justify-between" value="Robert">
          <CheckboxLabel>Robert Fox</CheckboxLabel>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  );
}

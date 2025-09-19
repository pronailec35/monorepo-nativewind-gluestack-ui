import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@repo/ui/checkbox';
import { CheckIcon } from '@repo/ui/icon';

export function CheckboxBasic() {
  return (
    <Checkbox isDisabled={false} isInvalid={false} size="md">
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
}

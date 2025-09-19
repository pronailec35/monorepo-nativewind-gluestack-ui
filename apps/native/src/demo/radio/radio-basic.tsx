import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  RadioLabel,
} from '@gezit-native/ui/radio';
import { CircleIcon } from '@gezit-native/ui/icon';

export function RadioBasic() {
  return (
    <RadioGroup>
      <Radio value="" size="md" isInvalid={false} isDisabled={false}>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label</RadioLabel>
      </Radio>
    </RadioGroup>
  );
}

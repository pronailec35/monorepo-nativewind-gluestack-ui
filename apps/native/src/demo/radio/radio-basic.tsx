import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  RadioLabel,
} from '@repo/ui/radio';
import { CircleIcon } from '@repo/ui/icon';

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

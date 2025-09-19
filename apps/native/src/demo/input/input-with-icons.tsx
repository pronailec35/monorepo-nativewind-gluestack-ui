import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@repo/ui/input';
import { SearchIcon } from '@repo/ui/icon';

export function InputWithIcons() {
  return (
    <Input>
      <InputSlot className="pl-3">
        <InputIcon as={SearchIcon} />
      </InputSlot>
      <InputField placeholder="Search..." />
    </Input>
  );
}

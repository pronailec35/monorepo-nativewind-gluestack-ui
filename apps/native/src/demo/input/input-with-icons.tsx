import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@gezit-native/ui/input';
import { SearchIcon } from '@gezit-native/ui/icon';

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

import { Button, ButtonIcon } from '@gezit-native/ui/button';
import { EditIcon } from '@gezit-native/ui/icon';

export function ButtonIconExample() {
  return (
    <Button size="lg" className="rounded-full p-3.5">
      <ButtonIcon as={EditIcon} />
    </Button>
  );
}

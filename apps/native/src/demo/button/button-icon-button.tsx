import { Button, ButtonIcon } from '@repo/ui/button';
import { EditIcon } from '@repo/ui/icon';

export function ButtonIconExample() {
  return (
    <Button size="lg" className="rounded-full p-3.5">
      <ButtonIcon as={EditIcon} />
    </Button>
  );
}

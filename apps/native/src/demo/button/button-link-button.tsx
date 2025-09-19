import { Button, ButtonIcon, ButtonText } from '@gezit-native/ui/button';
import { ArrowUpIcon } from '@gezit-native/ui/icon';

export function ButtonLink() {
  return (
    <Button variant="link">
      <ButtonText className="font-medium text-sm text-typography-900">
        Back to top
      </ButtonText>
      <ButtonIcon
        as={ArrowUpIcon}
        className="h-3 w-3 text-background-900 ml-1"
      />
    </Button>
  );
}

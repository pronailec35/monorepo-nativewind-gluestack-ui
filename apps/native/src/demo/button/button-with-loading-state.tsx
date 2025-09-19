import { Button, ButtonSpinner, ButtonText } from '@repo/ui/button';

export function ButtonWithLoadingState() {
  return (
    <Button className="p-3">
      <ButtonSpinner color="gray" />
      <ButtonText className="font-medium text-sm ml-2">
        Please wait...
      </ButtonText>
    </Button>
  );
}

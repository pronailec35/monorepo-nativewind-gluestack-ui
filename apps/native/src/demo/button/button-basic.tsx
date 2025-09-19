import { Button, ButtonText } from '@repo/ui/button';

export function ButtonBasic() {
  return (
    <Button variant="solid" size="md" action="primary">
      <ButtonText>Click me</ButtonText>
    </Button>
  );
}

import { FormControl } from '@repo/ui/form-control';
import { Button, ButtonText } from '@repo/ui/button';
import { HStack } from '@repo/ui/hstack';

export function FormControlWithFormActions() {
  return (
    <HStack>
      <FormControl>
        <Button variant="outline" action="secondary">
          <ButtonText>Cancel</ButtonText>
        </Button>
      </FormControl>
      <FormControl>
        <Button action="negative" className="ml-4">
          <ButtonText className="text-white group-hover/button:text-white group-active/button:text-white">
            Delete
          </ButtonText>
        </Button>
      </FormControl>
    </HStack>
  );
}

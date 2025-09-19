import { FormControl } from '@gezit-native/ui/form-control';
import { Button, ButtonText } from '@gezit-native/ui/button';
import { HStack } from '@gezit-native/ui/hstack';

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

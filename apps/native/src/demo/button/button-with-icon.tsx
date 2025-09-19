import { Button, ButtonIcon, ButtonText } from '@gezit-native/ui/button';
import { AddIcon, InfoIcon } from '@gezit-native/ui/icon';
import { Box } from '@gezit-native/ui/box';

export function ButtonWithIcon() {
  return (
    <Box>
      <Button>
        <ButtonIcon as={InfoIcon} className="mr-2" />
        <ButtonText>Left Icon</ButtonText>
      </Button>
      <Button variant="solid" className="mt-2">
        <ButtonText>Right Icon</ButtonText>
        <ButtonIcon as={AddIcon} className="ml-2" />
      </Button>
    </Box>
  );
}

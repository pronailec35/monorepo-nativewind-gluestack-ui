import { Divider } from '@gezit-native/ui/divider';
import { VStack } from '@gezit-native/ui/vstack';
import { HStack } from '@gezit-native/ui/hstack';
import { Button, ButtonText } from '@gezit-native/ui/button';

export function DividerWithWithoutInset() {
  return (
    <VStack space="2xl">
      <HStack className="px-3 h-8 rounded border border-solid border-outline-300">
        <Button variant="link" size="xs">
          <ButtonText>Github</ButtonText>
        </Button>
        <Divider orientation="vertical" className="mx-2.5" />
        <Button variant="link" size="xs">
          <ButtonText>Twitter</ButtonText>
        </Button>
        <Divider orientation="vertical" className="mx-2.5" />
        <Button variant="link" size="xs">
          <ButtonText>Discord</ButtonText>
        </Button>
      </HStack>
      <HStack className="px-3 h-8 rounded border border-solid border-outline-300 items-center">
        <Button variant="link" size="xs">
          <ButtonText>Github</ButtonText>
        </Button>
        <Divider orientation="vertical" className="h-[50%] mx-2.5" />
        <Button variant="link" size="xs">
          <ButtonText>Twitter</ButtonText>
        </Button>
        <Divider orientation="vertical" className="h-[50%] mx-2.5" />
        <Button variant="link" size="xs">
          <ButtonText>Discord</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
}

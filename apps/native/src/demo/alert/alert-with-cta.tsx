import { AlertText, Alert } from '@repo/ui/alert';
import { ButtonText, Button } from '@repo/ui/button';
import { Icon, CloseIcon } from '@repo/ui/icon';
import { VStack } from '@repo/ui/vstack';

export function AlertWithCta() {
  return (
    <Alert
      action="success"
      className="gap-4 max-w-[585px] w-full self-center items-start min-[400px]:items-center"
    >
      <VStack className="gap-4 min-[400px]:flex-row justify-between flex-1 min-[400px]:items-center">
        <AlertText className="font-semibold text-typography-900" size="sm">
          Verify your phone number to create an API key
        </AlertText>
        <Button size="sm" className="hidden sm:flex">
          <ButtonText>Start verification</ButtonText>
        </Button>
      </VStack>
      <Icon as={CloseIcon} />
    </Alert>
  );
}

import { Badge, BadgeText } from '@gezit-native/ui/badge';
import { Box } from '@gezit-native/ui/box';
import { Button, ButtonText } from '@gezit-native/ui/button';
import { VStack } from '@gezit-native/ui/vstack';

export function BadgeComposition() {
  return (
    <Box className="items-center">
      <VStack>
        <Badge
          className="z-10 self-end h-[22px] w-[22px] bg-red-600 rounded-full -mb-3.5 -mr-3.5"
          variant="solid"
        >
          <BadgeText className="text-white">2</BadgeText>
        </Badge>
        <Button>
          <ButtonText>Notifications</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}

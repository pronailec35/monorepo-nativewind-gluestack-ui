import { Badge, BadgeText } from '@repo/ui/badge';
import { Box } from '@repo/ui/box';
import { Button, ButtonText } from '@repo/ui/button';
import { VStack } from '@repo/ui/vstack';

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

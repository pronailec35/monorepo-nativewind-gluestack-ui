import { Box } from '@gezit-native/ui/box';
import { Fab, FabIcon, FabLabel } from '@gezit-native/ui/fab';
import { AddIcon } from '@gezit-native/ui/icon';

export function FabBasic() {
  return (
    <Box className="h-[230px] w-60 bg-background-50 rounded-md">
      <Fab
        size="sm"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
      >
        <FabIcon as={AddIcon} />
        <FabLabel>Quick start</FabLabel>
      </Fab>
    </Box>
  );
}

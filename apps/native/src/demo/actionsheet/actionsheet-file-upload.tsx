import React from 'react';
import { ButtonGroup, ButtonText } from '@gezit-native/ui/button';
import { Button } from '@gezit-native/ui/button';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
} from '@gezit-native/ui/actionsheet';
import { HStack } from '@gezit-native/ui/hstack';
import { Box } from '@gezit-native/ui/box';
import { Heading } from '@gezit-native/ui/heading';
import { Icon, CloseIcon } from '@gezit-native/ui/icon';
import { Pressable } from '@gezit-native/ui/pressable';
import { VStack } from '@gezit-native/ui/vstack';
import { Text } from '@gezit-native/ui/text';
import { UploadCloud } from 'lucide-react-native';

export function ActionsheetFileUpload() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent className="px-5">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <HStack className="justify-between w-full mt-3">
            <VStack>
              <Heading size="md" className="font-semibold">
                Upload your latest resume
              </Heading>
              <Text size="sm">JPG, PDF, PNG supported</Text>
            </VStack>
            <Pressable onPress={handleClose}>
              <Icon
                as={CloseIcon}
                size="lg"
                className="stroke-background-500"
              />
            </Pressable>
          </HStack>
          <Box className="my-[18px] items-center justify-center rounded-xl bg-background-50 border border-dashed border-outline-300 h-[130px] w-full">
            <Icon
              as={UploadCloud}
              className="h-[62px] w-[62px] stroke-background-200"
            />
            <Text size="sm">No files uploaded yet</Text>
          </Box>
          <ButtonGroup className="w-full">
            <Button className="w-full" onPress={handleClose}>
              <ButtonText>Browse files</ButtonText>
            </Button>
            <Button
              className="w-full"
              variant="outline"
              isDisabled
              action="secondary"
            >
              <ButtonText>Upload</ButtonText>
            </Button>
          </ButtonGroup>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

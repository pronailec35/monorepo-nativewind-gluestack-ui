import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} from '@repo/ui/alert-dialog';
import { Button, ButtonText } from '@repo/ui/button';
import { Text } from '@repo/ui/text';
import { Heading } from '@repo/ui/heading';
import React from 'react';
import { Box } from '@repo/ui/box';
import { Icon } from '@repo/ui/icon';
import { UploadCloud } from 'lucide-react-native';
import { VStack } from '@repo/ui/vstack';

export function AlertDialogWithIconsCta() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(false);
  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Upload</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent className="p-4 gap-4 max-w-[649px] w-full md:flex-row mx-2">
          <AlertDialogBody
            className=""
            contentContainerClassName="flex-row gap-4"
          >
            <Box className="h-10 min-[350px]:h-14 w-12 min-[350px]:w-14 rounded-full bg-background-50 items-center justify-center">
              <Icon
                as={UploadCloud}
                className="stroke-background-900"
                size="xl"
              />
            </Box>
            <VStack className="gap-1">
              <Heading size="md" className="text-typography-950 font-semibold">
                Cloud storage full!
              </Heading>
              <Text size="sm">You have used up all the storage you have.</Text>
            </VStack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={handleClose}>
              <ButtonText>Upgrade Storage</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

import React from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@gezit-native/ui/modal';
import { Button, ButtonText } from '@gezit-native/ui/button';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { VStack } from '@gezit-native/ui/vstack';
import { Icon, CloseIcon, CopyIcon } from '@gezit-native/ui/icon';
import { Input, InputField } from '@gezit-native/ui/input';
import { Pressable } from '@gezit-native/ui/pressable';

export function ModalInviteFriends() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Invite</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent className="max-w-[395px]">
          <ModalHeader className="gap-2 items-start">
            <VStack className="gap-1">
              <Heading size="md" className="text-typography-950">
                Invite your team
              </Heading>
              <Text size="sm" className="text-typography-500">
                You have created a new project! Invite colleagues to collaborate
                on this project.
              </Text>
            </VStack>
            <ModalCloseButton>
              <Icon as={CloseIcon} className="stroke-background-500" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody
            className="mb-0"
            contentContainerClassName="gap-4 space-between flex-row items-center"
          >
            <Input variant="outline" size="sm" className="flex-1">
              <InputField placeholder="join.untitledui.com/personalproject" />
            </Input>
            <Pressable className="h-9 w-9 justify-center items-center border border-outline-300 rounded">
              <Icon as={CopyIcon} className="stroke-background-800" />
            </Pressable>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

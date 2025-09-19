import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  ModalFooter,
} from '@gezit-native/ui/modal';
import { Button, ButtonText } from '@gezit-native/ui/button';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { Image } from '@gezit-native/ui/image';
import React from 'react';

export function ModalOnboardingMessage() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Dashboard</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent className="max-w-[375px]">
          <Image
            source={{
              uri: 'https://gluestack.github.io/public-blog-video-assets/Image%20Element.png',
            }}
            alt="image"
            className="h-[185px] w-full rounded"
          />
          <ModalBody className="mb-5" contentContainerClassName="">
            <Heading size="md" className="text-typography-950 text-center">
              Welcome to the dashboard
            </Heading>
            <Text size="sm" className="text-typography-500 text-center">
              We are glad to have you on board, Here are some quick tips to let
              you up and running.
            </Text>
          </ModalBody>
          <ModalFooter className="w-full">
            <Button
              variant="outline"
              action="secondary"
              size="sm"
              onPress={() => {
                setShowModal(false);
              }}
              className="flex-grow"
            >
              <ButtonText>Skip</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              size="sm"
              className="flex-grow"
            >
              <ButtonText>Next</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

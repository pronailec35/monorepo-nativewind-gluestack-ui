import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from '@gezit-native/ui/popover';
import { Button, ButtonText, ButtonIcon } from '@gezit-native/ui/button';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { HStack } from '@gezit-native/ui/hstack';
import { VStack } from '@gezit-native/ui/vstack';
import { Input, InputField } from '@gezit-native/ui/input';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@gezit-native/ui/avatar';
import { ShareIcon, ChevronDownIcon } from '@gezit-native/ui/icon';
import React from 'react';

export function PopoverWithInput() {
  const [showPopover, setShowPopover] = React.useState(false);
  return (
    <Popover
      isOpen={showPopover}
      onClose={() => setShowPopover(false)}
      onOpen={() => setShowPopover(true)}
      offset={8}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps} className="gap-2">
            <ButtonText>Share</ButtonText>
            <ButtonIcon as={ShareIcon} />
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent className="p-5 gap-8 max-w-[473px] w-full native:max-w-[300px]">
        <PopoverHeader className="w-full gap-3">
          <Input size="sm" className="flex-1">
            <InputField placeholder="Email separated by commas" />
          </Input>
          <Button size="sm">
            <ButtonText>Invite</ButtonText>
          </Button>
        </PopoverHeader>
        <PopoverBody className="gap-6">
          <Heading size="sm">People with access</Heading>
          <VStack space="lg">
            <HStack space="4xl" className="items-center">
              <HStack space="md" className="w-full items-center">
                <Avatar>
                  <AvatarFallbackText>JC</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: 'https://i.ibb.co/7R4DyhQ/Avatar-1.jpg',
                    }}
                    alt="Jane Cooper"
                  />
                </Avatar>
                <VStack>
                  <Text size="sm" className="font-semibold text-typography-900">
                    Jane Cooper
                  </Text>
                  <Text size="xs">janecooper09@gmail.com</Text>
                </VStack>
              </HStack>
              <Button variant="link" size="xs" className="gap-1 sm:px-3.5">
                <ButtonText>Can edit</ButtonText>
                <ButtonIcon as={ChevronDownIcon} />
              </Button>
            </HStack>
            <HStack space="4xl" className="items-center">
              <HStack space="md" className="w-full items-center">
                <Avatar>
                  <AvatarFallbackText>CM</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: 'https://i.ibb.co/sQwcjSZ/Avatar-2.png',
                    }}
                    alt="Catherine Miller"
                  />
                </Avatar>
                <VStack>
                  <Text size="sm" className="font-semibold text-typography-900">
                    Catherine Miller
                  </Text>
                  <Text size="xs">catherinemiller88@gmail.com</Text>
                </VStack>
              </HStack>
              <Button variant="link" size="xs" className="gap-1 sm:px-3.5">
                <ButtonText>Admin</ButtonText>
                <ButtonIcon as={ChevronDownIcon} />
              </Button>
            </HStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

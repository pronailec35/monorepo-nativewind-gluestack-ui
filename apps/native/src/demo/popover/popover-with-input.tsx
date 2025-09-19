import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from '@repo/ui/popover';
import { Button, ButtonText, ButtonIcon } from '@repo/ui/button';
import { Heading } from '@repo/ui/heading';
import { Text } from '@repo/ui/text';
import { HStack } from '@repo/ui/hstack';
import { VStack } from '@repo/ui/vstack';
import { Input, InputField } from '@repo/ui/input';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@repo/ui/avatar';
import { ShareIcon, ChevronDownIcon } from '@repo/ui/icon';
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

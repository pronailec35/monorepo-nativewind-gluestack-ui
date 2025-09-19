import { Fab, FabIcon } from '@gezit-native/ui/fab';
import { Box } from '@gezit-native/ui/box';
import { VStack } from '@gezit-native/ui/vstack';
import { HStack } from '@gezit-native/ui/hstack';
import { Avatar, AvatarImage } from '@gezit-native/ui/avatar';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { EditIcon } from '@gezit-native/ui/icon';

export function FabWithIcon() {
  const data = [
    {
      uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Kevin James',
      msg: "Hi Rachel, What's up",
    },
    {
      uri: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Jacob Jones',
      msg: 'Good Morning!',
    },
    {
      uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Albert Flores',
      msg: 'Coffee?',
    },
  ];
  return (
    <Box className="border rounded-lg border-outline-200 p-6 bg-background-100 min-w-[240px] sm:min-w-[360px] md:min-w-[476px]">
      <VStack space="md">
        {data.map((chatData, index) => {
          return (
            <HStack space="sm" className="items-center" key={index}>
              <Avatar size="sm">
                <AvatarImage
                  source={{
                    uri: chatData.uri,
                  }}
                  alt="image"
                />
              </Avatar>
              <VStack>
                <Heading size="xs">{chatData.name}</Heading>
                <Text size="xs">{chatData.msg}</Text>
              </VStack>
            </HStack>
          );
        })}
      </VStack>
      <Fab
        size="lg"
        className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800"
      >
        <FabIcon as={EditIcon} />
      </Fab>
    </Box>
  );
}

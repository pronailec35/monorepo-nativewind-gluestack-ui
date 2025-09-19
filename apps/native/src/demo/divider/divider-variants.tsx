import { Divider } from '@gezit-native/ui/divider';
import { VStack } from '@gezit-native/ui/vstack';
import { HStack } from '@gezit-native/ui/hstack';
import { Text } from '@gezit-native/ui/text';
import { Heading } from '@gezit-native/ui/heading';

export function DividerVariants() {
  return (
    <VStack>
      <Heading>gluestack-ui</Heading>
      <Text>Universal component library</Text>
      <Divider className="my-2 bg-indigo-500" />
      <HStack>
        <Text>Installation</Text>
        <Divider
          orientation="vertical"
          className="mx-2 h-[20px] bg-emerald-500"
        />
        <Text>API Reference</Text>
        <Divider
          orientation="vertical"
          className="mx-2 h-[20px] bg-emerald-500"
        />
        <Text>Examples</Text>
      </HStack>
    </VStack>
  );
}

/* eslint-disable prettier/prettier */
import { Heading } from '@gezit-native/ui/heading';
import { Center } from '@gezit-native/ui/center';

export function HeadingHeadingSizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'] as const;
  return (
    <Center>
      {sizes.map((size, index) => (
        <Heading size={size} key={index}>
          {size}
        </Heading>
      ))}
    </Center>
  );
}

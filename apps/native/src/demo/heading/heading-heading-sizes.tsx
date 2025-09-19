/* eslint-disable prettier/prettier */
import { Heading } from '@repo/ui/heading';
import { Center } from '@repo/ui/center';

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

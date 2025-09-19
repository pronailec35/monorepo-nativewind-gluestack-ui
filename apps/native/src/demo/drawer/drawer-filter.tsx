import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '@gezit-native/ui/drawer';
import { Button, ButtonText } from '@gezit-native/ui/button';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { VStack } from '@gezit-native/ui/vstack';
import { HStack } from '@gezit-native/ui/hstack';
import { Divider } from '@gezit-native/ui/divider';
import {
  CheckboxGroup,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@gezit-native/ui/checkbox';
import { CheckIcon } from '@gezit-native/ui/icon';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@gezit-native/ui/slider';
import React from 'react';

export function DrawerFilter() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [colors, setColors] = React.useState([]);
  return (
    <>
      <Button
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonText>Show Filters</ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
      >
        <DrawerBackdrop />
        <DrawerContent className="px-4 py-3 w-[270px] md:w-[300px]">
          <DrawerHeader>
            <Heading size="md">FILTERS</Heading>
            <Button
              variant="link"
              size="xs"
              onPress={() => {
                setCategories([]);
                setBrands([]);
                setColors([]);
              }}
            >
              <ButtonText>Clear All</ButtonText>
            </Button>
          </DrawerHeader>
          <DrawerBody className="gap-4 mt-0 mb-0">
            <VStack className="pl-2 py-3">
              <Text className="font-semibold" size="sm">
                Categories
              </Text>
              <Divider className="my-1" />
              <CheckboxGroup
                value={categories}
                onChange={(keys) => {
                  setCategories(keys);
                }}
              >
                <VStack className="gap-3 mt-3 ml-1">
                  <HStack className="items-center gap-1">
                    <Checkbox value="tops" size="sm">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Tops</CheckboxLabel>
                    </Checkbox>
                    <Text className="text-typography-500" size="xs">
                      (143,234)
                    </Text>
                  </HStack>
                  <HStack className="items-center gap-1">
                    <Checkbox value="bottoms" size="sm">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Bottoms</CheckboxLabel>
                    </Checkbox>
                    <Text className="text-typography-500" size="xs">
                      (5,431,234)
                    </Text>
                  </HStack>
                </VStack>
              </CheckboxGroup>
            </VStack>
            <VStack className="pl-2 py-3">
              <Text className="font-semibold">Price Range</Text>
              <Divider className="my-1" />
              <VStack className="pt-6 pr-4 ml-1">
                <Slider
                  defaultValue={2000}
                  size="sm"
                  orientation="horizontal"
                  minValue={0}
                  maxValue={10000}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </VStack>
              <HStack className="justify-between pt-2">
                <Text size="sm">0</Text>
                <Text size="sm">10,000</Text>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

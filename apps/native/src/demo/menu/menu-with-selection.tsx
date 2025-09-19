import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from '@gezit-native/ui/menu';
import { Button, ButtonText } from '@gezit-native/ui/button';
import {
  Icon,
  SettingsIcon,
  HelpCircleIcon,
  MessageCircleIcon,
} from '@gezit-native/ui/icon';
import React from 'react';

function Trigger({ ...triggerProps }: typeof Button) {
  return (
    <Button {...triggerProps}>
      <ButtonText>Menu</ButtonText>
    </Button>
  );
}

export function MenuWithSelection() {
  const [selected, setSelected] = React.useState(new Set<string>());

  return (
    <Menu
      placement="bottom left"
      selectionMode="single"
      selectedKeys={selected}
      offset={5}
      className="p-1.5"
      onSelectionChange={(keys) => {
        setSelected(keys as Set<string>);
      }}
      closeOnSelect={true}
      trigger={Trigger}
    >
      <MenuItem
        key="Account Settings"
        textValue="Account Settings"
        className="p-2 web:min-w-[294px] min-w-[225px]"
      >
        <Icon as={SettingsIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Account Settings</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Help Centre" textValue="Help Centre" className="p-2">
        <Icon as={HelpCircleIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Help Centre</MenuItemLabel>
      </MenuItem>
      <MenuItem
        key="Contact Support"
        textValue="Contact Support"
        className="p-2"
      >
        <Icon as={MessageCircleIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Contact Support</MenuItemLabel>
      </MenuItem>
      <MenuSeparator />
      <MenuItem
        key="Download Mobile App"
        textValue="Download Mobile App"
        className="p-2"
      >
        <MenuItemLabel size="sm">Download Mobile App</MenuItemLabel>
      </MenuItem>
      <MenuItem
        key="Install Chrome Extension"
        textValue="Install Chrome Extension"
        className="p-2"
      >
        <MenuItemLabel size="sm">Install Chrome Extension</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}

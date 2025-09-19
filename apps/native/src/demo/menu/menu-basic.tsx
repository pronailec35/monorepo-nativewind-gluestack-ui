import { Menu, MenuItem, MenuItemLabel } from '@repo/ui/menu';
import { Button, ButtonText } from '@repo/ui/button';
import {
  Icon,
  AddIcon,
  GlobeIcon,
  PlayIcon,
  SettingsIcon,
} from '@repo/ui/icon';

function Trigger({ ...triggerProps }: typeof Button) {
  return (
    <Button {...triggerProps}>
      <ButtonText>Menu</ButtonText>
    </Button>
  );
}

export function MenuBasic() {
  return (
    <Menu
      placement="top"
      offset={5}
      disabledKeys={['Settings']}
      trigger={Trigger}
    >
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PlayIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <Icon as={SettingsIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}

import { Icon } from '@repo/ui/icon';
import { VStack } from '@repo/ui/vstack';
import {
  Camera,
  ChromeIcon,
  InstagramIcon,
  FacebookIcon,
} from 'lucide-react-native';

export function IconLucide() {
  return (
    <VStack space="md" className="items-center">
      <Icon className="text-typography-500" as={Camera} />
      <Icon className="text-typography-500" as={ChromeIcon} />
      <Icon className="text-typography-500" as={InstagramIcon} />
      <Icon className="text-typography-500" as={FacebookIcon} />
    </VStack>
  );
}

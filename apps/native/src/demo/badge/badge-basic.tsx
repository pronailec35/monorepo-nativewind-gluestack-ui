import { Badge, BadgeText, BadgeIcon } from '@gezit-native/ui/badge';
import { GlobeIcon } from '@gezit-native/ui/icon';

export function BadgeBasic() {
  return (
    <Badge size="lg" variant="solid" action="muted">
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
}

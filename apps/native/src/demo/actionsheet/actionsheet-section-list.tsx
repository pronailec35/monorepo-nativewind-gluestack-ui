import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetSectionHeaderText,
  ActionsheetSectionList,
} from '@gezit-native/ui/actionsheet';
import { Button, ButtonText } from '@gezit-native/ui/button';
import React from 'react';

export function ActionsheetSectionListExample() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  const DATA = [
    {
      title: 'Gender',
      data: ['Men', 'Women', 'Boy', 'Girl'],
    },
  ];
  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        snapPoints={[35]}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetSectionList
            h="$56"
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>{item}</ActionsheetItemText>
              </ActionsheetItem>
            )}
            renderSectionHeader={({ section: { title, data } }) => (
              <ActionsheetSectionHeaderText>
                {title} ({data.length})
              </ActionsheetSectionHeaderText>
            )}
          />
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

import {
  ActionsheetItem,
  ActionsheetItemText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetVirtualizedList,
} from '@gezit-native/ui/actionsheet';
import { ButtonText } from '@gezit-native/ui/button';
import React from 'react';
import { Button } from '@gezit-native/ui/button';

export function ActionsheetViertualizedListExample() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  const data = React.useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => 'Item' + index),
    []
  );
  const getItem = (_data, index) => ({
    id: index,
    title: _data[index],
  });
  const getItemCount = (_data) => _data.length;
  const Item = React.useCallback(
    ({ title }) => (
      <ActionsheetItem onPress={handleClose}>
        <ActionsheetItemText>{title}</ActionsheetItemText>
      </ActionsheetItem>
    ),
    [handleClose]
  );
  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        snapPoints={[50]}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetVirtualizedList
            h="$56"
            data={data}
            initialNumToRender={5}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

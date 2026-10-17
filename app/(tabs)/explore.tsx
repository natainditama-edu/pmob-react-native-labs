import { Text, View } from "@tamagui/core";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1, flexGrow: 1, flexShrink: 1 }}>
      <View flex={1} gap="4" padding="5" backgroundColor="background">
        <Text fontSize="8" fontWeight="bold" color="color" marginBottom="2">
          Explore
        </Text>
        <Accordion type="single" collapsible width="100%">
          <AccordionItem value="file-routing">
            <AccordionTrigger>
              <Text>File-based routing</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text fontSize="4" color="color-11">
                This app has two screens configured with Expo Router and Tamagui primitives.
              </Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </View>
    </SafeAreaView>
  );
}

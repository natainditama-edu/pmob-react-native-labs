import { Text, View } from "@tamagui/core";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

export default function TabTwoScreen() {
  return (
    <View flex={1} flexGrow={1} flexShrink={1} backgroundColor="background">
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
        <View flex={1} gap="4" padding="5" justifyContent="flex-start" alignItems="flex-start">
          <Text fontSize="8" fontWeight="bold" color="color-11" marginBottom="2">
            Explore
          </Text>

          <Accordion type="single" collapsible width="100%">
            <AccordionItem value="file-routing">
              <AccordionTrigger>
                <Text fontSize="4" color="color-11">
                  File-based routing
                </Text>
              </AccordionTrigger>
              <AccordionContent paddingVertical="4">
                <Text fontSize="2" color="color-7">
                  This app has two screens configured with Expo Router and Tamagui primitives.
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </View>
      </SafeAreaView>
    </View>
  );
}

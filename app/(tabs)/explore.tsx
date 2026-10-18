import { Text, View } from "@tamagui/core";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function ExploreScreen() {
  const [isShowingHello, setIsShowingHello] = useState(false);
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleToggleHello = () => {
    setIsShowingHello((prev) => !prev);
  };

  const handleSubmitText = () => {
    setSubmittedText(inputText);
  };

  return (
    <View flex={1} flexGrow={1} flexShrink={1} backgroundColor="$background">
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, flexGrow: 1, flexShrink: 1 }}
          contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 48 }}
          showsVerticalScrollIndicator={false}
        >
          <View marginBottom="$4">
            <Text fontSize="$8" fontWeight="bold" color="$color11" marginBottom="$2">
              Tugas Mandiri
            </Text>
            <Text fontSize="$3" color="$color11">
              Modul II: Props, State &amp; Methods
            </Text>
          </View>

          <View gap="$4">
            <View
              gap="$2"
              padding="$4"
              borderWidth={1}
              borderRadius="$3"
              borderColor="$color5"
              backgroundColor="$color1"
            >
              <Text fontSize="$4" fontWeight="bold" color="$color">
                Toggle Hello World
              </Text>
              <Text fontSize="$2" color="$color11" marginBottom="$2" numberOfLines={1}>
                Menampilkan dan menyembunyikan teks Hello World menggunakan tombol dinamis.
              </Text>
              <Button
                fontWeight="600"
                color={isShowingHello ? "$color" : "$background"}
                backgroundColor={isShowingHello ? "$color4" : "$color"}
                onPress={handleToggleHello}
              >
                {isShowingHello ? "Sembunyikan" : "Tampilkan"}
              </Button>
              {isShowingHello && (
                <View
                  marginTop="$2"
                  padding="$3"
                  borderRadius="$3"
                  borderWidth={1}
                  borderColor="$color5"
                  backgroundColor="$color3"
                  alignItems="center"
                >
                  <Text fontSize="$6" fontWeight="bold" color="$color">
                    Hello World
                  </Text>
                </View>
              )}
            </View>

            <View
              gap="$3"
              padding="$4"
              borderWidth={1}
              borderRadius="$3"
              borderColor="$color5"
              backgroundColor="$color1"
            >
              <Text fontSize="$4" fontWeight="bold" color="$color">
                Form Input Teks
              </Text>
              <Text fontSize="$2" color="$color11" marginBottom="$2" numberOfLines={1}>
                Menampilkan teks hasil ketikan pengguna saat tombol submit ditekan.
              </Text>
              <Input
                value={inputText}
                onChangeText={setInputText}
                placeholder="Ketik teks di sini..."
                borderColor="$color5"
                backgroundColor="$color2"
                color="$color"
                placeholderTextColor="$color8"
              />
              <Button fontWeight="600" color="$background" backgroundColor="$color" onPress={handleSubmitText}>
                Submit
              </Button>
              {Boolean(submittedText) && (
                <View
                  marginTop="$2"
                  padding="$3"
                  borderRadius="$3"
                  borderWidth={1}
                  borderColor="$color5"
                  backgroundColor="$color3"
                  gap="$1"
                >
                  <Text fontSize="$2" color="$color11">
                    Teks yang Diinput:
                  </Text>
                  <Text fontSize="$5" fontWeight="bold" color="$color">
                    {submittedText}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

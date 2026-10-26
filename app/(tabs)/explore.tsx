import { Text, View } from "@tamagui/core";
import { Link, useNavigation, usePathname, useRouter, useSegments } from "expo-router";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function ExploreScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const pathname = usePathname();
  const segments = useSegments();

  const [inputRoute, setInputRoute] = useState("/");
  const [navHistory, setNavHistory] = useState<string[]>([]);

  const handleNavigateToRoute = () => {
    const target = inputRoute.trim();
    if (!target) return;
    setNavHistory((prev) => [target, ...prev]);
    router.push(target as any);
  };

  const handleGoBack = () => {
    navigation.canGoBack() && navigation.goBack();
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
              Modul IV: Screen Navigation with Expo Router
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
                Expo Router
              </Text>
              <Text fontSize="$2" color="$color11" marginBottom="$2" numberOfLines={1}>
                Navigasi antar tab menggunakan komponen Link dan useRouter dari Expo Router.
              </Text>

              <View
                padding="$3"
                borderRadius="$3"
                borderWidth={1}
                borderColor="$color5"
                backgroundColor="$color2"
                gap="$1"
                marginBottom="$2"
              >
                <Text fontSize="$1" color="$color11">
                  Rute Pathname Aktif:
                </Text>
                <Text fontSize="$4" fontWeight="bold" color="$color">
                  {pathname}
                </Text>
                <Text fontSize="$1" color="$color11" marginTop="$1">
                  Segmen Rute: {segments.join(" / ") || "(tabs)"}
                </Text>
              </View>

              <Link href="/" asChild>
                <Button fontWeight="600" size="$3" color="$background" backgroundColor="$color">
                  Pindah ke Home Tab via Link
                </Button>
              </Link>

              <Button fontWeight="600" size="$3" color="$color" backgroundColor="$color4" onPress={() => router.push("/")}>
                Pindah ke Home via useRouter
              </Button>
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
                Stack &amp; Screen Navigation
              </Text>
              <Text fontSize="$2" color="$color11" marginBottom="$2" numberOfLines={1}>
                Navigasi rute dinamis dan pengelolaan tumpukan layar menggunakan useNavigation.
              </Text>

              <Input
                value={inputRoute}
                onChangeText={setInputRoute}
                placeholder="Ketik rute tujuan..."
                borderColor="$color5"
                backgroundColor="$color2"
                color="$color"
                placeholderTextColor="$color8"
              />

              <Button fontWeight="600" size="$3" color="$background" backgroundColor="$color" onPress={handleNavigateToRoute}>
                Navigasi ke Rute Tujuan
              </Button>

              <Button fontWeight="600" size="$3" color="$color" backgroundColor="$color4" onPress={handleGoBack}>
                Kembali ke Layar Sebelumnya
              </Button>

              {navHistory.length > 0 && (
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
                    Riwayat Navigasi Terakhir:
                  </Text>
                  <Text fontSize="$4" fontWeight="bold" color="$color">
                    {navHistory[0]}
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

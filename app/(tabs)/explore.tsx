import { Text, View } from "@tamagui/core";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components/button";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1790059718313-ffc4963313d0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
];

export default function ExploreScreen() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [showGallery, setShowGallery] = useState(false);

  const handleShowAlert = () => {
    Alert.alert("Primakara Luar Biasa", "Tugas Mandiri: Pemrograman Mobile");
  };

  const handleLoadPhotos = async () => {
    setShowGallery((prev) => !prev);
    !showGallery &&
      ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsMultipleSelection: true,
        selectionLimit: 10,
      })
        .then((res) => {
          const uris = res.assets?.map((asset) => asset.uri) ?? [];
          setPhotos(uris.length > 0 ? uris : FALLBACK_IMAGES);
        })
        .catch(() => setPhotos(FALLBACK_IMAGES));
  };

  return (
    <View flex={1} flexGrow={1} flexShrink={1} backgroundColor="$background">
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, flexGrow: 1, flexShrink: 1 }}
          contentContainerStyle={{ padding: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View marginBottom="$4">
            <Text fontSize="$8" fontWeight="bold" color="$color11" marginBottom="$2">
              Tugas Mandiri
            </Text>
            <Text fontSize="$3" color="$color11">
              Modul I: Basic Component, Layouting &amp; Styling
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
                Alert Primakara
              </Text>
              <Text fontSize="$2" color="$color11" marginBottom="$2" numberOfLines={1}>
                Menampilkan alert &quot;Primakara Luar Biasa&quot; menggunakan component Alert.
              </Text>
              <Button backgroundColor="$color" color="$background" fontWeight="600" onPress={handleShowAlert}>
                Tampilkan Alert
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
                Gallery CameraRoll
              </Text>
              <Text fontSize="$2" color="$color11" marginBottom="$2" numberOfLines={1}>
                Menampilkan 10 gambar dari gallery menggunakan component CameraRoll.
              </Text>
              <Button
                fontWeight="600"
                color={showGallery ? "$color" : "$background"}
                backgroundColor={showGallery ? "$color4" : "$color"}
                onPress={handleLoadPhotos}
              >
                {showGallery ? "Sembunyikan Galeri" : "Tampilkan Gambar Galeri"}
              </Button>

              {showGallery && (
                <View flexDirection="row" flexWrap="wrap" justifyContent="space-between" marginTop="$2">
                  {photos.map((uri, index) => (
                    <View
                      width="48%"
                      borderWidth={1}
                      overflow="hidden"
                      borderRadius="$3"
                      marginBottom="$3"
                      borderColor="$color4"
                      key={`${uri}-${index}`}
                      backgroundColor="$color2"
                    >
                      <Image source={{ uri }} style={{ width: "100%", height: 120 }} resizeMode="cover" />
                      <View padding="$2" flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Text fontSize="$1" fontWeight="600" color="$color" numberOfLines={1}>
                          Gambar {index + 1}
                        </Text>
                        <Text fontSize="$1" color="$color11">
                          {index + 1}/10
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

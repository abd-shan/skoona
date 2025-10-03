import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import Animated, { FadeInUp, ZoomIn } from 'react-native-reanimated';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFD54F', dark: '#FFB300' }}
      headerImage={
        <Animated.View entering={ZoomIn.duration(1000).springify()}>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.headerImage}
          />
        </Animated.View>
      }>
      <ThemedView style={styles.centered}>
        <Animated.View entering={FadeInUp.duration(800).delay(200)}>
          <ThemedText type="title" style={styles.title}>
            🎉 مرحبًا بك في تطبيقي الأول 🎉
          </ThemedText>
        </Animated.View>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.centered}>
        <Animated.View entering={FadeInUp.duration(1000).delay(400)}>
          <ThemedText type="subtitle">
            هذا هو أول مشروع React Native لي باستخدام Expo 🚀
          </ThemedText>
        </Animated.View>
        <Animated.View entering={FadeInUp.duration(1200).delay(600)}>
          <ThemedText style={styles.text}>
            متحمس أتعلم، أبدع، وأبني تطبيقات رائعة!
          </ThemedText>
        </Animated.View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
  centered: {
    alignItems: 'center',
    gap: 12,
    marginVertical: 20,
  },
  title: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.8,
  },
});

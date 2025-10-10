import ParallaxScrollView from '@/src/components/parallax-scroll-view';
import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { IconSymbol } from '@/src/components/ui/icon-symbol';
import { StyleSheet } from 'react-native';
import Animated, { FadeInDown, ZoomIn } from 'react-native-reanimated';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#81C784', dark: '#388E3C' }}
      headerImage={
        <Animated.View entering={ZoomIn.duration(1000).springify()}>
          <IconSymbol
            size={250}
            color="#ffffff"
            name="sparkles"
            style={styles.headerIcon}
          />
        </Animated.View>
      }>
      <ThemedView style={styles.centered}>
        <Animated.View entering={FadeInDown.duration(900).delay(200)}>
          <ThemedText type="title" style={styles.title}>
            ✨ رحلة الاستكشاف تبدأ من هنا ✨
          </ThemedText>
        </Animated.View>
      </ThemedView>

      <ThemedView style={styles.centered}>
        <Animated.View entering={FadeInDown.duration(1000).delay(400)}>
          <ThemedText type="subtitle">
            انطلق، جرّب المكونات، وابنِ أفكارك بخطوة بخطوة.
          </ThemedText>
        </Animated.View>
        <Animated.View entering={FadeInDown.duration(1200).delay(600)}>
          <ThemedText style={styles.text}>
            هذا التطبيق مجرد البداية… القادم أجمل 🌟
          </ThemedText>
        </Animated.View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    alignSelf: 'center',
    marginTop: 30,
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

import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp, ZoomIn } from 'react-native-reanimated';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const [news, setNews] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);


  const cards = [
    {
      id: '1',
      image: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Card+1',
      title: 'بطاقة احترافية',
      description: 'هذا وصف بطريقة احترافية للبطاقة الأولى في السلايدر'
    },
    {
      id: '2', 
      image: 'https://via.placeholder.com/300x200/2196F3/FFFFFF?text=Card+2',
      title: 'تصميم متطور',
      description: 'وصف البطاقة الثانية مع تصميم أنيق وجذاب'
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Card+3',
      title: 'واجهة مبتكرة',
      description: 'البطاقة الثالثة تعرض وصفًا احترافيًا للتطبيق'
    }
  ];


  useEffect(() => {

    const mockNews = [
      {
        id: '1',
        title: 'أخبار التكنولوجيا اليوم',
        description: 'أحدث التطورات في عالم التكنولوجيا والبرمجة',
        date: '2023-10-15'
      },
      {
        id: '2',
        title: 'تحديثات React Native',
        description: 'أحدث التحديثات والمزايا في إطار العمل',
        date: '2023-10-14'
      },
      {
        id: '3', 
        title: 'نصائح للمطورين',
        description: 'نصائح قيمة لتحسين أداء التطبيقات',
        date: '2023-10-13'
      }
    ];
    setNews(mockNews);
  }, []);

  const handleVentPress = () => {
    // هنا يمكنك إضافة التنقل لشاشة الفضفض
    alert('مرحبًا! يمكنك التحدث بحرية هنا');
  };

  const renderNewsItem = ({ item }:any) => (
    <ThemedView style={styles.newsCard}>
      <ThemedText type="subtitle" style={styles.newsTitle}>
        {item.title}
      </ThemedText>
      <ThemedText style={styles.newsDescription}>
        {item.description}
      </ThemedText>
      <ThemedText style={styles.newsDate}>
        {item.date}
      </ThemedText>
    </ThemedView>
  );

  const renderCard = ({ item, index }:any) => (
    <TouchableOpacity 
      style={[
        styles.card,
        index === currentCardIndex && styles.activeCard
      ]}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
        contentFit="cover"
      />
      <ThemedView style={styles.cardContent}>
        <ThemedText type="title" style={styles.cardTitle}>
          {item.title}
        </ThemedText>
        <ThemedText style={styles.cardDescription}>
          {item.description}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );

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

      {/* قسم زر الفضفض */}
      <ThemedView style={styles.section}>
        <Animated.View entering={FadeInUp.duration(1000).delay(400)}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            مساحة التعبير
          </ThemedText>
        </Animated.View>
        <Animated.View entering={FadeInUp.duration(1200).delay(600)}>
          <TouchableOpacity 
            style={styles.ventButton}
            onPress={handleVentPress}
          >
            <ThemedText style={styles.ventButtonText}>
              فضفض
            </ThemedText>
          </TouchableOpacity>
        </Animated.View>
      </ThemedView>

      {/* قسم السلايدر */}
      <ThemedView style={styles.section}>
        <Animated.View entering={FadeInUp.duration(1000).delay(800)}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            البطاقات المتعددة
          </ThemedText>
        </Animated.View>
        <FlatList
          data={cards}
          renderItem={renderCard}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={styles.cardsContainer}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
            );
            setCurrentCardIndex(newIndex);
          }}
        />
      </ThemedView>

      {/* قسم الأخبار */}
      <ThemedView style={styles.section}>
        <Animated.View entering={FadeInUp.duration(1000).delay(1000)}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            آخر الأخبار
          </ThemedText>
        </Animated.View>
        <FlatList
          data={news}
          renderItem={renderNewsItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          style={styles.newsList}
        />
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
  section: {
    marginVertical: 25,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 22,
    fontWeight: 'bold',
  },
  ventButton: {
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  ventButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardsContainer: {
    marginHorizontal: -16,
  },
  card: {
    width: 300,
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  activeCard: {
    transform: [{ scale: 1.02 }],
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'right',
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'right',
    opacity: 0.8,
  },
  newsList: {
    marginTop: 8,
  },
  newsCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'right',
  },
  newsDescription: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'right',
    marginBottom: 8,
    opacity: 0.8,
  },
  newsDate: {
    fontSize: 12,
    opacity: 0.6,
    textAlign: 'left',
  },
});
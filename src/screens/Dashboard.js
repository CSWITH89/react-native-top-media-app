import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {API_KEY} from '@env';
// Keys stored in RN env
import {CarouselX as Carousel, SectionTitle, CategoryCard} from '../components';

const Dashboard = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);
  const [tvData, setTvData] = useState(null);

  useEffect(() => {
    const queryMovies = async () => {
      try {
        const response = await (
          await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
          )
        ).json();
        setMovieData(response);
      } catch (e) {
        console.error(e);
        // Rollbar here later for errors
      }
    };
    const queryTvShows = async () => {
      try {
        const response = await (
          await fetch(
            `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
          )
        ).json();
        setTvData(response);
      } catch (e) {
        console.error(e);
        // Rollbar here later for errors
      }
    };

    queryMovies();
    queryTvShows();
  }, []);

  useEffect(() => {
    if (movieData && tvData) setLoading(false);
  }, [movieData, tvData]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {!loading ? (
          <>
            <SectionTitle>movie charts</SectionTitle>
            <Carousel
              data={movieData.results}
              navigation={navigation}
              autoplay
              loop
              autoplayInterval={6000}
            />
            <SectionTitle>tv charts</SectionTitle>
            <Carousel
              data={tvData.results}
              navigation={navigation}
              autoplay
              loop
              autoplayInterval={8000}
            />
            <SectionTitle>categories</SectionTitle>
            <ScrollView horizontal>
              {/* With more categories in future we could map through genre objects into category cards  */}
              <CategoryCard title="family" />
              <CategoryCard title="documentary" />
              <CategoryCard title="family" />
              <CategoryCard title="documentary" />
            </ScrollView>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Dashboard;

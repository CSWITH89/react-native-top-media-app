import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {API_KEY} from '@env';
import {CarouselX as Carousel, SectionTitle, CategoryCard} from '../components';

const Dashboard = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);
  const [tvData, setTvData] = useState(null);

  useEffect(() => {
    const queryMovies = async () => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
        )
      ).json();
      setMovieData(response);
    };
    const queryTvShows = async () => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
        )
      ).json();
      setTvData(response);
    };

    queryMovies();
    queryTvShows();
  }, []);

  useEffect(() => {
    if (movieData && tvData) setLoading(false);
    console.log(tvData);
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
              <CategoryCard title="family" />
              <CategoryCard title="documentary" />
              <CategoryCard title="family" />
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

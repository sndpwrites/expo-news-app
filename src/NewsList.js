import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import News from "./News";

export default NewsList = () => {
  const [newsData, setNewsData] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const fetchNewsData = useEffect(() => {
    console.log("Called!");
    setRefreshing(true);
    fetch("http://192.168.1.11:3000/api/news")
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
        setRefreshing(false);
      })
      .catch((err) => {
        console.log(err);
        setRefreshing(false);
      });
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchNewsData} />
      }
    >
      {newsData.map((el, idx) => (
        <News key={idx} newsData={el} />
      ))}
    </ScrollView>
  );
};

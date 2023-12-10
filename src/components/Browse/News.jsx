import { useEffect, useState } from "react";
import axios from "axios";
const News = () => {
  const [news, setNews] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  console.log(news);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&apiKey=4ef9b38002184be3bf2ccb7b066196af"
        );

        setNews(response.data.articles[0]);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);
  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  });
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  });
  return (
    <div
      style={{
        height: "80vh",
        width: "20vw",
        position: "relative",
        borderRadius: "12px 12px 0px 0px",
        padding: "6px",
        marginBottom:"13px"
      }}
    >
      <img
        src={news.urlToImage}
        style={{ height: "60vh", borderRadius: "12px 12px 0px 0px", width: "20vw" }}
      />
      <div
  style={{
    height: "25vh",
    borderRadius: "0px 0px 12px 12px",
    width: "18vw",
    background: "white",
    fontSize: "1rem",
    padding: "1vw",
    lineHeight:"1.5rem"
  }}
>
  {news.description}
</div>

      <div
        style={{
          position: "absolute",
          width: "20vw",
          height: "25vh",
          background: "rgba(0, 0, 0, 0.74)",
          top: "36vh",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <p style={{ color: "white", fontSize: "1.5rem", marginBottom: "10px" }}>
          {news.title}
        </p>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
          {date}
        </span>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

export default News;

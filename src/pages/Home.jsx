import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/appContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import movie_icon from "../assets/icon-category-movie.svg";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
// import Recomended from "../../components/Recomended/Recomended";
import bookmark from "../assets/icon-bookmark-empty.svg";
import bookmarked from "../assets/icon-bookmark-full.svg";

const Home = () => {
  const {
    items,
    setItems,
    allBookmarks,
    setAllBookmarks,
    bookmarkedMovies,
    setBookmarkedMovies,
    bookmarkedSeries,
    setBookmarkedSeries,
  } = useContext(AppContext);
  console.log(items, "item");
  const addToBookmarks = (item) => {
    const alreadyInBookmarks = allBookmarks.find((movie) => movie.id === item.id);
    if (!alreadyInBookmarks) {
      setItems(
        items.map((movie) => {
          if (movie.id === item.id) {
            movie.bookmarked = !movie.bookmarked;
          }
          return movie;
        })
      );
      setAllBookmarks([...allBookmarks, item]);
    }

    if (!alreadyInBookmarks && item.category === "Movie") {
      setBookmarkedMovies([...bookmarkedMovies, item]);
    } else if (!alreadyInBookmarks && item.category === "TVseries") {
      setBookmarkedSeries([...bookmarkedSeries, item]);
    }

    if (alreadyInBookmarks) {
      setAllBookmarks(allBookmarks.filter((movie) => movie.id !== item.id));
      setBookmarkedMovies(bookmarkedMovies.filter((movie) => movie.id !== item.id));
      setBookmarkedSeries(bookmarkedSeries.filter((movie) => movie.id !== item.id));
      setItems(
        items.map((movie) => {
          if (movie.id === item.id) {
            movie.bookmarked = false;
          }
          return movie;
        })
      );
    }
  };

  return (
    <Section>
      <Trendings>
        <TrendingTitle>Trendings</TrendingTitle>
        <Splide
          className="splide"
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            width: "100%",
            gap: "10px",
            perPage: 2,
            focus: "left",
            arrows: false,
            pagination: false,
            trimSpace: true,
            autoWidth: true,
            breakpoints: {
              768: { perPage: 1, gap: "10px", width: "100%" },
              569: { perPage: 1, gap: "10px", width: "100%" },
              425: { perPage: 1.5, gap: "10px" },
              400: { perPage: 1.2, gap: "5px" },
            },
          }}
        >
          {items.map((item, index) => (
            <SplideSlide key={index}>
              <TrendingItemCard>
                <PlayCont>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z"
                      fill="black"
                    />
                  </svg>
                  <Play>Play</Play>
                </PlayCont>
                <TrendingCardInfo>
                  <Info>
                    <span>{item.year}</span>
                    <span>.</span>
                    <span>
                      <img src={movie_icon} alt="icon" className="movie_icon" />
                      {"  "}
                      {item.category}
                    </span>
                    <span>.</span>
                    <span>{item.restriction}</span>
                  </Info>
                  <TrendingName>{item.name}</TrendingName>
                </TrendingCardInfo>
                <Add onClick={() => addToBookmarks(item)}>
                  <img src={!item.bookmarked ? bookmark : bookmarked} alt="" />
                </Add>
                <TrendingImg src={item.img} alt={item.name} />
              </TrendingItemCard>
            </SplideSlide>
          ))}
        </Splide>
      </Trendings>
      <RecomendedSection>
        <RecomendedTitle>Recomended for you</RecomendedTitle>
        <RecomendedList>{/* <Recomended /> */}</RecomendedList>
      </RecomendedSection>
    </Section>
  );
};

export default Home;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Trendings = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrendingTitle = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin: 20px 0;
`;

const TrendingItemCard = styled.div`
  width: 470px;
  height: 230px;
  border-radius: 8px;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.75) 100%);
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover .play_cont {
    opacity: 0.25;
  }
`;

const PlayCont = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0;
  border-radius: 28.5px;
  width: 117px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Play = styled.span`
  color: rgb(0, 0, 0);
  font-weight: bold;
  margin-left: 10px;
`;

const Add = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 1000;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #10141e;
  mix-blend-mode: normal;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }

  &:hover img {
    filter: invert(10) sepia(10);
  }
`;

const TrendingImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.75) 100%);
  border-radius: 0px 0px 8px 8px;
`;

const TrendingCardInfo = styled.div`
  position: absolute;
  bottom: 8%;
  left: 5%;
  z-index: 100000000000;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
  opacity: 0.75;
`;

const TrendingName = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
  color: #ffffff;
`;

const RecomendedSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecomendedTitle = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin: 20px 0;
`;

const RecomendedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

// @media screen and (max-width: 768px) {
//   ${RecomendedList} {
//     flex-wrap: wrap !important;
//     display: flex;
//     height: auto;
//     justify-content: center;
//   }

//   ${TrendingItemCard} {
//     width: 470px;
//     height: 230px;
//   }
// }

// @media screen and (max-width: 549px) {
//   ${TrendingItemCard} {
//     width: 380px;
//     height: 200px;
//   }
// }

// @media screen and (max-width: 425px) {
//   ${RecomendedTitle}, ${TrendingTitle} {
//     font-size: 20px;
//     line-height: 25px;
//     letter-spacing: -0.3125px;
//   }

//   ${TrendingItemCard} {
//     width: 240px;
//     height: 140px;
//   }
// }

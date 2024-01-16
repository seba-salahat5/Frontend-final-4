import { Container } from "@mui/material";
import HandPickedCollections from "../components/home/HandpickedCollections";
import NewArrivals from "../components/home/NewArraival";
import { CustomContainer } from "../layout/CustomContainer";
const Home = () => {
  let tempObj = [
    {
      image: "../assets/newArrivals/pink-bag-small.png",
      productName: "Grande",
      productDescreption: "Blossom Pouch",
      discount: 0.5,
      showRating: false,
      price: 39.49,
      showOldPrice: false,
      ratersNumber: 43,
    },
    {
      image: "../assets/newArrivals/pink-bag-small.png",
      productName: "Grande",
      productDescreption: "Blossom Pouch",
      discount: 0.5,
      showRating: false,
      price: 39.49,
      showOldPrice: false,
      ratersNumber: 43,
    },
    {
      image: "../assets/newArrivals/pink-bag-small.png",
      productName: "Grande",
      productDescreption: "Blossom Pouch",
      discount: 0.5,
      showRating: false,
      price: 39.49,
      showOldPrice: false,
      ratersNumber: 43,
    },
    {
      image: "../assets/newArrivals/pink-bag-small.png",
      productName: "Grande",
      productDescreption: "Blossom Pouch",
      discount: 0.5,
      showRating: false,
      price: 39.49,
      showOldPrice: false,
      ratersNumber: 43,
    },
  ];

  return (
    <>
      <CustomContainer>
        <NewArrivals cards={tempObj} />
      </CustomContainer>
      <HandPickedCollections />
    </>
  );
};

export default Home;

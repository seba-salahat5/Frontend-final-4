import styled from 'styled-components';
import ProductCard from '../shared/ProductCard';

const SharedTextStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
`;

const ArrivalLayout = styled.div`
  width: 100%;
  height: 29.6875rem;
  flex-shrink: 0;
`;

const TopStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 4.188rem;
`;

const CardsLayout = styled.div`
  display: flex; /* Change from inline-flex to flex */
  height: 25.48175rem;
  width: 100%;
  align-items: flex-start;
  gap: 2.5rem;
  overflow-x: scroll;

  /* Add custom scrollbar styles here */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px !important;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: blue !important;
    border-radius: 10px !important;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000 !important;
  }
`;

const TitleStyle = styled.div`
  display: flex;
  width: 13.0625rem;
  height: 2.72138rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`;

const TitleTextStyle = styled(SharedTextStyles)`
  color: var(--Dark, #13101E);
  font-size: 2.125rem;
  line-height: 2.75rem;
`;

const ViewAllLayout = styled.div`
  width: 6.4375rem;
  height: 2.75rem;
  flex-shrink: 0;
`;

const ViewAllButton = styled.div`
  display: inline-flex;
  padding: 0.625rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonText = styled(SharedTextStyles)`
  color: var(--Primary, #1B4B66);
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.5rem; 
`;

function NewArrivals({ cards }) {
  return (
    <ArrivalLayout>
      <TopStyle>
        <TitleStyle><TitleTextStyle>New Arrivals</TitleTextStyle></TitleStyle>
        <ViewAllLayout>
          <ViewAllButton>
            <ButtonText>View All</ButtonText>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 4.5L16.5 12L9 19.5" stroke="#13101E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </ViewAllButton>
        </ViewAllLayout>
      </TopStyle>

      <CardsLayout>
        {cards.map((item) => (
          <ProductCard
            key={item.productId}
            image={item.image}
            productName={item.productName}
            productDescreption={item.productDescreption}
            discount={item.discount}
            showRating={item.showRating}
            price={item.price}
            showOldPrice={item.showOldPrice}
            ratersNumber={item.ratersNumber}
          />
        ))}
      </CardsLayout>
    </ArrivalLayout>
  );
}

export default NewArrivals;

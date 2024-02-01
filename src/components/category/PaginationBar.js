import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const Layout = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 57.25rem;
  margin-top: 2rem;
`;

const Tabs = styled.div`
  display: flex;
  padding: 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.75rem;
  background: var(--Grey, #F1F1F1);
`;

const TabsLayout = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tab = styled.div`
  display: flex;
  padding: 0.375rem 1.125rem;
  align-items: flex-start;
  gap: 0.625rem;
  background: var(--Grey, #F1F1F1);
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
    border-radius: 0.5rem;
    background: var(--Primary, #1B4B66);
  `}
`;

const MoveTabLayout = styled.div`
  display: flex;
  width: 4.1875rem;
  padding: 0.25rem;
  justify-content: center;
  border-radius: 0.75rem;
  background: var(--Grey, #F1F1F1);
`;

const MoveTab = styled.div`
  display: flex;
  padding: 0.375rem 1.125rem;
  align-items: flex-start;
  gap: 0.625rem;
  cursor: pointer; /* Enable cursor for interaction */
`;

const TabText = styled.p`
  color: var(--Type-Low-Emphasis, #626262);
  /* Paragraph/M-12px */
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 133.333% */
  margin: 0; /* Remove default margin */
  ${(props) =>
    props.active &&
    `
    color: var(--Type-Bright, #FFF);
  `}
`;

const PaginationBar = ({ countOfItems }) => {
  const navigate = useNavigate();
  const { type, number_of_items, page_number } = useParams();
  const [activeTab, setActiveTab] = useState(Number(page_number) - 1 || 0);
  const numberOfTabs = Math.ceil(countOfItems / number_of_items);

  useEffect(() => {
    setActiveTab(Number(page_number) - 1 || 0);
  }, [page_number]);

  const handleTabClick = (index) => {
    setActiveTab(index);

    // Update the URL with the new page number
    navigate(`/category/${type}/${number_of_items}/${index + 1}`);
  };

  const handleNextTabClick = () => {
    // Increment active tab index or wrap around to the first tab
    const nextTabIndex = (activeTab + 1) % numberOfTabs;
    setActiveTab(nextTabIndex);

    // Update the URL with the new page number
    navigate(`/category/${type}/${number_of_items}/${nextTabIndex + 1}`);
  };

  const handlePrevTabClick = () => {
    // Decrement active tab index or wrap around to the last tab
    const prevTabIndex = (activeTab - 1 + numberOfTabs) % numberOfTabs;
    setActiveTab(prevTabIndex);

    // Update the URL with the new page number
    navigate(`/category/${type}/${number_of_items}/${prevTabIndex + 1}`);
  };

  const numberOfTabsToShow = numberOfTabs < 5 ? numberOfTabs : 5; // Fixed number of tabs to be shown

  const renderTabs = () => {
    const tabs = [];

    const startOffset = Math.max(0, activeTab - Math.floor(numberOfTabsToShow / 2));
    const startIndex = Math.min(startOffset, numberOfTabs - numberOfTabsToShow);
    const endIndex = Math.min(numberOfTabs - 1, startIndex + numberOfTabsToShow - 1);

    for (let i = startIndex; i <= endIndex; i++) {
      tabs.push(
        <Tab key={i} onClick={() => handleTabClick(i)} active={activeTab === i}>
          <TabText active={activeTab === i}>{i + 1}</TabText>
        </Tab>
      );
    }

    return tabs;
  };

  return (
    <Layout>
      <TabsLayout>
        {activeTab > 0 && (
          <MoveTabLayout>
            <MoveTab onClick={handlePrevTabClick}>
              <TabText>Prev</TabText>
            </MoveTab>
          </MoveTabLayout>
        )}
        <Tabs>
          {renderTabs()}
        </Tabs>
        {activeTab < numberOfTabs - 1 && (
          <MoveTabLayout>
            <MoveTab onClick={handleNextTabClick}>
              <TabText>Next</TabText>
            </MoveTab>
          </MoveTabLayout>
        )}
      </TabsLayout>
    </Layout>
  );
};

export default PaginationBar;
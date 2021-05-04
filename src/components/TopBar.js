import Logo from "./Logo";
import SearchBar from "./SearchBar";

import styled from "styled-components";

const TopBar = () => {
  return (
    <StyledTopBar>
      <Logo className='bar-logo' width='2rem' />
      <span>Categories</span>
      <span className='search'>
        <SearchBar />
      </span>
      <span>Udemy for Business</span>
      <span>Teach on Udemy</span>
      <span>My Learning</span>
      <span className='bar-icon'>
        <i class='far fa-heart'></i>
      </span>
      <span className='bar-icon'>
        <i class='fas fa-shopping-cart'></i>
      </span>
      <span className='bar-icon'>
        <i class='far fa-bell'></i>
      </span>
      <span className='bar-icon'>SS</span>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 8vh;
  width: 100%;
  border-bottom: 1px solid #ddd;

  span {
    flex: 3;
    color: #666;
    text-align: center;
  }

  .bar-icon {
    flex: 1;
  }
  .search {
    flex: 21;
  }
`;

export default TopBar;

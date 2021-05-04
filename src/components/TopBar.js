import Logo from "./Logo";
import SearchBar from "./SearchBar";

import styled from "styled-components";

const TopBar = () => {
  return (
    <StyledTopBar>
      <Logo className='bar-logo' width='2rem' />
      <span>
        <a href='#'>Categories</a>
      </span>
      <span className='search'>
        <SearchBar />
      </span>
      <span>
        <a href='#'>Udemy for Business</a>
      </span>
      <span>
        <a href='#'>Teach on Udemy</a>
      </span>
      <span>
        <a href='#'>My learning</a>
      </span>
      <span className='bar-icon'>
        <a href='#'>
          <i class='far fa-heart'></i>
        </a>
      </span>
      <span className='bar-icon'>
        <a href='#'>
          <i class='fas fa-shopping-cart'></i>
        </a>
      </span>
      <span className='bar-icon'>
        <a href='#'>
          <i class='far fa-bell'></i>
        </a>
      </span>
      <span className='bar-icon profile'>
        <a href='#'>SS</a>
      </span>
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

    i {
      font-size: 1.2rem;
    }
  }
  .search {
    flex: 21;
  }

  .profile {
    font-weight: bold;
    margin-right: 1rem;
    a {
      background: #666;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      color: #fff;
      text-align: center;

      padding: 0.5rem;
    }
  }
`;

export default TopBar;

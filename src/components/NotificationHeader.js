import styled from "styled-components";
import Icon from "./Icon";

const NotificationHeader = ({ contentBold, contentLight, bgColor }) => {
  const onRemoveHandler = (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
  };

  return (
    <Notification bgColor={bgColor}>
      <h5>{contentBold}</h5>
      <p>{contentLight}</p>
      <span>
        <Icon className='icon' name='fas fa-times' onClick={onRemoveHandler} />
      </span>
    </Notification>
  );
};

const Notification = styled.div`
  width: 100%;
  height: 6vh;
  margin: auto;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  h5 {
    padding-right: 0.5rem;
    color: #003640;
  }

  p {
    color: #003640;
    font-size: 1rem;
  }

  span {
    position: absolute;
    top: auto;
    right: 2rem;
  }
`;

export default NotificationHeader;

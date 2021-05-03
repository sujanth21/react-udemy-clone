import styled from "styled-components";

const NotificationHeader = ({ contentBold, contentLight, bgColor }) => {
  const onRemoveHandler = (e) => {
    e.target.parentElement.remove();
  };

  return (
    <Notification bgColor={bgColor}>
      <h5>{contentBold}</h5>
      <p>{contentLight}</p>
      <i className='fas fa-times' onClick={onRemoveHandler}></i>
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

  i {
    position: absolute;
    top: auto;
    right: 2rem;

    font-size: 1.2rem;
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default NotificationHeader;

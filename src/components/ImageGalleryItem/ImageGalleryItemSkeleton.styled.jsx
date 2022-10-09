import styled, { keyframes } from 'styled-components';

const refresh = keyframes`
    0% {
    background-position: calc(-20px);
  }
  60%, 100% {
    background-position: 350px;
  }
`;

export const ImageListItemSkeleton = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageSkeleton = styled.div`
  background-image: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #ffffff 40px,
    #ececec 80px
  );
  background-size: 500px;
  animation: ${refresh} 0.9s infinite ease-out;
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

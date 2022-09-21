import styled from "@emotion/styled";

export const AutoHeightImageWrapper = styled.div`
  width: 100%;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain;
      position: relative !important;
      height: auto !important;
    }
  }
`;

// Exam.tsx

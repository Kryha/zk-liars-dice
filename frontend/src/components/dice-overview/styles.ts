import styled from "@emotion/styled";

import { GeneralText } from "../atoms/text";
import { margins } from "../../design";
import { SMALL_VIEWPORT_HEIGHT } from "../../constants";
import { DieWrapper } from "../die/styles";
import { fadeInScale, fadeOutScale } from "../atoms";

export const DieOverviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
`;

interface ViewportProps {
  height: number;
}

export const DieOverviewContainer = styled.div<ViewportProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${({ height }) => (height > SMALL_VIEWPORT_HEIGHT ? margins.small2 : margins.small0)};
  width: 27.5vw;
  background: transparent;
  margin-top: ${margins.small5};
  ${GeneralText} {
    margin-left: ${margins.large1};
  }
`;

export const YourDiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${margins.small5};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: ${margins.small0};
  ${DieWrapper} {
    -webkit-animation: ${fadeInScale} 1.2s ease-in;
    -webkit-animation-fill-mode: forwards;
  }
  ${DieWrapper}:nth-of-type(1) {
    animation-delay: 0s;
    opacity: 0;
  }
  ${DieWrapper}:nth-of-type(2) {
    animation-delay: 0.1s;
    opacity: 0;
  }
  ${DieWrapper}:nth-of-type(3) {
    animation-delay: 0.2s;
    opacity: 0;
  }
  ${DieWrapper}:nth-of-type(4) {
    animation-delay: 0.3s;
    opacity: 0;
  }
  ${DieWrapper}:nth-of-type(5) {
    animation-delay: 0.4s;
    opacity: 0;
  }
  ${DieWrapper}:nth-of-type(6) {
    animation-delay: 0.5s;
    opacity: 0;
  }
  ${DieWrapper}:nth-of-type(7) {
    animation-delay: 0.6s;
    opacity: 0;
  }
  ${DieWrapper}:nth-of-type(8) {
    animation-delay: 0.7s;
    opacity: 0;
  }
  ${DieWrapper}:nth-of-type(9) {
    animation-delay: 0.8s;
    opacity: 0;
  }
  ${DieWrapper}:nth-of-type(10) {
    animation-delay: 0.9s;
    opacity: 0;
  }
`;

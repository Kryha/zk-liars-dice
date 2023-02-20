import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BoloneyLogoIcon } from "../../assets";
import { MEDIUM_VIEWPORT_WIDTH, SMALL_VIEWPORT_HEIGHT } from "../../constants";
import { zIndex } from "../../design";
import { ViewProps } from "../../types";
import { fadeUp, Heading0, Heading2 } from "../atoms";

interface Props {
  isVisible: boolean;
}

interface ImageProps {
  width: number;
  height: number;
}

export const AppName = styled(BoloneyLogoIcon)`
  width: 94.4vw;
  height: auto;
  margin-top: 8.5vh;
  align-items: center;
  display: flex;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0;
  animation: ${fadeUp} 1.2s ease-out 0.25s forwards;
  transform: translate3d(0, 1rem, 0);
`;

export const BottomTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 60px 40px;
  gap: 10px;
  width: 100%;
`;

export const LandingComponentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 100vh;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const BottomHeading = styled(Heading2)`
  width: 35.4vw;
  min-width: 35.4vw;
  padding-bottom: 60px;
  position: absolute;
  left: 12.5vw;
  bottom: 60px;
  padding: 60px 40px;
  opacity: 0;
  animation: ${fadeUp} 1.2s ease-out 0.25s forwards;
  transform: translate3d(0, 1rem, 0);
`;

export const LandingImage = styled.img<ImageProps>`
  height: ${({ width, height }) => (width < MEDIUM_VIEWPORT_WIDTH && height > SMALL_VIEWPORT_HEIGHT ? "50vh" : "70.2vh")};
  width: auto;
  object-fit: contain;
  right: -100px;
  bottom: -100px;
  position: absolute;
  z-index: ${zIndex.background};
  pointer-events: none;
  opacity: 0;
  animation: ${fadeUp} 1.2s ease-out 0.25s forwards;
  transform: translate3d(0, 1rem, 0);
`;

export const RightDisplaySection = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-end;
`;

export const LandingComponentContainer = styled.div<ViewProps>`
  width: 75vw;
  padding-top: ${({ height }): string => `${height}px`};
  padding-bottom: 60px;
`;

export const TopLandingWrapper = styled.div<Props>`
  opacity: 0;
  ${({ isVisible }) =>
    isVisible
      ? css`
          -webkit-animation-duration: 0.6s;
          -webkit-animation-timing-function: cubic-bezier(0.4, -0.38, 1, 1.92);
          -webkit-animation-delay: 0.25s;
          -webkit-animation-iteration-count: 1;
          -webkit-animation-direction: normal;
          -webkit-animation-fill-mode: forwards;
          -webkit-animation-play-state: running;
          -webkit-animation-name: ${fadeUp};
          transform: translate3d(0, 1rem, 0);
        `
      : ""};
`;

export const LandingHeading = styled(Heading0)`
  line-height: clamp(8.13rem, 7.29vw + 3.75rem, 12.5rem);
  :first-letter {
    text-transform: none;
  }
`;

export const LargeHeadingWrapper = styled(TopLandingWrapper)<Props>`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 120px;
  padding-bottom: 60px;
  ${Heading0} {
    line-height: clamp(9rem, 8.33vw + 4rem, 14rem);
  }
`;

export const LinkContainer = styled(TopLandingWrapper)<Props>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 40px 80px;
  gap: 10px;
  justify-content: space-between;
`;

export const VisibilityContainer = styled.div`
  width: 100%;
`;

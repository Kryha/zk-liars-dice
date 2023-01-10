import styled from "@emotion/styled";

import { color } from "../../design";

interface FaceProps {
  faceColor?: string;
  size?: string;
  padding?: string;
  pipColor?: string;
  isSixDie?: boolean;
}

export const DieWrapper = styled.div<FaceProps>`
  > svg {
    width: ${({ size }): string => size || "clamp(20px, 2.08vw + 0px, 40px)"};
    height: ${({ size }): string => size || "clamp(20px, 2.08vw + 0px, 40px)"};
    ${({ isSixDie, faceColor, pipColor }): string => {
      return isSixDie
        ? `
        path: nth-of-type(1) {
          fill: ${pipColor || color.pureWhite};
        }
          `
        : `
        path: nth-of-type(1) {
          fill: ${faceColor || color.darkBlue};
        }
        `;
    }};
    path: nth-of-type(2) {
      fill: ${({ pipColor }): string => pipColor || color.white};
    }
    path: nth-of-type(3) {
      fill: ${({ pipColor }): string => pipColor || color.white};
    }
    path: nth-of-type(4) {
      fill: ${({ pipColor }): string => pipColor || color.white};
    }
    path: nth-of-type(5) {
      fill: ${({ pipColor }): string => pipColor || color.white};
    }
    path: nth-of-type(6) {
      fill: ${({ pipColor }): string => pipColor || color.white};
    }
    g {
      path {
        fill: ${({ faceColor }): string => faceColor || color.darkBlue} !important;
      }
    }
  }
`;

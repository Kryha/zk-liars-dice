import { FC, useState } from "react";
import { text } from "../../assets";
import { MEDIUM_VIEWPORT_WIDTH, POWER_UP_DEFAULT_VIEW, POWER_UP_DEFAULT_VIEW_SMALL } from "../../constants";
import { useViewport } from "../../hooks";
import { useStore } from "../../store";
import { PowerUp } from "../../types";
import { GeneralText } from "../atoms/text";
import { PowerUpComponent } from "../power-up";
import { PowerUpListOverview } from "../power-up-list-overview";
import { PowerUpWrapper } from "../power-up/styles";
import { PowerUpOverview, YourPowerUpContainer } from "./styles";

interface PowerUpListProps {
  powerUps: PowerUp[];
}

export const PowerUpList: FC<PowerUpListProps> = ({ powerUps }) => {
  const setIsModalVisible = useStore((state) => state.setIsModalVisible);
  const setIsOverlayVisible = useStore((state) => state.setIsOverlayVisible);
  const setIsModalButtonVisible = useStore((state) => state.setIsModalButtonVisible);
  const setModalComponent = useStore((state) => state.setModalComponent);
  const { width } = useViewport();

  const initialPowerUpsShown = width > MEDIUM_VIEWPORT_WIDTH ? POWER_UP_DEFAULT_VIEW : POWER_UP_DEFAULT_VIEW_SMALL;

  const toggleShowModal = () => {
    setIsModalVisible(true);
    setIsOverlayVisible(true);
    setIsModalButtonVisible(true);
    setModalComponent(<PowerUpListOverview powerUps={powerUps} />);
  };

  return (
    <YourPowerUpContainer>
      {powerUps.slice(0, initialPowerUpsShown).map((powerUp) => (
        <PowerUpComponent key={powerUp.id} powerUp={powerUp} showPowerUps={toggleShowModal} />
      ))}
      {powerUps.length > initialPowerUpsShown && (
        <PowerUpWrapper onClick={() => toggleShowModal()}>
          <PowerUpOverview>
            <GeneralText>{text.param.powerUpAmount(powerUps.length - initialPowerUpsShown)}</GeneralText>
          </PowerUpOverview>
        </PowerUpWrapper>
      )}
    </YourPowerUpContainer>
  );
};

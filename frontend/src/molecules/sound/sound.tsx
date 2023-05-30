import { FC } from "react";
import { SoundOffSVG, SoundOnSVG, text } from "../../assets";
import { BaseIcon } from "../../atoms";
import { BaseSlider } from "../../atoms/slider";
import { SLIDER_MAXIMUM, SLIDER_MINIMUM, SLIDER_STEP } from "../../constants";
import { spacing } from "../../design";
import { Dropdown } from "../dropdown";
import { VolumeSliderContainer, VolumeSliderWrapper } from "./styles";

interface SoundProps {
  isOpen: boolean;
  expand: () => void;
  onChange: (volumeLevel: number) => void;
  currentVolume: number;
}

/**
 * This is the sound menu button that wil drop down a volume slider, it is displayed in the navigation sound.
 *  @param {boolean} isOpen - If the sound menu is open.
 *  @param {Function} expand - A function whose use is to define what happens when you click on the sound menu.
 *  @param {Function} onChange - A function whose use is to define what happens when you change the volume.
 *  @param {number} currentVolume - The current volume.
 * */

export const Sound: FC<SoundProps> = ({ isOpen, expand, onChange, currentVolume }) => {
  const soundIndicator = currentVolume === 0 ? <SoundOffSVG /> : <SoundOnSVG />;
  return (
    <Dropdown
      isOpen={isOpen}
      buttonIcon={<BaseIcon iconColor={"transparent"} strokeColor="black" src={soundIndicator} />}
      buttonText={text.general.sound}
      expand={expand}
    >
      <VolumeSliderContainer padding={spacing.sm}>
        <VolumeSliderWrapper alignItems="center" justifyContent="center">
          <BaseSlider
            type="range"
            min={SLIDER_MINIMUM}
            max={SLIDER_MAXIMUM}
            step={SLIDER_STEP}
            value={currentVolume}
            onChange={(e) => onChange(Number(e.currentTarget.value))}
          />
        </VolumeSliderWrapper>
      </VolumeSliderContainer>
    </Dropdown>
  );
};
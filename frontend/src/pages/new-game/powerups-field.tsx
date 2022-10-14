import { FC } from "react";
import { text } from "../../assets";
import { Checkbox, GeneralText, Heading6, InfoButton, Input } from "../../components";
import { PowerUpCheckbox } from "../../components/checkbox/power-up-checkbox";
import { PowerUpData } from "../../design/power-up";
import { useGameCreationFormState } from "./game-creation-form-state";
import {
  CheckboxContainer,
  FieldContainer,
  InfoBox,
  Percentage,
  PercentageContainer,
  TotalContainer,
  TrophyContainer,
  TrophyNewGame,
} from "./styles";

export const PowerUpsField: FC = () => {
  const availablePowerUps = useGameCreationFormState((state) => state.availablePowerUps);
  const togglePowerUp = useGameCreationFormState((state) => state.togglePowerUp);
  const powerUpProbability = useGameCreationFormState((state) => state.powerUpProbability);
  const isButtonDisabled = useGameCreationFormState((state) => state.isButtonDisabled);
  const amountOfPowerUps = useGameCreationFormState((state) => state.amountOfPowerUps);
  const probability = powerUpProbability.reduce((a, b) => a + b.probability, 0);

  return (
    <FieldContainer>
      <Input label={text.newGame.whichPowerUps}>
        <>
          <InfoBox>
            <GeneralText>{text.newGame.powerUpDesc}</GeneralText>
            {/* TODO: add pop up info */}
            <InfoButton text="chance" />
          </InfoBox>
          <CheckboxContainer>
            {PowerUpData.map((data, index) => (
              <PowerUpCheckbox
                key={index}
                isTop
                description={data.shortDescription}
                isChecked={availablePowerUps.includes(data.name)}
                toggleCheck={() => togglePowerUp(data.name)}
                powerUp={{ name: data.name, image: data.iconImage }}
                isDisabled={(isButtonDisabled && !availablePowerUps.includes(data.name)) || amountOfPowerUps === availablePowerUps.length}
                name={data.name}
              />
            ))}
          </CheckboxContainer>
          <TotalContainer>
            <TrophyContainer>
              <TrophyNewGame />
              <Heading6>{text.newGame.total}</Heading6>
            </TrophyContainer>
            <PercentageContainer>
              <Percentage isError={probability > 100}>{probability}</Percentage>
              <GeneralText>{text.newGame.outOfOneHundred}</GeneralText>
            </PercentageContainer>
          </TotalContainer>
        </>
      </Input>
    </FieldContainer>
  );
};

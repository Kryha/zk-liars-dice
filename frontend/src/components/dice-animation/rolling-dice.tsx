import { useRef, useState, useEffect, FC } from "react";
import { DiceRoll, newRoll } from ".";
import { text } from "../../assets";
import { color } from "../../design";

import { PrimaryButton } from "../buttons";
import { Die } from "../die";
import { DiceValueContainer, AttributesContainer } from "../roll-dice/styles";
import { rollDice } from "./roll-dice";
import { RollerContainer } from "./styles";
import { Die as Dice } from "../../types";
import { DieType } from "./types";

interface RollingDiceProps {
  dice: Dice[];
  dieColor: string;
}
export const RollingDice: FC<RollingDiceProps> = ({ dice, dieColor }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [thrown, setThrown] = useState(0);
  const [stable, setStable] = useState(true);
  const [roll, setRoll] = useState<DiceRoll | undefined>();

  useEffect(() => {
    let element: HTMLCanvasElement | null = null;
    const mountRefs = mountRef?.current;
    if (roll != null && mountRef.current != null) {
      element = rollDice(mountRef, roll);
    }
    return () => {
      try {
        if (element && mountRefs) mountRefs.removeChild(element);
      } catch (error) {
        console.log("ref not found or mount");
      }
    };
  }, [mountRef, roll]);

  useEffect(() => {
    const stableListener = () => setStable(true);
    window.addEventListener("diceStable", stableListener);
    return () => {
      window.removeEventListener("diceStable", stableListener);
    };
  }, [setStable]);

  const onRoll = () => {
    setStable(false);
    const diceRoll = newRoll(DieType.D6, dice, dieColor);
    setThrown((v) => v + 1);
    setRoll(diceRoll);
  };

  return (
    <>
      {thrown && stable ? (
        <>
          <DiceValueContainer>
            {dice.map((dice, index) => (
              <Die key={index} value={dice.rolledValue} faceColor={dieColor} pipColor={color.pureWhite} size="5em" />
            ))}
          </DiceValueContainer>
          <AttributesContainer>
            <PrimaryButton text={text.general.continue} />
          </AttributesContainer>
        </>
      ) : (
        <RollerContainer ref={mountRef}>
          <PrimaryButton text={text.general.rollIt} onClick={() => onRoll()} />
        </RollerContainer>
      )}
    </>
  );
};

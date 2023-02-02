import { isNumber, isString } from "./primitive";

/**
 * Power-ups are matched to their ID in the following way:
 * 1. Grill
 * 2. Bird's Eye View
 * 3. Ménage à Troìs
 * 4. Double Up
 * 5. Vendetta
 * 6. Second Chance
 * 7. Coup
 * 8. Smoke and Mirrors
 * 9. Hypnosis
 */

export type PowerUpId = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export const isPowerUpId = (value: unknown): value is PowerUpId => {
  const assertedVal = value as PowerUpId;

  return (
    assertedVal === "1" ||
    assertedVal === "2" ||
    assertedVal === "3" ||
    assertedVal === "4" ||
    assertedVal === "5" ||
    assertedVal === "6" ||
    assertedVal === "7" ||
    assertedVal === "8" ||
    assertedVal === "9"
  );
};

export const isPowerUpTypeArray = (types: unknown): types is PowerUpId[] => {
  if (!types) return false;
  if (!(types instanceof Array)) return false;

  const areValid = types.reduce((valid, pt) => valid && isPowerUpId(pt), true);
  return areValid;
};

export interface PowerUpProbability {
  id: string;
  probability: number;
}

export const isPowerUpProbability = (value: unknown): value is PowerUpProbability => {
  const assertedVal = value as PowerUpProbability;

  return (
    assertedVal.id !== undefined && assertedVal.probability !== undefined && isString(assertedVal.id) && isNumber(assertedVal.probability)
  );
};

export const isPowerUpProbabilityArray = (values: unknown): values is PowerUpProbability[] => {
  if (!values) return false;
  if (!(values instanceof Array)) return false;

  const areValid = values.reduce((valid, pp) => valid && isPowerUpProbability(pp), true);
  return areValid;
};

// USE_POWER_UP API payloads
// TODO: define all types

export interface UseGrillFrontend {
  targetId: string;
  face: number;
  amount: number;
}

export interface UseGrillBackend {
  targetId: string;
  isCorrect: boolean;
}

export interface UseBirdsEyeFrontend {
  targetId: string;
}

export interface UseBirdsEyeBackend {
  targetId: string;
  sum: number;
}

export interface UseMenageFrontend {}

export interface UseMenageBackend {}

export type UseDoubleUpFrontend = {};

export interface UseDoubleUpBackend {
  powerUpIds: PowerUpId[];
  recentlyAdded: number;
}

export interface UseVendettaFrontend {}

export interface UseVendettaBackend {}

export interface UseSecondChanceFrontend {}

export interface UseSecondChanceBackend {}

export interface UseCoupFrontend {
  targetId: string;
}

export interface UseCoupBackend {
  powerUpIds: PowerUpId[];
  targetId: string;
}

export type UseSmokeAndMirrorsFrontend = {
  // keep empty
};

export type UseSmokeAndMirrorsBackend = {
  // keep empty
};

export interface UseHypnosisFrontend {}

export interface UseHypnosisBackend {}

export type UsePowerUpPayloadFrontend =
  | {
      id: "1";
      data: UseGrillFrontend;
    }
  | {
      id: "2";
      data: UseBirdsEyeFrontend;
    }
  | {
      id: "3";
      data: UseMenageFrontend;
    }
  | {
      id: "4";
      data: UseDoubleUpFrontend;
    }
  | {
      id: "5";
      data: UseVendettaFrontend;
    }
  | {
      id: "6";
      data: UseSecondChanceFrontend;
    }
  | {
      id: "7";
      data: UseCoupFrontend;
    }
  | {
      id: "8";
      data: UseSmokeAndMirrorsFrontend;
    }
  | {
      id: "9";
      data: UseHypnosisFrontend;
    };

export type UsePowerUpPayloadBackend =
  | {
      id: "1";
      data: UseGrillBackend;
    }
  | {
      id: "2";
      data: UseBirdsEyeBackend;
    }
  | {
      id: "3";
      data: UseMenageBackend;
    }
  | {
      id: "4";
      data: UseDoubleUpBackend;
    }
  | {
      id: "5";
      data: UseVendettaBackend;
    }
  | {
      id: "6";
      data: UseSecondChanceBackend;
    }
  | {
      id: "7";
      data: UseCoupBackend;
    }
  | {
      id: "8";
      data: UseSmokeAndMirrorsBackend;
    }
  | {
      id: "9";
      data: UseHypnosisBackend;
    };

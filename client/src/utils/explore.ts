export interface ExploreEncounterProbabilities {
  /** Percentage chance of encountering a beast when exploring. */
  beast: number;
  /** Percentage chance of encountering an obstacle when exploring. */
  obstacle: number;
  /** Percentage chance of finding a discovery/bonus when exploring. */
  discovery: number;
}

export const EXPLORE_PROBABILITY_COUNTS = {
  beast: 86,
  obstacle: 85,
  discovery: 85,
  total: 256,
} as const;

/**
 * Loot Survivor uses a u8 for explore entropy, so there are 256 possible values.
 * The explore system chooses the encounter type via `seed % 3`, which makes
 * remainder `0` a beast, `1` an obstacle, and `2` a discovery/bonus. Because
 * 256 is not divisible by 3, beasts have one extra outcome in the cycle.
 */
export const getExploreEncounterProbabilities = (): ExploreEncounterProbabilities => {
  return {
    beast: (EXPLORE_PROBABILITY_COUNTS.beast / EXPLORE_PROBABILITY_COUNTS.total) * 100,
    obstacle: (EXPLORE_PROBABILITY_COUNTS.obstacle / EXPLORE_PROBABILITY_COUNTS.total) * 100,
    discovery: (EXPLORE_PROBABILITY_COUNTS.discovery / EXPLORE_PROBABILITY_COUNTS.total) * 100,
  };
};

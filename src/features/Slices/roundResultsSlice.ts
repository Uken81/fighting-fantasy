import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AttackOutcomes } from '../../Combat/CombatManager/AttackButton';
import { DefenseOutcomes } from '../../Combat/CombatManager/Defense';

export interface RoundResult {
  attackerName: string;
  defenderName: string;
  attackOutcome: AttackOutcomes;
  defenseOutcome: DefenseOutcomes;
  damageResult: number;
}

const initialState: RoundResult = {
  attackerName: '',
  defenderName: '',
  attackOutcome: '',
  defenseOutcome: '',
  damageResult: 0
};

export const roundResultsSlice = createSlice({
  name: 'round-results',
  initialState,
  reducers: {
    logCombatantRoles: (
      state,
      action: PayloadAction<{ attackerName: string; defenderName: string }>
    ) => {
      const { attackerName, defenderName } = action.payload;

      state.attackerName = attackerName;
      state.defenderName = defenderName;
    },
    logAttackOutcome: (state, action: PayloadAction<AttackOutcomes>) => {
      state.attackOutcome = action.payload;
    },
    logDefenseOutcome: (state, action) => {
      state.defenseOutcome = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { logCombatantRoles, logAttackOutcome, logDefenseOutcome } = roundResultsSlice.actions;

export default roundResultsSlice.reducer;

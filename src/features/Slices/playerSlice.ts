import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Combatant } from '../../globalTypes';

const initialState: Combatant = {
  name: '',
  attack: null,
  defense: null,
  hp: null,
  imagePath: ''
};

export const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    assignPlayerClass: (state, action: PayloadAction<Combatant>) => {
      state = action.payload;
    }
  }
});

export const { assignPlayerClass } = playerSlice.actions;

export default playerSlice.reducer;

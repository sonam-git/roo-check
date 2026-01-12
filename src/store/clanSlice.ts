import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClanCheckResult } from '@/types/clan';

interface ClanState {
  personA: {
    majorClanId: string;
    subClanId: string;
  };
  personB: {
    majorClanId: string;
    subClanId: string;
  };
  checkResult: ClanCheckResult | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ClanState = {
  personA: {
    majorClanId: '',
    subClanId: '',
  },
  personB: {
    majorClanId: '',
    subClanId: '',
  },
  checkResult: null,
  isLoading: false,
  error: null,
};

export const clanSlice = createSlice({
  name: 'clan',
  initialState,
  reducers: {
    setPersonAMajorClan: (state, action: PayloadAction<string>) => {
      state.personA.majorClanId = action.payload;
      // Reset sub-clan when major clan changes
      state.personA.subClanId = '';
    },
    setPersonASubClan: (state, action: PayloadAction<string>) => {
      state.personA.subClanId = action.payload;
    },
    setPersonBMajorClan: (state, action: PayloadAction<string>) => {
      state.personB.majorClanId = action.payload;
      // Reset sub-clan when major clan changes
      state.personB.subClanId = '';
    },
    setPersonBSubClan: (state, action: PayloadAction<string>) => {
      state.personB.subClanId = action.payload;
    },
    setCheckResult: (state, action: PayloadAction<ClanCheckResult>) => {
      state.checkResult = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    resetCheck: (state) => {
      state.personA = { majorClanId: '', subClanId: '' };
      state.personB = { majorClanId: '', subClanId: '' };
      state.checkResult = null;
      state.error = null;
    },
  },
});

export const {
  setPersonAMajorClan,
  setPersonASubClan,
  setPersonBMajorClan,
  setPersonBSubClan,
  setCheckResult,
  setLoading,
  setError,
  resetCheck,
} = clanSlice.actions;

export default clanSlice.reducer;

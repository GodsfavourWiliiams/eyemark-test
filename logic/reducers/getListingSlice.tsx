import {
  createAsyncThunk,
  createSlice,
  combineReducers,
  PayloadAction,
} from "@reduxjs/toolkit";
import { listingData } from "../../utils/listing";
import { Actiontypes } from "../types";
import { filters } from "../../components/Header/filters";

// Function to generate random category data
const generateRandomCategory = () => {
  const categories = filters.map((item) => item.filterId);
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};

interface listingState {
  payload: null | any;
  loading: boolean;
  error: null | any;
}

const initialState = {
  payload: null,
  loading: false,
  error: null,
} as unknown as listingState;

export const fetchListing = createAsyncThunk(
  Actiontypes.GET_LISTINGS,
  async (payload, thunkAPI) => {
    try {
      // Simulate loading delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const data = listingData;

      // Add a category field with random data to each object in the data array
      const newData = data.map((item) => ({
        ...item,
        category: generateRandomCategory(),
      }));

      return newData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const likeListing = (listingId: number) => {
  return {
    type: Actiontypes.TOGGLE_FAVORITE,
    listingId: listingId,
  };
};

// const favoriteReducer = (
//   state = listingData,
//   action: { type: any; payload: any; listingId: string }
// ) => {
//   switch (action.type) {
//     case Actiontypes.GET_LISTINGS:
//       return {
//         ...state,
//         payload: action.payload,
//       };
//     case Actiontypes.TOGGLE_FAVORITE:
//       return state.map((listing) => {
//         if (listing.id === action.listingId) {
//           return {
//             ...listing,
//             isLiked: !listing.isLiked,
//           };
//         }
//         return listing;
//       });
//     default:
//       return state;
//   }
// };

export const getCategory = (payload: string) => {
  return {
    type: Actiontypes.GET_CATEGORY,
    payload: payload,
  };
};

const initialCategoryState = {
  payload: "",
};

const categoryReducer = (
  state = initialCategoryState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case Actiontypes.GET_CATEGORY:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListing.pending, (state) => {
      state.payload = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchListing.fulfilled, (state, action) => {
      state.payload = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchListing.rejected, (state, action) => {
      state.payload = null;
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(
      Actiontypes.TOGGLE_FAVORITE,
      (state, action: { type: any; payload: any; listingId: string }) => {
        state.payload = state.payload.map(
          (listing: { id: any; isLiked: any }) => {
            if (listing.id === action.listingId) {
              return {
                ...listing,
                isLiked: !listing.isLiked,
              };
            }
            return listing;
          }
        );
      }
    );
  },
});

const listingReducer = combineReducers({
  category: categoryReducer,
  getListingSlice: listingsSlice.reducer,
});

export default listingReducer;

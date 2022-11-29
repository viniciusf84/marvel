import { createContext, useReducer } from "react";

interface Img {
  path: string;
  extension: string;
}

interface CreatorItem {
  name: string;
  resourceURI: string;
  role: string;
}

interface Creator {
  collectionURI: string;
  available: Number;
  returned: Number;
  items: CreatorItem[];
}

interface Comic {
  id: string;
  thumbnail: Img;
  title: string;
  creators: Creator;
}

interface FilterParamProps {
  series: number[];
  characters: number[];
  creators: number[];
}

interface FitlterStateProps {
  isLoading: boolean;
  comicsData: Comic[];
  filters: FilterParamProps;
  offset: number;
  actions: any;
}

const FilterContext = createContext<FitlterStateProps>({});

const initialState = {
  isLoading: false,
  comicsData: [],
  filters: {
    series: [],
    characters: [],
    creators: [],
  },
  offset: 0,
};

const types = {
  SET_IS_LOADING: "SET_IS_LOADING",
  SET_FILTERS: "SET_FILTERS",
  SET_COMICS_DATA: "SET_COMICS_DATA",
  SET_OFFSET: "PAGE",
  RESET_DATA: "RESET_DATA",
};

const reducer = (state: FitlterStateProps, action: any) => {
  switch (action.type) {
    case types.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    case types.SET_COMICS_DATA:
      console.log(action.payload);
      return {
        ...state,
        comicsData: [...state.comicsData, ...action.payload],
      };

    case types.SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    case types.RESET_DATA: {
      return {
        ...state,
        comicsData: [],
        filters: {
          series: [],
          characters: [],
          creators: [],
        },
      };
    }

    default:
      return {
        ...state,
      };
  }
};

const setActions = (dispatch: any) => ({
  setIsLoading: (item: boolean) =>
    dispatch({
      type: types.SET_IS_LOADING,
      payload: item,
    }),

  setFilters: (item: FilterParamProps) =>
    dispatch({
      type: types.SET_FILTERS,
      payload: item,
    }),

  setComicsData: (item: Comic[] | null) => {
    dispatch({
      type: types.SET_COMICS_DATA,
      payload: item,
    });
  },

  setOffset: (item: number) => {
    dispatch({
      type: types.SET_OFFSET,
      payload: item,
    });
  },

  resetData: (item: number) => {
    dispatch({
      type: types.RESET_DATA,
    });
  },
});

const FilterContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ ...state, actions: setActions(dispatch) }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };

import React, { createContext, useReducer } from "react";

const initialState = {
  count: 1,
  showModal: false,
  assetManagement: [],
  assetManagementActive: "",
  financeAndLeasing: [],
  whatWeDoModalPosition: "0",
  boardOfDirectorsNav: [],
  boardOfDirectorsActive: "",
  managementTeamNav: [],
  managementTeamActive: "",
  WWAMobile: "CORPORATE INFORMATION",
  WWDMobile: "ASSET MANAGEMENT",
  WWAMobileModal: "",
  WWDMobileModal: "",
  WWDMobileModalNav: "",
  singleBlogPage:{},
  EventsNav: [],
  EventsActive: "",
};

export const Store = createContext(initialState);

// -------------TYPE--------------
export const type = {
  STORE: "STORE",
  REDUCE: "REDUCE",
  MODAL_CLOSE: "MODAL_CLOSE",
  MODAL_OPEN: "MODAL_OPEN",
  ASSET_MANAGEMENT: "ASSET_MANAGEMENT",
  ASSET_MANAGEMENT_ACTIVE: "ASSET_MANAGEMENT_ACTIVE",
  FINANCE_AND_LEASING: "FINANCE_AND_LEASING",
  FINANCE_AND_LEASING_ACTIVE: "FINANCE_AND_LEASING_ACTIVE",
  WHAT_WE_DO_MODAL_POSITION: "WHAT_WE_DO_MODAL_POSITION",
  BOARD_OF_DIRECTORS: "BOARD_OF_DIRECTORS",
  BOARD_OF_DIRECTORS_MOBILE: "BOARD_OF_DIRECTORS_MOBILE",
  MANAGEMENT_TEAM: "MANAGEMENT_TEAM",
  MANAGEMENT_TEAM_MOBILE: "MANAGEMENT_TEAM_MOBILE",
  WWA_MOBILE: "WWA_MOBILE",
  WWD_MOBILE: "wwd_MOBILE",
  WWA_MOBILE_MODAL: "WWA_MOBILE_MODAL",
  WWD_MOBILE_MODAL: "WWD_MOBILE_MODAL",
  WWD_MOBILE_MODAL_NAV: "WWD_MOBILE_MODAL_NAV",
  SINGLE_BLOG_PAGE: "SINGLE_BLOG_PAGE",
  EVENTS: "EVENTS",
};

// ----------REDUCER--------------
function reducer(state, action) {
  switch (action.type) {
    case type.STORE:
      return {
        ...state,
      };
    case type.REDUCE:
      return {
        ...state,
        count: state.count + 1,
      };
    case type.MODAL_CLOSE:
      return {
        ...state,
        showModal: false,
      };
    case type.MODAL_OPEN:
      return {
        ...state,
        showModal: true,
      };
    case type.ASSET_MANAGEMENT:
      return {
        ...state,
        assetManagement: action.payload,
      };
    case type.ASSET_MANAGEMENT_ACTIVE:
      return {
        ...state,
        assetManagementActive: action.payload,
      };
    case type.FINANCE_AND_LEASING:
      return {
        ...state,
        financeAndLeasing: action.payload,
      };
    case type.WHAT_WE_DO_MODAL_POSITION:
      return {
        ...state,
        whatWeDoModalPosition: action.index,
      };
    case type.BOARD_OF_DIRECTORS:
      return {
        ...state,
        boardOfDirectorsNav: action.nav,
        boardOfDirectorsActive: action.active,
      };
    case type.BOARD_OF_DIRECTORS_MOBILE:
      return {
        ...state,
        boardOfDirectorsActive: action.active,
      };
    case type.MANAGEMENT_TEAM:
      return {
        ...state,
        managementTeamNav: action.nav,
        managementTeamActive: action.active,
      };
    case type.MANAGEMENT_TEAM_MOBILE:
      return {
        ...state,
        managementTeamActive: action.active,
      };
    case type.WWA_MOBILE:
      return {
        ...state,
        WWAMobile: action.payload,
      };
    case type.WWD_MOBILE:
      return {
        ...state,
        WWDMobile: action.payload,
      };
    case type.WWA_MOBILE_MODAL:
      return {
        ...state,
        WWAMobileModal: action.payload,
      };
    case type.WWD_MOBILE_MODAL:
      return {
        ...state,
        WWDMobileModal: action.payload,
      };
    case type.WWD_MOBILE_MODAL_NAV:
      return {
        ...state,
        WWDMobileModalNav: action.payload,
      };
    case type.SINGLE_BLOG_PAGE:
      return {
        ...state,
        singleBlogPage: action.data,
      };
    case type.EVENTS:
      return {
        ...state,
        EventsNav: action.nav,
        EventsActive: action.active,
      };
   

    default:
      return {
        ...state,
      };
  }
}

export function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}

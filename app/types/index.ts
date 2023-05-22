export type TechUseType = {
  name: string;
};

export type PortfolioListType = {
  title?: string;
  img?: string;
  short_desc?: string;
  tech_use: Array<TechUseType>;
  link_code?: string;
  link_live_demo?: string;
};

export type LandingList = {
  heroDesc: string;
  aboutMe: string;
};

export type IApiResponseLandingList = {
  data: Array<LandingList>;
};

export type IApiResponse = {
  result: PortfolioListType;
};

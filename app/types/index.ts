export type LandingList = {
  heroDesc: string;
  aboutMe: string;
};

export type IApiResponseLandingList = {
  data: Array<LandingList>;
};

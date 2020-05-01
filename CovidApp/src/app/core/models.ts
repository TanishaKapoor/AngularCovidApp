export interface IStateDetails{
    active: string,
    confirmed: string,
    deaths: string,
    deltaconfirmed: string,
    deltadeaths: string,
    deltarecovered: string,
    lastupdatedtime: string,
    recovered: string,
    state: string,
    statecode: string,
    statenotes: string
};
export interface DictionaryType{
  [Key: string]: IDetails;
}
export interface IDistrictDetails{
  districtData : DictionaryType,
  statecode:string;
}
export interface IDetails{
  notes: string,
  active: number,
  confirmed: number,
  deceased: number,
  recovered: number,
  delta:IDeltaDetail
}
export interface IDeltaDetail{
  confirmed: number,
  deceased: number,
  recovered: number
}

export interface IUser {
  id: number;
  username: string;
  password: string;
}
export interface IPrecaution{
  heading:string,
  detail:string
}

export interface INews{
  id?:number,
  news_title:string,
  news_description:string,
  news_summary:string,
  full_news:string,
  news_area:string
}
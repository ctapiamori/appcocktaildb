export interface IResponseDrinks<T> {
  drinks: Array<T>;
}

export interface ICategoryItem {
  strCategory: string;
}
export interface IGlassItem {
  strGlass: string;
}
export interface IIngredientItem {
  strIngredient1: string;
}
export interface IAlcoholicItem {
  strAlcoholic: string;
}
export interface ICategoriesList extends Array<ICategoryItem> {}
export interface IGlassesList extends Array<IGlassItem> {}
export interface IIngredientsList extends Array<IIngredientItem> {}
export interface IAlcoholicList extends Array<IAlcoholicItem> {}
export interface IResponseCategories extends IResponseDrinks<ICategoryItem> {}
export interface IResponseGlasses extends IResponseDrinks<IGlassItem> {}
export interface IResponseIngredients extends IResponseDrinks<IIngredientItem> {}
export interface IResponseAlcoholic extends IResponseDrinks<IAlcoholicItem> {}

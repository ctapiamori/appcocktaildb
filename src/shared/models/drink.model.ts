import { IResponseDrinks } from './general.model';

export interface IDrinkItem {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface IDrinksList extends Array<IDrinkItem> {}
export interface IResponseDrinkFilter extends IResponseDrinks<IDrinkItem> {}

export interface IDrinkFilter {
  name?: string;
  category?: string;
  glass?: string;
  ingredient?: string;
  alcoholic?: string;
  type?: string;
  valueSearch?: string;
}

export interface IResponseDrink extends IResponseDrinks<IDrink> {}

export interface IDrink {
  idDrink?: string;
  strDrink?: string;
  strInstructions?: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strDrinkThumb?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strCategory?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
}

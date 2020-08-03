import { environment } from 'src/environments/environment';

export class CocktailEnpoint {
  public static searchName = `${environment.cocktaildb}/search.php?s={name}`;
  public static filterByCategory = `${environment.cocktaildb}/filter.php?c={category}`;
  public static filterByGlass = `${environment.cocktaildb}/filter.php?g={glass}`;
  public static filterByIngredient = `${environment.cocktaildb}/filter.php?i={ingredient}`;
  public static filterByAlcoholic = `${environment.cocktaildb}/filter.php?a={alcoholic}`;
  public static getByID = `${environment.cocktaildb}/lookup.php?i={idCocktail}`;
}

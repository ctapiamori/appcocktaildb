import { environment } from 'src/environments/environment';

export class GeneralEnpoint {
  public static listCategory = `${environment.cocktaildb}/list.php?c=list`;
  public static listGlass = `${environment.cocktaildb}/list.php?g=list`;
  public static listIngredient = `${environment.cocktaildb}/list.php?i=list`;
  public static listAlcoholic = `${environment.cocktaildb}/list.php?a=list`;
}

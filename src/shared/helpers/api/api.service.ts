// tslint:disable: no-for-in
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';

export class OptionsRequest {
  headers?:
    | HttpHeaders
    | {
      [header: string]: string | Array<string>;
    };
  observe?: 'body';
  params?: {};
  responseType?: 'json';
  preloader?: boolean;
  reportProgress?: boolean;
  withCredentials?: boolean;
  default?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly pipes = [];

  constructor(private readonly httpClient: HttpClient) { }

  get<T>(endPoint: string, options?: OptionsRequest): Observable<T> {
    this.beforeRequest(options && options.preloader || false);

    const request = this.getUrlAndParameters(endPoint, options);
    const pipes = this.getPipesDefault(options);
    const observable = this.httpClient.get<T>(request.url, request.options);
    if (options && options.default !== undefined) {
      pipes.push(map(result => result || options.default));
    }

    return this.formatObservablePipe(observable, pipes);
  }


  private getPipesDefault(options?): Array<any> {
    const pipes = [];

    pipes.push(catchError((err: any) => this.onCatch(err)));
    pipes.push(finalize(() => this.onFinally(options && options.preloader)));

    return pipes;
  }

  /**
   * Control de Error
   */
  private onCatch(error: any): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // const messageError = `An error occurred: ${error.error.message}`;
      // Aquí se puede mandar a guardar un log de errores
      return throwError(error);
    }
    const messageError: string =
      `` + `Backend returned code ${error.status},` + `body was: ${error.error}` + `\nMessage: ${error.message}`;
    // Aquí se puede mandar a guardar un log de errores
    return error;
  }

  private beforeRequest(preloader: boolean): void {
    // aqui se puede ejecutar un evento para cargar un loader
  }

  private afterRequest(preloader: boolean): void {
    // aquí se puede detener el loader inicializado
  }

  private onFinally(preloader: boolean = false): void {
    // aquí se puede configurar opciónes que se desean realizar cuando se ha tenido una respuesta
    this.afterRequest(preloader);
  }

  private getUrlAndParameters(url: string, optionsRequest: OptionsRequest): { url?: string; options?: OptionsRequest } {
    const options: OptionsRequest = new OptionsRequest();
    let paramsQuery = new HttpParams();

    if (optionsRequest && optionsRequest.params) {
      Object.keys(optionsRequest.params)
        .forEach((parameterKey: string) => {
          if (this.isParameterInPath(url, parameterKey)) {
            url = url.replace(`{${parameterKey}}`, optionsRequest.params[parameterKey]);
          } else {
            paramsQuery = paramsQuery.append(parameterKey, optionsRequest.params[parameterKey]);
          }
        });
    }

    if (optionsRequest) {
      options.params = paramsQuery;
      options.headers = optionsRequest.headers;
    }

    return {
      url,
      options
    };
  }

  private isParameterInPath(endPoint: string, parameterKey: string): boolean {
    return !(endPoint.indexOf(`{${parameterKey}}`) === -1);
  }

  private formatObservablePipe(observable: Observable<any>, pipes): Observable<any> {
    return observable.pipe(tap(), tap(), tap(), tap(), tap(), tap(), tap(), tap(), tap(), ...pipes);
  }
}

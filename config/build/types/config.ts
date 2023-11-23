export type BuilMode = 'production' | 'development';

export interface BuildPath {
  entry:string;
  build:string;
  html: string;
}

export interface BuildOptions {
  mode:BuilMode;
  paths:BuildPath;
  isDev:boolean;
}
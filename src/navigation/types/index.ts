export enum NAVIGATION_KEYS {
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  HOME = 'HOME',
}

export type TRootStackParamList = {
  [NAVIGATION_KEYS.SPLASH]: undefined;
  [NAVIGATION_KEYS.LOGIN]: undefined;
  [NAVIGATION_KEYS.REGISTER]: undefined;
  [NAVIGATION_KEYS.HOME]: undefined;
};

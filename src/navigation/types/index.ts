export enum NAVIGATION_KEYS {
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

export type TRootStackParamList = {
  [NAVIGATION_KEYS.SPLASH]: undefined;
  [NAVIGATION_KEYS.LOGIN]: undefined;
  [NAVIGATION_KEYS.REGISTER]: undefined;
};

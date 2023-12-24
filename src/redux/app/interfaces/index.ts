export type ENV = 'dev' | 'uat' | 'prod';

export interface AppSliceStateProp {
    ENV: 'dev' | 'uat' | 'prod';
    SHOW_TOAST: boolean;
    TOAST_MESSAGE: string;
}
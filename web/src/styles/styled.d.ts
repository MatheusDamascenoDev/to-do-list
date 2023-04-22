import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            blue: string;
            blueWhite: string,
            green: string;
            red: string;
            background: string;
            shapes: string;
            textTitle: string;
            text: string;
            textLight: string;
            shadow: string;
        },
    }
}
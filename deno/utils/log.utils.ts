import { blue, underline, red, green, yellow, bold } from "https://deno.land/std@0.52.0/fmt/colors.ts";
export const log = (message: string, type?: MESSAGE) => {
    switch (type) {
        case MESSAGE.sucess:
            console.log(green(message));
            break;
        case MESSAGE.warning:
            console.log(yellow(message));
            break;
        case MESSAGE.error:
            console.log(red(message));
            break;
        case MESSAGE.bold:
            console.log(bold(message));
            break;
        case MESSAGE.url:
            console.log(underline(blue(message)));
            break;
        default:
            console.log(message);
            break;
    }
}

export enum MESSAGE {
    error,
    warning,
    sucess,
    bold,
    url,
}
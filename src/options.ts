import { boolean, object, optional, string, StructType } from 'superstruct';

export const OptionsStruct = object({
  logo: string(),
  title: optional(string()),
  background: optional(string()),
  favicons: optional(object({
    android: optional(boolean()),
    appleIcon: optional(boolean()),
    appleStartup: optional(boolean()),
    coast: optional(boolean()),
    favicons: optional(boolean()),
    yandex: optional(boolean()),
    windows: optional(boolean())
  }))
});

export type Options = StructType<typeof OptionsStruct>;

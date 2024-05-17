import { I18n } from "i18n-js";
import { en } from "./en";
import { es } from "./es";
import { ptBr } from "./pt-br";

const translations = {
  en,
  ptBr,
  es
};

const i18n = new I18n(translations);

i18n.defaultLocale = "en";
i18n.enableFallback = true;




export { i18n };

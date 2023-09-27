var en = require("./translations.en.json");
var ko = require("./translations.ko.json");
var ja = require("./translations.ja.json");

const i18n = {
  translations: {
    en,
    ko,
    ja,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;

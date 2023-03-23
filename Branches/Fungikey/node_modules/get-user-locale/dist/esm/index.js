import memoize from 'lodash.memoize';

function resolver(options) {
  return JSON.stringify(options);
}

function uniqDefined(arr) {
  return arr.filter(function (el, index) {
    return el && arr.indexOf(el) === index;
  });
}

function normalizeLocales(arr) {
  return arr.map(function (el) {
    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
      return el;
    }

    var splitEl = el.split('-');
    return splitEl[0] + "-" + splitEl[1].toUpperCase();
  });
}

function getUserLocalesInternal(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$useFallbackLocal = _ref.useFallbackLocale,
      useFallbackLocale = _ref$useFallbackLocal === void 0 ? true : _ref$useFallbackLocal,
      _ref$fallbackLocale = _ref.fallbackLocale,
      fallbackLocale = _ref$fallbackLocale === void 0 ? 'en-US' : _ref$fallbackLocale;

  var languageList = [];

  if (typeof window !== 'undefined') {
    var _window = window,
        navigator = _window.navigator;
    languageList = languageList.concat(navigator.languages, navigator.language, navigator.userLanguage, navigator.browserLanguage, navigator.systemLanguage);
  }

  if (useFallbackLocale) {
    languageList.push(fallbackLocale);
  }

  return normalizeLocales(uniqDefined(languageList));
}

export var getUserLocales = memoize(getUserLocalesInternal, resolver);

function getUserLocaleInternal(options) {
  return getUserLocales(options)[0] || null;
}

export var getUserLocale = memoize(getUserLocaleInternal, resolver);
export default getUserLocale;
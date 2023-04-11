import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { ContextApi, ContextData, Language, ProviderState, TranslateFunction } from './types';

import memoize from 'lodash/memoize';
import omitBy from 'lodash/omitBy';
import reduce from 'lodash/reduce';

import { translations } from '.';
import { EN, languages } from './config';
import { fetchLocale, getLanguageCodeFromLS, LS_KEY } from './helpers';

const initialState: ProviderState = {
  isFetching: true,
  currentLanguage: EN,
};
export default function isUndefinedOrNull(value: any): boolean {
  return value === null || value === undefined;
}

const includesVariableRegex = new RegExp(/%\S+?%/, 'gm');

const translatedTextIncludesVariable = memoize((translatedText: string): boolean => {
  return !!translatedText?.match(includesVariableRegex);
});

const getRegExpForDataKey = memoize((dataKey: string): RegExp => {
  return new RegExp(`%${dataKey}%`, 'g');
});

// Export the translations directly
const languageMap = new Map<Language['locale'], Record<string, string>>();
languageMap.set(EN.locale, translations);

export const LanguageContext = createContext<ContextApi | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ProviderState>(() => {
    const codeFromStorage = getLanguageCodeFromLS();

    return {
      ...initialState,
      currentLanguage: languages[codeFromStorage] || EN,
    };
  });
  const { currentLanguage } = state;

  useEffect(() => {
    const fetchInitialLocales = async () => {
      const codeFromStorage = getLanguageCodeFromLS();

      if (codeFromStorage !== EN.locale) {
        const currentLocale = await fetchLocale(codeFromStorage);

        if (currentLocale) {
          languageMap.set(codeFromStorage, currentLocale);
        }
      }

      setState((prevState: ProviderState) => ({
        ...prevState,
        isFetching: false,
      }));
    };

    fetchInitialLocales();
  }, []);

  const setLanguage = useCallback(async (language: Language) => {
    if (!languageMap.has(language.locale)) {
      setState((prevState: ProviderState) => ({
        ...prevState,
        isFetching: true,
      }));

      const locale = await fetchLocale(language.locale);
      if (locale) {
        languageMap.set(language.locale, locale);
        localStorage?.setItem(LS_KEY, language.locale);

        setState((prevState: ProviderState) => ({
          ...prevState,
          isFetching: false,
          currentLanguage: language,
        }));
      } else {
        setState((prevState: ProviderState) => ({
          ...prevState,
          isFetching: false,
        }));
      }
    } else {
      localStorage?.setItem(LS_KEY, language.locale);
      setState((prevState: ProviderState) => ({
        ...prevState,
        isFetching: false,
        currentLanguage: language,
      }));
    }
  }, []);

  const translate: TranslateFunction = useCallback(
    (key: string, data: ContextData | undefined) => {
      const translationSet = languageMap.get(currentLanguage.locale) ?? {};
      const translatedText = translationSet?.[key] || key;

      if (data) {
        // Check the existence of at least one combination of %%, separated by 1 or more non space characters
        const includesVariable = translatedTextIncludesVariable(key);
        if (includesVariable) {
          return reduce(
            omitBy(data, isUndefinedOrNull),
            (result, dataValue, dataKey) => {
              return result.replace(getRegExpForDataKey(dataKey), dataValue.toString());
            },
            translatedText
          );
        }
      }

      return translatedText;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentLanguage]
  );

  const providerValue = useMemo(() => {
    return { ...state, setLanguage, t: translate };
  }, [state, setLanguage, translate]);

  return <LanguageContext.Provider value={providerValue}>{children}</LanguageContext.Provider>;
};

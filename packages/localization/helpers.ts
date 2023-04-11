import { translations } from '.';
import { EN } from './config';

const publicUrl = '';

export const LS_KEY = 'oi_language';

export const fetchLocale = async (locale: string) => {
  const response = await fetch(`${publicUrl}/locales/${locale}.json`);

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  console.error(`API: Failed to fetch locale ${locale}`, response.statusText);
  return translations;
};

export const getLanguageCodeFromLS = () => {
  try {
    const codeFromStorage = localStorage.getItem(LS_KEY);

    return codeFromStorage || EN.locale;
  } catch {
    return EN.locale;
  }
};

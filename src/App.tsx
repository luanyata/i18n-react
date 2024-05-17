import { ChangeEvent, useEffect, useState } from 'react';
import { i18n } from './translations';

function App() {
  const [locale, setLocale] = useState(i18n.locale);

  useEffect(() => {
    const unsubscribe = i18n.onChange((newLocale) => {
      setLocale(newLocale.locale);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSelectLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.locale = e.target.value;
    setLocale(e.target.value);
  };


  return (
    <div className='flex h-screen items-center justify-center bg-zinc-400'>
      <div className='flex flex-col gap-4 w-1/2'>
        <h1 className='text-2xl font-bold'>{i18n.t('title')}</h1>
        <div>
          <label htmlFor="i18n-select">{i18n.t('selectLanguage')}</label>
          <select
            id='i18n-select'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={handleSelectLanguage} value={locale}>
            <option value="ptBr">{i18n.t('portuguese')}</option>
            <option value="en">{i18n.t('english')}</option>
            <option value="es">{i18n.t('spanish')}</option>
          </select>
        </div>

        <div>
          <label htmlFor='name'>{i18n.t('name')}</label>
          <input id='name' type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>

        <div>
          <label htmlFor='email' >{i18n.t('email')}</label>
          <input id='email' type="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>

        <div>
          <label htmlFor='password'>{i18n.t('password')}</label>
          <input id='password' type="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label htmlFor='confirm-password'>{i18n.t('confirmPassword')}</label>
          <input id='confirm-password' type="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>

        <button type="button" className="mt-4 items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{i18n.t('submit')}</button>
      </div>

    </div >
  )
}

export default App

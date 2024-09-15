import React, { createContext, useState, useEffect, useCallback } from 'react';

export const SearchHistoryContext = createContext();

export const SearchHistoryProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState(() => {
    const savedSearch = localStorage.getItem('searchHistory');
    return savedSearch ? JSON.parse(savedSearch) : [];
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addSearchTerm = useCallback((term) => {
    setSearchHistory(prevHistory => [...prevHistory, term]);
  }, []);

  const clearSearchHistory = useCallback(() => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  }, []);

  return (
    <SearchHistoryContext.Provider value={{ searchHistory, addSearchTerm, clearSearchHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};

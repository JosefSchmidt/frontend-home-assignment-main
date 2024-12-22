import { useContext } from 'react';
import { HomeContext } from '../Home.context';

const UseHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHomeContext must be used within a Home Provider');
  }

  return context;
};

export default UseHomeContext;

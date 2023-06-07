// External
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Internal
import DataContext from './DataContext';
import { getCollection } from '../../functions/get';

// Styles

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const resolveData = async () => {
    try {
      const projects = await getCollection();

      if (projects.length > 0) {
        setData(projects);
      }

      return projects;
    } catch (error) {
      console.error({ message: 'Error', details: error });
    }
  };

  useEffect(() => {
    resolveData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

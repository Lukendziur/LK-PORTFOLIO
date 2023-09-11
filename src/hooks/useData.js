// External
import { useContext } from 'react';
import DataContext from '../context/ColorModeContext/DataContext';

const useData = () => {
  const data = useContext(DataContext);

  const filterByProject = (id) => {
    const filteredData = data?.filter((project) => project.id === id);

    if (filteredData.length > 0) {
      const {
        title,
        description,
        esDescription,
        images,
        patterns,
        stack,
        demoLink,
        github,
      } = filteredData[0];

      return {
        title,
        description,
        esDescription,
        images,
        patterns,
        stack,
        demoLink,
        github,
      };
    } else {
      return null;
    }
  };

  return {
    filterByProject,
    data,
  };
};

export default useData;

import './Pagination.scss';
import PaginationButton from './paginationButton/PaginationButton';
import { useState } from 'react';

const pagArray = [1, 2, 3, 4];
const Pagination = () => {
  const [activePage, setActivePage] = useState<number>(1);

  const setActivePageHandler = (page: number) => () =>
    setActivePage && setActivePage(page);

  return (
    <div className="paginationMainContainer">
      <PaginationButton icon={'arrow'} />
      {pagArray.map((item, index) => (
        <PaginationButton
          icon={item}
          key={`pagination_${index}`}
          activePage={activePage}
          onClick={setActivePageHandler(item)}
        />
      ))}
      <span>...</span>
      <PaginationButton
        icon={40}
        onClick={setActivePageHandler(40)}
        className={`paginationButtonMainContainer ${activePage === 40 ? 'paginationActiveButton' : ''}`}
      />
      <PaginationButton icon={'arrow'} />
    </div>
  );
};

export default Pagination;

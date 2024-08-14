import sprite from '../../../media/sprite.svg';
import './SearchInput.scss';

const SearchInput = () => {
  return (
    <div className="searchInputContainer">
      <svg>
        <use xlinkHref={`${sprite}#search`}></use>
      </svg>
      <input type="text" placeholder="Search" />
    </div>
  );
};
export default SearchInput;

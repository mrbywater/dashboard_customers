import './PaginationButton.scss';
import sprite from '../../../../media/sprite.svg';

type PaginationButtonProps = {
  icon: string | number;
  activePage?: number;
  [key: string]: any;
};

const PaginationButton = (props: PaginationButtonProps) => {
  const { icon, activePage, ...rest } = props;

  return (
    <button
      className={`paginationButtonMainContainer ${activePage === icon ? 'paginationActiveButton' : ''}`}
      {...rest}>
      {typeof icon === 'number' ? (
        icon
      ) : (
        <svg>
          <use xlinkHref={`${sprite}#${icon}`}></use>
        </svg>
      )}
    </button>
  );
};

export default PaginationButton;

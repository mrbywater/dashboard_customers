import sprite from '../../../media/sprite.svg';
import './NavButton.scss';

type NavButtonType = {
  title: string;
  data?: boolean;
  selectedNavButton: string;
  setSelectedNavButton: (title: string) => void;
};

const NavButton = (props: NavButtonType) => {
  const { title, data, selectedNavButton, setSelectedNavButton } = props;

  const selectedButton = title === selectedNavButton;
  const selectButtonHandler = (title: string) => () =>
    setSelectedNavButton(title);

  return (
    <button
      onClick={selectButtonHandler(title)}
      className={`navButtonContainer ${selectedButton ? 'navButtonContainerSelected' : ''}`}>
      <svg className="navButtonIcon">
        <use xlinkHref={`${sprite}#${title.toLowerCase()}`}></use>
      </svg>
      <span>{title}</span>
      {!!data && (
        <svg className="navButtonArrow">
          <use xlinkHref={`${sprite}#arrow`}></use>
        </svg>
      )}
    </button>
  );
};

export default NavButton;

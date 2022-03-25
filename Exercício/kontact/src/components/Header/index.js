import Logo from '../../assets/logo.svg';
import SignOutIcon from '../../assets/logout.svg';
import toast from '../../helpers/toast';
import useGlobal from '../../hooks/useGlobal';
import './styles.css';

function Header() {
  const { removeToken } = useGlobal();

  function handleLogout() {
    toast.msgSuccess('Até logo!');
    removeToken();
  }

  return (
    <header>
      <img src={Logo} alt="Logo" />
      <img
        className="sign-out-button"
        src={SignOutIcon}
        alt="Sign Out"
        onClick={() => handleLogout()}
      />
    </header>
  );
}

export default Header;
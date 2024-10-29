import Container from "../shared/container";
import HeaderLogo from "../shared/logo";

const Header = () => {
  return ( <header>
    <Container className="flex items-center justify-between py-4">
        <HeaderLogo />
    </Container>
  </header>);
};
export default Header
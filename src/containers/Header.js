import {useLocation} from "react-router-dom";
import '../style/header.css';
import Button from './Button'
function Header() {
    const location = useLocation()
    if(location.pathname === '/') {
        return null
    }
    else {
        return (
            <nav className={'navBar'}>
                <Button
                    className={'navBarButton'}
                    buttonName={'Home'}
                    navigateTo={'/'}
                    blabla={"string"}
                />
                <Button
                    className={'navBarButton'}
                    buttonName={'Users'}
                    navigateTo={'/users'}/>
                <Button
                    className={'navBarButton'}
                    buttonName={'Create UserComponent'}
                    navigateTo={'/createUser'}/>
                <Button
                    className={'navBarButton'}
                    buttonName={'Update UserComponent'}
                    navigateTo={'/updateUser'}/>
                <Button
                    className={'navBarButton'}
                    buttonName={'Delete UserComponent'}
                    navigateTo={'/deleteUser'}/>
            </nav>
        )
    }
}
export default Header;

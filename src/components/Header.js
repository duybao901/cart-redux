import React,{Component} from 'react';

class Header extends Component{
    render(){    
        return (
            <header>
                <nav className="nav">
                    <div className="nav__right">
                        <i className="fas fa-stream"></i>
                        <span>Trang Chủ</span>
                    </div>
                    <div className="nav__left">
                        <i className="fas fa-user-alt nav__left-person"></i>
                        <span>Tài Khoản</span>
                        <i className="fas fa-caret-down"></i>
                    </div>
                </nav>                
            </header>
        );
    }
}
export default Header;

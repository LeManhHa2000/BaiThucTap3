import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery"
import "jquery-ui-dist/jquery-ui";


function Header() {

    function Click_user() {
        $(".user-list").toggleClass("d-none");
    };

    //Nav move
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()){
                $(".header-top").addClass("d-none");
            }
            else{
                $(".header-top").removeClass("d-none");
            }
        })
    });
    
    return (
        <div className="header">
            <div className="header-top container p-0">
                <div className="header-left row">
                <h1 className="col-4 text-logo mb-0">Tin tức Dạo</h1>
                <div className="box-search col-6 position-relative">
                    <input type="text" placeholder="Nhập nội dung tìm kiếm" />
                    <i className="fas fa-search" />
                </div>
                </div>
                <div className="header-right text-end">
                <FontAwesomeIcon icon={faUser} className="user-icon" onClick={Click_user} />
                    <ul className="user-list d-none">
                        <li className="user-item">Thông tin của tôi</li>
                        <li className="user-item">Đăng nhập</li>
                    </ul>
                </div>
            </div>
            <div className="header-bottom">
                <ul className="menu-list container">
                <li className="menu-item">
                    <a href="#">Nổi bật</a>
                </li>
                <li className="menu-item">
                    <a href="#">Mới</a>
                </li>
                <li className="menu-item">
                    <a href="#">Chủ đề</a>
                </li>
                <li className="menu-item">
                    <a href="#">Blog</a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
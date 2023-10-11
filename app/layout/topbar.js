import './topbar.css';

export default function TopBar(){
    return(
        <div className="topbar">
            <div className='topbar-item-left'>
                <img src='/icons8-facebook-50_W.png'></img>
                <img src='/icons8-instagram-50_W.png'></img>
                <img src='/icons8-phone-50_W.png'></img>
            </div>
            <div className='topbar-item-center '>Monday - Wednesday 15:00 – 21:00 &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Thursday to Sunday 13:00 – 22:00</div>
            <div className='topbar-item-right '>
                <img src='/icons8-shopping-bag-50_W.png'></img>
            </div>
        </div>
    )
}
import "./widget.scss"
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
const Widget = ({ type }) => {
    let data;

    //tam thoi
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon:(
                    <PersonOutlineIcon className="icon" style={{ 
                        color: "crimson", 
                        backgroundColor: " rgba(255, 0, 0, 0.2)",
                    }} 
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "ORDER",
                isMoney: false,
                link: "View all orders",
                icon:(
                    <ShoppingCartOutlinedIcon className="icon" 
                    style={{
                        backgroundColor: " rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earning",
                icon:(
                    <MonetizationOnOutlinedIcon className="icon" 
                    style={{
                        backgroundColor: " rgba(0, 128, 0, 0.2)",
                        color: "green",
                        }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See detail",
                icon:(
                    <AccountBalanceWalletOutlinedIcon className="icon" 
                    style={{
                        color: "purple",
                        backgroundColor: " rgba(128, 0, 128, 0.2)",
                        }}
                    /> 
                ),
            };
            break;
        default:
            break;
    }




    return (
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney && "$"} {amount}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ExpandLessOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget

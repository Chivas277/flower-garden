import Featured from "../../components/Featured"
import Chart from "../../components/Chart"
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import Widget from "../../components/widget/Widget"
import "./home.scss"
import Table from "../../components/table/Table"
const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Trasactions</div>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Home

import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import "./list.scss"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProducts } from './../../redux/apiRequest';
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from '@material-ui/data-grid';
const List = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteProduct(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
            field: "titlte",
            headerName: "Tên sản phẩm",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        }, { field: "categories", headerName: "Loại", width: 190 },
        { field: "inStock", headerName: "Tồn kho", width: 200 },
        {
            field: "price",
            headerName: "Giá",
            width: 160,
        },
        {
            field: "action",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/products/` + params.row._id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="datatable">
                    <div className="datatableTitle">
                        Danh sách người dùng
                        <Link to="/products/new" className="link">
                            Thêm
                        </Link>
                    </div>
                    <div className="productList">

                        <DataGrid
                            rows={products}
                            disableSelectionOnClick
                            columns={columns}
                            getRowId={(row) => row._id}
                            pageSize={8}
                            rowsPerPageOptions={[9]}
                            checkboxSelection
                            autoHeight
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List

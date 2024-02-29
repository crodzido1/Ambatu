import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import img from '../../../Assets/imgcondau4.jpg';

import './detailTree.scss';

const detailTitle = {
    "Quan": "Quận",
    "DuongId": "Tuyến dường",
    "GiongCay": "Giống cây",
    "LoaiCay": "Loại Cây",
    "D-Cay": "Đường kính thân",
    "TanLa": "Tán lá",
    "ThoiDiemCatTiaGanNhat": "Thời điểm cắt tỉa gần nhất",
    "ThoiDiemTrong": "Thời điểm trồng",
}

function DetailTree() {
    const [data, setData] = useState({});
    const [active, setActive] = useState(false);

    const { state } = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const res = await axios.get(`http://localhost:8001/tree/`);
        //         const data = await res.data;
        //         setData(data[0]);
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // fetchData();

        // return

        axios.get('http://localhost:8001/tree')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    console.log('data["LoaiCay"]: ' + data["LoaiCay"])
    return (
        <section className='detailTree'>
            <div className='container'>
                {
                    data && Object.keys(data).slice(0, 1).map((property, index) => {
                        if (property !== "MaCay" && property !== "TrangThai")
                            console.log("property >>>>>>>>>>>>", property)
                        return (
                            <div key={index} class="card mb-3" >
                                <div class="row g-0">
                                    <div class="col-md-6">
                                        <img src={img} alt="img" />
                                    </div>
                                    <div class="col-md-6">
                                        {/* <div class="card-body">
                                            <h6 className='card-text'>Quận: <span>{data["Quan"]}</span></h6>
                                            <h6 className='card-text'>Tuyến đường: <span>{data["DuongId"]}</span></h6>
                                            <h6 className='card-text'>Loại cây: <span>{data["LoaiCay"]}</span></h6>
                                            <h6 className='card-text'>Giống cây: <span>{data["GiongCay"]}</span></h6>
                                            <h6 className='card-text'>Đường kính thân: <span>{data["D-Cay"]}</span></h6>
                                            <h6 className='card-text'>Tán lá: <span>{data["TanLa"]}</span></h6>
                                            <h6 className='card-text'>Thời điểm cắt tỉa gần nhất: <span>{data["ThoiDiemCatTiaGanNhat"]}</span></h6>
                                            <h6 className='card-text'>Thời điểm trồng: <span>{data["ThoiDiemTrong"]}</span></h6>
                                            <h6 className='card-text'>Ghi chú: <span></span></h6>
                                        </div> */}
                                        <div className='flex flex-col  gap-5 items-center justify-between p-5'>
                                            <div className='grid gap-3 '>
                                                <h6 className='font-bold text-lg'>Quận:</h6>
                                                <h6 className='font-bold text-lg'>Tuyến đường:</h6>
                                                <h6 className='font-bold text-lg'>Loại cây:</h6>
                                                <h6 className='font-bold text-lg'>Giống cây:</h6>
                                                <h6 className='font-bold text-lg'>Đường kính thân:</h6>
                                                <h6 className='font-bold text-lg'>Tán lá:</h6>
                                                <h6 className='font-bold text-lg'>Thời điểm cắt tỉa gần nhất:</h6>
                                                <h6 className='font-bold text-lg'>Thời điểm trồng:</h6>
                                                <h6 className='font-bold text-lg'>Ghi chú:</h6>
                                            </div>

                                            <div className='grid gap-3 items-end'>
                                                <h6 className='font-bold text-lg'>{data["Quan"] ? data["Quan"] : 'Quan'}</h6>
                                                <h6 className='font-bold text-lg'>{data["DuongId"] ? data["DuongId"] : 'DuongId'}</h6>
                                                <h6 className='font-bold text-lg'>{data["LoaiCay"] ? data["LoaiCay"] : 'Loại cây'}</h6>
                                                <h6 className='font-bold text-lg'>{data["GiongCay"] ? data["GiongCay"] : 'GiongCay'}</h6>
                                                <h6 className='font-bold text-lg'>{data["D-Cay"] ? data["D-Cay"] : 'D-Cay'}</h6>
                                                <h6 className='font-bold text-lg'>{data["TanLa"] ? data["TanLa"] : 'Tan La'}</h6>
                                                <h6 className='font-bold text-lg'>{data["ThoiDiemCatTiaGanNhat"] ? data["ThoiDiemCatTiaGanNhat"] : 'ThoiDiemCatTiaGanNhat'}</h6>
                                                <h6 className='font-bold text-lg'>{data["ThoiDiemTrong"] ? data["ThoiDiemTrong"] : 'ThoiDiemTrong'}</h6>
                                                <h6 className='font-bold text-lg'>Không</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <div className='button-group'>
                <div className='btn-success'>
                    <Button variant="success">Chỉnh sửa</Button>{' '}
                </div>
                <div className='btn-danger'>
                    <Button variant="danger">Xóa</Button>{' '}
                </div>
            </div>

        </section>
    )
}

export default DetailTree

// <tr key={index}>
//     <div className='image-detail'>
//         <div className='padding' >
//             <img src="" alt='img' />
//         </div>
//     </div>
//     <div className='detail'>
//         <p>Hello</p>
//     </div>
//     <Button variant="success">{detailTitle[property]}</Button>
//     <Button variant="success">{data[property]}</Button>
// </tr>
import { Route, Routes } from "react-router"
import { Manage } from "../pages/Manage"
import DetailTree from "../pages/ManageTree/DetailTree/detailTree"
import { ManageTree } from "../pages/ManageTree/ManageTree"
import InputSizesExample from "../pages/ManageTree/UpdateTree/updateTree"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Manage />} />
            <Route path="/manage-tree" element={<ManageTree />} />
            <Route path="/update-tree" element={<InputSizesExample />} />
            <Route path="/detail-tree/:treeCode" element={<DetailTree />}/>
        </Routes>
    )
}
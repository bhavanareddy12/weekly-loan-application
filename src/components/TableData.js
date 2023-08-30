import React from "react";
import Table from 'react-bootstrap/Table';


const TableData = ({columns,bodyData}) => {
    const theadData = columns.length > 0 && columns.map(title=>{
        return <th key={title}>{title}</th>
    })
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    {theadData}
                </tr>
            </thead>
            <tbody>
                {bodyData}
            </tbody>
        </Table>
    )
}

export default TableData
export {TableData}
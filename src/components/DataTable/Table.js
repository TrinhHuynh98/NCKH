import React from 'react';

const Table = (props) => {
    const {headers, rows} = props;
    return (
        <div>
            <table class="table table-bordered table-hover">
                <TableHeader headers={headers}></TableHeader>
                <TableBody headers={headers} rows={rows}></TableBody>
            </table>            
        </div>
    );
}

const TableHeader = (props) => {
    const {headers} = props;
    return(
        <thead className="thead-light" key="header-1">
            <tr key="header-0">
                {headers && headers.map((value, index) => {
                    return <th key={index}><div>{value}</div></th>
                })}
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const {headers, rows} = props;

    function buildRow(rows, headers) {
        return (
            <tr key={rows.id}>
                { headers.map((value, index) => {
                    return <td key={index}>{rows[value]}</td>
                })}
            </tr>
        )
    }

    return(
        <tbody>
            { rows && rows.map((value) => {
                return buildRow(value, headers);
            })}
        </tbody>
    )
}

export default Table;
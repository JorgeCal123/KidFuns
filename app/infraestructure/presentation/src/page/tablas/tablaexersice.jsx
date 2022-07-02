import axios from "axios";
import { useState, useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory  from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor'
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';

function Table() {
    const [data, setData]=useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        axios('https://jsonplaceholder.typicode.com/comments').then(res=>{
            console.log(res.data);
            setData(res.data)
        });
            
    };
    const emailFormatter = (data, row) => {
        return (<span>Email = { data }</span>);
    };
    const selectRow={
        mode: 'checkbox',
        clickToSelect: true,
        selected: [1, 3],
        clickToEdit: true,
    };
    const columns = [
        {
            dataField: 'email',
            text: 'Email',
            sort: true,
            formatter: emailFormatter,
        },
        {
            dataField: 'postId',
            text: 'Product ID',
            sort: true,
            filter: textFilter(),
            validator:(newValue, row, columns)=> {
                if(isNaN(newValue)){
                    return {
                        valid: false,
                        message: 'please enter numeric value'
                    }
                }
                return true
            }
        },
        {
            dataField: 'name',
            text: 'Name',
            sort: true,
            editable: false,
            filter: textFilter(),
        },
        {
            dataField: 'email',
            text: 'Dropdown',
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 'A',
                        label: 'A',
                    },
                    {
                        value: 'B',
                        label: 'B',
                    },
                ],
            },
        },
    ];
    return ( 
    <main>
        <BootstrapTable
          keyField="id"
          data={ data }
          columns={columns}
          striped
          hover
          condensed
          pagination={ paginationFactory() }
          cellEdit={ cellEditFactory({
            mode: 'dbclick',
            blurToSave: true,
            nonEditableRows: () => [1, 2, 3],
        }) }
          selectRow={selectRow}
          filter={filterFactory()}
        />
    </main> );
}

export { Table };
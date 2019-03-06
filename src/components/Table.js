import React, {Component} from 'react';
import styled from 'styled-components';

let Tbl = styled.div`
`;

let TableHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #ddd; 
    padding: 5px;
    line-height: 1.42857143;
    .th {
        width: ${(props) => 100 / props.headerLength}%;
    }
    .sortable {
        color: #337ab7;
        font-weight: bold;
        :hover {
            text-decoration: underline;
            color: #23527c;
        }
    }
`;

let TableBody = styled.div`
    .tr {
        display: flex;
        width: 100%;
        border-top: 1px solid #ddd;
        padding: 5px;
        line-height: 1.42857143;

        div {
          width: ${(props) => 100 / props.headerLength}%;

        }
    }
`;

class Table extends Component {
    render(){
        let {headers, rows, onSort} = this.props;
        return(
            <Tbl>
                <TableHeader headerLength={headers.length}>
                    {headers.map((item, index) => 
                        <div onClick={() => onSort(item.sortable && item.sortKey)} key={index} className={`th${item.sortable && " sortable"}`}> 
                            {item.sortable && <i className={`fa fa-sort${item.asc}`}/>}{item.title}
                        </div>
                    )}
                </TableHeader>
                <TableBody headerLength={headers.length}>
                    {rows.length > 0 ? 
                        rows.map((item, index) => 
                            <div key={index} className="tr">
                                {headers.map((header, index) => <div key={index}>{item[header.sortKey]}</div>)}
                            </div>
                        ) : <div style={{textAlign: 'center'}}>Nothing to show</div>
                    }
                </TableBody>
            </Tbl>
        );
    }
}

export default Table;
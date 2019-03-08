import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import Table from '../../components/Table';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {sortTable} from '../../helpers/Helper';
import { BrowserRouter as Route,  Link } from "react-router-dom";


let Container = styled.div`
    margin-top: 27px;
    margin-left: 27px;
    width: 95%;
 
    a {
        margin-left: 10px;
        text-decoration: none;
        color: #2f78b9;
        font-weight: 500;
    }

    a:hover {
        text-decoration: underline;
    }

    .btn {
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        padding: 8px 10px;
        background-color: #fd6c21;
        color: #fff;
        border-radius: 4px;
    }

    .btn:hover {
        text-decoration: none;
    }

    .react-tabs__tab-list {
        margin: 0;
    }
    
    .switch-button {
        margin: 15px 0px 0px 15px;
    }

    .react-tabs__tab-panel {
        background: #fff;
        border-left: 1px solid #aaa;
        border-right: 1px solid #aaa;
        border-bottom: 1px solid #aaa;
        padding: 10px;
    }

    .react-tabs__tab-panel--selected {
        display: block;
    }

`;

class Perks extends Component {
    state = {
        headers: [
            {asc: '', title: "Title", sortable: true, sortKey: "perk"},
            {asc: '', title: "Required Referrals", sortable: true, sortKey: "count"},
            {asc: '', title: "", sortable: false, sortKey: "buttons"},
        ],

        rows: []
    }

    componentDidMount() {
        let token = window.localStorage.getItem('authentication_token');
        fetch('https://api.rifird.com/admin/perks/?limit=30&offset=0', {
            method: 'GET',   
            headers: {
                'Authorization': `Token token=${token}`,
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => this.setState({
            rows: data.perks.map(item => ({
                perk: item.title,
                count: item.required_referrals,
                buttons: <div><Link to="/perk/viewPerk">View</Link><Link to="/perk/editPerk">Edit</Link></div>
            }))
        }))
    }

    onSort = (sortKey) => {
        let {rows, headers} = this.state;
        let result = sortTable.sort_table(headers, rows, sortKey);
        this.setState({headers: result.headers, rows: result.rows});
    }

    render(){
        let {headers, rows} = this.state;
        return(
            <Container>
            <Tabs>
                <TabList>
                    <Tab>Customer Rewards</Tab> 
                    <Tab>Friends’ rewards</Tab>
                </TabList>
                <TabPanel>
                    <div className="switch-button">
                        <Link className="btn" to="/perk/addPerkCustomer">New Perk for Customer Rewards</Link>
                    </div>
                    <UICard className="x" title="Visible" mid={true} half={false}>
                        <Table className="headers" headers={headers} rows={rows} onSort={(sortKey) => this.onSort(sortKey)}/>
                    </UICard>
                    <UICard title="Hidden" mid={true} half={false}>
                        <Table headers={headers} rows={[]} onSort={(sortKey) => this.onSort(sortKey)}/>
                    </UICard>
                </TabPanel>
                <TabPanel>
                    <div className="switch-button">
                        <Link className="btn" to="/perk/addPerkCustomer">New Perk for Friends' Rewards</Link>
                    </div>
                    <UICard title="Visible" mid={true} half={false}>
                        <Table className="headers" headers={headers} rows={rows} onSort={(sortKey) => this.onSort(sortKey)}/>
                    </UICard>
                </TabPanel>
            </Tabs>
            </Container>
        );
    }
}

export default Perks;
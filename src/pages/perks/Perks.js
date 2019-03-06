import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import Table from '../../components/Table';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {sortTable} from '../../helpers/Helper';
import { BrowserRouter as Route,  Link } from "react-router-dom";


let Container = styled.div`
    .tabs {
        width: 1000px;
        margin-top: 30px;
    }

    .tab-panel {
       background: white;
       border-left: 1px solid #aaa;
       border-right: 1px solid #aaa;
       border-bottom: 1px solid #aaa;
       margin-left: 30px;

    }

    .tab-list {
        padding: 0 0 0 30px;
        margin: 0;
    }

    a {
        margin-left: 10px;
        text-decoration: none;
        color: #2f78b9;
        font-weight: 400;
    }

    .extra-space {
        padding: 10px 20px;
    }

    .add-button {
        text-decoration: none;
        color: white;
        background: #fd6c21;
        padding: 8px 12px;
        font-size: 14px;
        font-weight: 500;
        margin-left: 30px; 
        margin-top: 20px;
        border-radius: 4px;
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
            <Tabs className="tabs">
                <TabList className="tab-list">
                    <Tab>Customer Rewards</Tab> 
                    <Tab>Friends’ rewards</Tab>
                </TabList>
                <TabPanel className="tab-panel">
                <div className="extra-space"></div>
                    <Link className="add-button" to="/perk/addPerkCustomer">New Perk for Customer Rewards</Link>
                    <UICard title="Visible" mid={true} half={false}>
                        <Table className="headers" headers={headers} rows={rows} onSort={(sortKey) => this.onSort(sortKey)}/>
                    </UICard>
                    <UICard title="Hidden" mid={true} half={false}>
                        <Table headers={headers} rows={[]} onSort={(sortKey) => this.onSort(sortKey)}/>
                    </UICard>
                </TabPanel>
                <TabPanel className="tab-panel">
                <div className="extra-space"></div>
                    <Link className="add-button" to="/perk/addPerkCustomer">New Perk for Friends' Rewards</Link>
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
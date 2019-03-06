import React, {Component} from 'react';
import styled from 'styled-components';


let Card = styled.div`
    border-radius: 4px;
    background-color: white; 
    border: 1px solid #ddd;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    width: ${(props) => props.mid ? '935px' : props.half ? '45%' : '975px'};
    display: inline-block;
    margin: ${(props) => props.half ? '30px 30px' : '30px 10px 30px 10px'}

    .card-title {
        color: #333;
        background-color: #f5f5f5;
        padding: 10px 15px;
        border-bottom: 1px solid #ddd;
    }
     
    .card-body {
        padding: 20px;
    }
`;


class UICard extends Component {
    render(){
        let {title, half, mid} =this.props;
        return (
            <Card half={half} mid={mid}>
                <div className="card-title">{title}</div>
                <div className="card-body">{this.props.children}</div>
            </Card>
        );
    }
}

export default UICard;
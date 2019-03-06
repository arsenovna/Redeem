import React, {Component} from 'react';
import styled from 'styled-components';


let Container = styled.div`
    width: 64%
    background: white;
    margin-top: 20px;
    margin-left: 210px;
    padding: 20px 30px 60px;
    height: 400px


    h2 {
        text-align: center;
    }

    p {
        text-align: center;
        margin-bottom: 150px;
    }

    a {
         text-decoration: none;
         color: #333;
         background-color: #fff;
         border: 1px solid #ccc
         font-size: 14px;
         margin-left: 40%;
         padding: 7px 14px;
         border-radius: 4px;
         font-weight: 500;
    }

    a:hover {
        background: #ccc
    }
`;

class CheckEmail extends Component {
    render(){
        const {email} = this.props;
        return(
            <Container>
                <h2>Check your Email to Submit Your Business to Rifird</h2>
                <p>To submit your business for addition to Rifird, please click on the confirmation Link in the email that was sent to</p>
                <a href="">Go to main page</a>
            </Container>

        );
    }

}


export default CheckEmail;
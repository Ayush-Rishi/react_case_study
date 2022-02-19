import React, { useState } from 'react';
import CompanyDetailsComponent from './companydetailscomponent';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';


function CompaniesListComponent(props) {

    const userId = 1

    const [CompanyList, setCompanyList] = useState([])
    axios.get("http://localhost:8080/companies").then((res) => {
        setCompanyList(res.data)
    })
    var CompanyDetailsList = []
    console.log(CompanyList)

    CompanyList.map((company) => {
        console.log(company)
        CompanyDetailsList.push(<CompanyDetailsComponent loggedIn={false} watch={false} userId={userId} companyId={company.companyId} companyName={company.companyName} description={company.description} price={company.currentStockPrice} />)
        return false
    })

    return (
        <Container>
            <Row>
                <h4> Companies List </h4>
                {CompanyDetailsList}
            </Row>
        </Container>
    )

}

export default CompaniesListComponent
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import React from 'react';

const CarDealers = ({ dealers }) => {
    return (
        <div className='dealers'>
            <h4>Available Dealers</h4>

            <div className='card-details-container'>
                {
                    dealers && dealers.map((dealer, index) => {
                        return (
                            <Card key={index}>
                                <CardImg top width="100%" src={dealer.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag='h4'>{dealer.showRoomName}</CardTitle>
                                    <CardSubtitle tag='h5'>{dealer.brandName}</CardSubtitle>
                                    <CardText>
                                        <div className='card-content'>
                                                <div>Phone Number : {dealer.PhoneNumber}</div>
                                                <div>Location : {dealer.location}</div>
                                        </div>
                                    </CardText>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CarDealers;
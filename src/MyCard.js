import React from 'react'
import {Card,CardBody,CardTitle,CardText} from 'reactstrap';
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from 'react-icons/fa';

export default function MyCard({details}) 
{
    return(
        <Card>
            <CardBody className="text-center">
                <img 
                height="150" 
                width="150" 
                class="rounded-circle img-thumbnail border-danger"
                 src={details.picture?.large} />
                 <CardTitle className="text-primary">
                 <h1>
                 <span className="mr-3">{details.name?.title}</span>
                 <span>{details.name?.first}</span>
                 <span>{details.name?.last}</span>

                 </h1>
                     
                 </CardTitle>
            </CardBody>
        </Card>

    )
};

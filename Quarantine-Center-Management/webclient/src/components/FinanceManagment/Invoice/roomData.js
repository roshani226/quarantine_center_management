import React, {useEffect} from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { ListGroup, Row, Col, Button, Form, Modal } from 'react-bootstrap'
import { useSelector } from "react-redux";  


const fontstyle = { color: 'black' };
const cardfooter = { color: 'black', fontstyle: 'bold', fontsize: '24px' };

export default function BookingData() {
    const [modalShow, setModalShow] = React.useState(false); 
 
    const incvoiceBookData = useSelector((state) => state.invoicebooking); 
 

    var total = 0;
    var count = 0;
    return (
        <div>
            <section class="comp-section">
                <div class="comp-header">
                    <h3 class="comp-title">Room Details</h3>
                    <div class="line"></div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <ListGroup>
                            <Scrollbars style={{ width: '100%', height: 400 }}>
                                {incvoiceBookData.map((invoicebooking) => {
                                    total = total + invoicebooking.price;
                                    count = count + 1;
                                    return (
                                        <ListGroup.Item style={fontstyle}>
                                            <Row>
                                                <Col sm={2} md={2} ><div> No. {count} </div>   </Col>
                                                <Col sm={4} md={4}><div> Booking ID :  {invoicebooking.fname} </div>   </Col>
                                                <Col sm={4} md={4}><div> Booking Price :  Rs.{invoicebooking.price} </div>  </Col>
                                                <Col sm={2} md={2}>
                                                    <div>
                                                        <Button variant="primary" onClick={() => setModalShow(true)}> 
                                                        View Order
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )
                                })}
                            </Scrollbars>
                            {/* <div><h1>Total = {total}</h1></div> */}
                        </ListGroup>
                    </div>
                    <div class="card-footer text-muted">
                        <Form.Control style={cardfooter} type="text" placeholder={"Food Order Total : Rs." + total + ".00"} readOnly />
                    </div>
                </div>
            </section>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
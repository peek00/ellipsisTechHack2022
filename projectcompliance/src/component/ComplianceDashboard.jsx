//Bootstrap
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {FcApproval, FcHighPriority, FcInfo} from "react-icons/fc";
import Alert from 'react-bootstrap/Alert';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ComplianceDashboard(props) {

    const percentage = 84;

    return (
        <div>
        <Row className="justify-content-center">
            <Col lg={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Compliance Results for</Card.Title>
                        <h1>{props.props}</h1>
                        <Card.Text>Compliance checker powered by 150 years of financial expertise.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Background Check</Card.Title>
                        <Card.Text><FcApproval size={45}/> Things check out!</Card.Text>
                        <Card.Text>This user does not pose a high security risk.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Credit Score</Card.Title>
                        <Row>
                            <Col lg={3}>
                                <div className="justify-content-center" style={{width:"100%",  height:"100%"}}>
                                <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({ pathColor:"green", textColor:"green"})} />
                                </div>
                            </Col>
                            <Col lg={9}>This user has positive credit ratings from several banking insitution.</Col>
                        
                        </Row>
                   
                    </Card.Body>
                </Card>
            </Col>
        </Row>
                <Row className="justify-content-center">
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Compliance Results for</Card.Title>
                            <h1>{props.props}</h1>
                            <Card.Text>Compliance checker powered by 150 years of financial expertise.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Background Check</Card.Title>
                            <Card.Text><FcApproval size={45}/> Things check out!</Card.Text>
                            <Card.Text>This user does not pose a high security risk.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Credit Score</Card.Title>
                            <Row>
                                <Col lg={3}>
                                    <div className="justify-content-center" style={{width:"100%",  height:"100%"}}>
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({ pathColor:"green", textColor:"green"})} />
                                    </div>
                                </Col>
                                <Col lg={9}>This user has positive credit ratings from several banking insitution.</Col>
                            
                            </Row>
                       
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>

    );
};

export default ComplianceDashboard;
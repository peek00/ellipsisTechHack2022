//Bootstrap
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {FcApproval, FcDisclaimer, FcHighPriority, FcInfo} from "react-icons/fc";
import Alert from 'react-bootstrap/Alert';
import { buildStyles, CircularProgressbar,  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ComplianceDashboard(props) {

    const percentage = 84;
    const percentage2 = 564;

    return (
        <div>
        <Row className="justify-content-center mb-5">
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
                            <Card.Title><FcInfo size={45}/>How do we expect this to be powered?</Card.Title>
                            <h1>{props.props}</h1>
                            <Card.Text>The backend logic, processing and crosschecking will likely be done by Goldman Sach's organisation; what they offer potential users is the ability to leverage on those system via API keys to check users.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Background Check</Card.Title>
                            <Card.Text><FcDisclaimer size={45}/> This user seems too perfect!</Card.Text>
                            <Card.Text>All records to this user points to him being an angel, he has never been witnessed jaywalking once as well. When things are too good to be true, they are probably all hard-coded.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Credit Rating</Card.Title>
                            <Row>
                                <Col lg={3}>
                                    <div className="justify-content-center" style={{width:"100%",  height:"100%"}}>
                                    <CircularProgressbar value={percentage} text={`${percentage2}`} styles={buildStyles({ pathColor:"green", textColor:"green"})} />
                                    </div>
                                </Col>
                                <Col lg={9}>This user has NOT defaulted on any payments, loans in the history of humankind. He has paid off every single debt he has owned and even the debts of his family, friends and children.
                                Quite frankly I have no idea what else to write inside this dashboard.</Col>
                            
                            </Row>
                       
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>

    );
};

export default ComplianceDashboard;
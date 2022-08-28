//Bootstrap
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {FcApproval, FcHighPriority, FcInfo} from "react-icons/fc";
import Alert from 'react-bootstrap/Alert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ComplianceDashboard(props) {

    const percentage = 84;


    return (
        
        <Row>
            <Col lg={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Compliance Results for</Card.Title>
                        <Card.Text>{props.props}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Background Check</Card.Title>
                        <Card.Text><FcApproval size={45}/> Things check out!</Card.Text>
                        <div className="justify-content-center" style={{width:"25%",  height:"25%"}}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        </div>
                        <Card.Text>This user does not pose a high security risk.</Card.Text>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};

export default ComplianceDashboard;
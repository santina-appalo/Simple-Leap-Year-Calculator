import { useState } from "react";
import { Button, Card, Container, ListGroup ,Form,Col,Row} from "react-bootstrap";


function Todo(){
    const [input,setInput] = useState("");
    const [active,setActive] = useState("");
    const [complete,setComplete] = useState("");

    let add = () =>{
        setActive([...active,input]);
        setInput("");
    };

    let handleTrigger = (event) =>{
        if(event.key == "Enter"){
            event.preventDefault();
            add();
        }
    };

    let remove = (ind) => {
        let activedata = [...active];
        activedata.splice(ind,1);
        setActive(activedata);
    };

    let done = (ind) => {
        let activedata = [...active];
        let data = activedata.splice(ind, 1);
        console.log(data);
        setComplete([...complete, ...data]);
        setActive(activedata);
    };

    let Reset = () => {
        setInput("");
        setActive([]);
        setComplete([]);
    };

    return(
        <Container fluid="md" style={{minHeight: "100%"}}>
            <Card  style={{minHeight: "650px", marginTop:"40px"}}>
                <Card.Title className="d-flex justify-content-center mt-3"style={{fontSize:"30px"}}> Todo List</Card.Title>
                <Card.Body>
                    <Form.Group
                    as={Row}
                    className="aligne-items-center"
                    style={{marginTop:"30px"}}>
                        <Form.Label column xs="auto" style={{fontSize: "20px"}}> Enter Your Task here:</Form.Label>
                        <Col xs="auto">
                        <Form.Control placeholder="enter here" value={input} 
                        onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => handleTrigger(event)}/>
                        </Col>
                        <Col xs="auto">
                        <Button onClick={add}>Add</Button>
                        <Col xs="auto"></Col>
                        </Col>
                        <Col style={{marginLeft:"680px"}}>
                        <Button onClick={Reset} variant="secondary">Reset</Button>
                        </Col>
                    </Form.Group>
                    <Row>
                        <Col xs={12} md={6} className="mt-5">
                        <Card style={{height: "350px"}}>
                            <Card.Title className="d-flex justify-content-center mt-3">Active List:</Card.Title>
                            <Card.Body style={{ overflowY: "auto"}}>
                                <ListGroup >
                                    {active && active.map((val, ind) => {
                                        return(
                                            <ListGroup.Item key={ind} className="mt-3" style={{ display: "inline-block"}} >
                                                {val}
                                                <div>
                                                    <Button variant="danger" onClick={() => remove(ind)}>x</Button>
                                                    <Button variant="success" onClick={() => done(ind)}>Done</Button>
                                                </div>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={12} md={6} className="mt-5">
                        <Card style={{height: "350px"}}>
                            <Card.Title className="d-flex justify-content-center mt-3">Complete List:</Card.Title>
                            <Card.Body style={{ overflowY: "auto"}}>
                                <ListGroup >
                                    {complete && complete.map((val, ind) => {
                                        return(
                                            <ListGroup.Item key={ind} className="mt-3" style={{ display: "inline-block"}}>
                                                {val}
                                            </ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>

        </Container>

    );
}

export default Todo;
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalLogin = (props) => {
  const { isOpenModalLogin, closeModal } = props;
  return (
    <>
      <Modal show={isOpenModalLogin} onHide={closeModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="secondary" size="lg">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalLogin;

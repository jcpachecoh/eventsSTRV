import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Modal, Button } from 'react-bootstrap';
import { UsersActions, logout, setErrorModal } from '../../actions/usersActions';

interface IConfirmModalProps {
  setErrorModal: Function;
  showErrorModal: boolean;
  logout: Function;
}

class ConfirmModal extends React.Component<IConfirmModalProps, {}> {
  public render() {
    const { setErrorModal, showErrorModal, logout } = this.props;
    return (
      <div className="static-modal">
        {}
        <Modal show={showErrorModal} onHide={() => setErrorModal(false)}>
          <Modal.Header>
            <Modal.Title>Confirmation Modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>Your session has expired, please login again</Modal.Body>

          <Modal.Footer>
            <Button onClick={() => setErrorModal(false)}>Close</Button>
            <Button bsStyle="success" onClick={() => logout()}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

type ConnectedStateProps = Pick<IConfirmModalProps, 'showErrorModal'>;
export function mapStateToProps({ userReducer: { showErrorModal } }: any): ConnectedStateProps {
  return {
    showErrorModal
  };
}

type ConnectedDispatchProps = Pick<IConfirmModalProps, 'setErrorModal' | 'logout'>;

export function mapDispatchToProps(dispatch: Dispatch<UsersActions>): ConnectedDispatchProps {
  return {
    setErrorModal: (value: boolean) => dispatch(setErrorModal(value)),
    logout: (id: string) => dispatch(logout())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmModal);

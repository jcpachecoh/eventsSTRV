import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Modal, Button } from 'react-bootstrap';
import { EventsActions, showConfirm, deleteEvent } from '../../../actions/eventsActions';

interface IConfirmModalProps {
  showConfirm: Function;
  showModal: boolean;
  deleteEvent: Function;
  eventId: string;
}

class ConfirmModal extends React.Component<IConfirmModalProps, {}> {
  public render() {
    const { showConfirm, showModal, deleteEvent, eventId } = this.props;
    return (
      <div className="static-modal">
        {}
        <Modal show={showModal} onHide={() => showConfirm(false)}>
          <Modal.Header>
            <Modal.Title>Confirmation Modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>¿Are you sure that you want to delete this event?</Modal.Body>

          <Modal.Footer>
            <Button onClick={() => showConfirm(false)}>Close</Button>
            <Button bsStyle="success" onClick={() => deleteEvent(eventId)}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

type ConnectedStateProps = Pick<IConfirmModalProps, 'showModal'>;
export function mapStateToProps({ eventsReducer: { showModal } }: any): ConnectedStateProps {
  return {
    showModal
  };
}

type ConnectedDispatchProps = Pick<IConfirmModalProps, 'showConfirm' | 'deleteEvent'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    showConfirm: (value: boolean) => dispatch(showConfirm(value)),
    deleteEvent: (id: string) => dispatch(deleteEvent(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmModal);

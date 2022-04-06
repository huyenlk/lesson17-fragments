import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../Actions/modal';


class CommonModal extends Component {

  componentDidMount() {
  }

  render() {
    const { hideModal } = this.props.modalActionCreator
    return (
      <Modal open={this.props.open} onClose={hideModal}>
        <div className={this.props.classes.modal}>
          <div className={this.props.classes.header}>
            <span className={this.props.classes.title}>{this.props.title}</span>
            <CloseIcon className={this.props.classes.icon} onClick={hideModal} />
          </div>
          <div className={this.props.classes.content}>{this.props.component}</div>
        </div>
      </Modal>
    );
  }
}

Modal.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  component: PropTypes.object,
  modalActionCreator: PropTypes.shape({
    hideModal: PropTypes.func
  }),
  title: PropTypes.string,
}

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
})

const mapDispatchToProps = (dispatch) => ({
  modalActionCreator: bindActionCreators(modalActions, dispatch)
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CommonModal));

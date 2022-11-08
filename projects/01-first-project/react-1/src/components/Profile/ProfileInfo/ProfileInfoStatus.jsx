import React from "react";
import s from './ProfileInfo.module.css'


class ProfileInfoStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode === true &&
                <div>

                    <input 
                    onChange={this.onStatusChange}
                    autoFocus 
                    onBlur={this.deactiveEditMode.bind(this)} type="text" value={this.state.status} />
                </div>
            }
        </div >
        )
    }

}

export default ProfileInfoStatus;
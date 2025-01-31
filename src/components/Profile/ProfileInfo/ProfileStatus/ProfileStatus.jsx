import React from "react";

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false,
    }
    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateProfileStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div>
                            <input type="text" onBlur={this.deactivateEditMode} value={this.state.status}
                                   onChange={this.onStatusChange} autoFocus={true}/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : "no status"}</span>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
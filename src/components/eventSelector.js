import React from 'react';
import {Form} from 'react-bootstrap';
import events from '../events';
import * as PropTypes from 'prop-types';


export class EventSelector extends React.Component {
    render() {
        return <>
            <Form.Group className={"mb-3"}>
                <Form.Label>Select event</Form.Label>
                <Form.Select value={this.props.selectedEvent} onChange={this.props.onChange}>
                    {Array.from(events).map(([eventName, _]) => {
                        return (<option key={eventName} value={eventName}>{eventName}</option>);
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>Link to this timetable</Form.Label>
                <div className="input-group">
                    <input id="eventUrl" type="text" className="form-control" readOnly={true}
                           value={`${window.location.protocol}//${window.location.host}/timetable?event=${encodeURIComponent(this.props.value)}`}
                           placeholder="Some path"/>
                    <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button" id="copy-button"
                                            data-toggle="tooltip" data-placement="button"
                                            title="Copy to Clipboard"
                                            onClick={this.props.onClick}
                                    >Copy</button>
                                </span>
                </div>
            </Form.Group>
        </>;
    }
}

EventSelector.propTypes = {
    selectedEvent: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};
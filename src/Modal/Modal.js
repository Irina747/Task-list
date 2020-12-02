import React from 'react';
import './Modal.css';
import Motivation from './Motivation';


export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button className='btn' onClick={() => this.setState({isOpen: true})}>Мотивация</button>

                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Твоя мотивация</h1>
                            <p className='p'>
                                <Motivation />
                            </p>
                            <button className='btn' onClick={() => this.setState({isOpen: false})}>Закрыть</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

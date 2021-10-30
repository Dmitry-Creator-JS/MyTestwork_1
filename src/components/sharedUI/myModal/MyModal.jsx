import React from 'react';
import m from './myModal.module.css'

const MyModal = () => {
    return (
        <div className={m.modal}>
            <div className={m.modalContent}> </div>
        </div>
    );
};

export default MyModal;
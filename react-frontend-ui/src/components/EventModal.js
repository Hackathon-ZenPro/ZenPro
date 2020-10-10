import React, { useState } from 'react';
import Modal from 'react-modal';

function EventModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <Modal isOpen={true}>

            </Modal>
        </div>
    );
}

export default EventModal;
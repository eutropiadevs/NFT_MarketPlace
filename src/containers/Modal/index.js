import React from 'react'
import { useState } from 'react';
import './index.scss'

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

	function handleOpenModal() {
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		setIsModalOpen(false);
	}

	return (
		<>
			<div className='modal-btn'>
				<button onClick={handleOpenModal}>Connect</button>
				<div className='open-modal'>
					{isModalOpen && (
						<div className='open-modal_sub'>
							<h2>Keplr Wallet</h2>
							<button onClick={handleCloseModal}>Connect Wallet</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Modal

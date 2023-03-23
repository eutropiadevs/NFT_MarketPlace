import React from 'react'
import FormRow from '../form/form'
import './index.scss'

const Form = () => {
  return (
		<>
			<div className="create-account">
				<h1>Creator</h1>
				<div className='btns'>
					<button>Create Account</button>

					<button>Get NFT List</button>
				</div>

				<div className="form-info">
					<FormRow type="text" name="XRP" labelText="XRP" />
				</div>
				<div className="btn-creator">
					<button>Send XRP</button>
				</div>
				<div className="form-info">
					<FormRow type="text" name="NFT" labelText="NFT" />
				</div>
				<div className="form-info">
					<FormRow type="text" name="Amount" labelText="Amount" />
				</div>
				<div className="btn-creator">
					<button>Mint NFT</button>
				</div>
				{/* <div className="btn-creator">
					<button>Get NFT List</button>
				</div> */}
				<div className="form-info">
					<FormRow type="text" name="Burn NFT" labelText="Burn NFT" />
				</div>
				<div className="btn-creator">
					<button>Burn NFT</button>
				</div>
			</div>
		</>
	);
}

export default Form

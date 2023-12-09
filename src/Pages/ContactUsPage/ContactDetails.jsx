import React from 'react';

const ContactDetails = () => {
	return (
		<div className='container flex flex-col items-center justify-center min-h-screen gap-10 px-5 my-10 lg:px-0 lg:flex-row'>
			<div className='lg:w-[30%] flex flex-col'>
				<p className='font-semibold tracking-widest uppercase text-secondary'>
					Contact
				</p>
				<p className='text-3xl font-bold capitalize lg:text-5xl'>
					get in touch with us
				</p>
				<p className='mt-5 text-base-300'>
					Contact us for personalized assistance and prompt, reliable support.
					We're ready to help!
				</p>
				<div className='flex mt-16 gap-x-5'>
					<p className='p-3 bg-[#ff6d6d27]'>
						<i className='text-3xl bi bi-envelope text-secondary'></i>
					</p>
					<div className='flex flex-col text-xl'>
						<p className='font-bold '>Message</p>
						<p className='text-base-300'>intensethirst03@gmail.com</p>
					</div>
				</div>
				<div className='flex mt-5 gap-x-5'>
					<p className='p-3 bg-[#ff6d6d27]'>
						<i className='text-3xl bi bi-telephone text-secondary'></i>
					</p>
					<div className='flex flex-col text-xl'>
						<p className='font-bold'>Contact Us</p>
						<p className='text-base-300'>+88 01603 797197</p>
					</div>
				</div>
				<p className='mt-16 text-xl font-bold'>Follow us on social media</p>
				<p className='text-xl text-base-300'>
					Stay connected! Follow us on social media for updates and insights.
				</p>
				<div className='flex mt-5 gap-x-5'>
					<button className='btn btn-ghost'>
						<i className='text-2xl bi bi-linkedin'></i>
					</button>
					<button className='btn btn-ghost'>
						<i className='text-2xl bi bi-facebook'></i>
					</button>
					<button className='btn btn-ghost'>
						<i className='text-2xl bi bi-pinterest'></i>
					</button>
				</div>
			</div>
			<div className='lg:w-[70%] w-full bg-base-100 flex flex-col p-5  lg:p-10 rounded-xl shadow-card'>
				<div className='grid gap-10 lg:grid-cols-2'>
					<div className='flex flex-col gap-y-3'>
						<label
							htmlFor='name'
							className='text-xl font-semibold text-input-label-color'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							className='border-gray-400 input input-bordered'
							placeholder='Enter your name'
						/>
					</div>
					<div className='flex flex-col gap-y-3'>
						<label
							htmlFor='email'
							className='text-xl font-semibold text-input-label-color'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							className='border-gray-400 input input-bordered'
							placeholder='Enter your Email'
						/>
					</div>
					<div className='flex flex-col gap-y-3'>
						<label
							htmlFor='phone'
							className='text-xl font-semibold text-input-label-color'
						>
							Phone
						</label>
						<input
							type='tel'
							id='phone'
							className='border-gray-400 input input-bordered'
							placeholder='Phone Number'
						/>
					</div>
					<div className='flex flex-col gap-y-3'>
						<label
							htmlFor='service'
							className='text-xl font-semibold text-input-label-color'
						>
							Service
						</label>
						<input
							type='text'
							id='service'
							className='border-gray-400 input input-bordered'
							placeholder='Services Name'
						/>
					</div>
					<div className='flex flex-col lg:col-span-2 gap-y-3'>
						<label
							htmlFor='message'
							className='text-xl font-semibold text-input-label-color'
						>
							Message
						</label>
						<textarea
							id='message'
							className='h-40 border-gray-400 textarea textarea-bordered'
							placeholder='Write Anything Here'
						/>
					</div>
				</div>
				<button className='btn self-start mt-10 text-lg px-10 bg-gradient-to-b from-secondary to-[#E67638] text-white'>
					Send Message
				</button>
			</div>
		</div>
	);
};

export default ContactDetails;

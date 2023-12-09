import { useState } from 'react';
import icon from '../img/icon.png';
import bg from '../img/workflow-bg.png';
import HeaderText from './HeaderText';

const TimelineSection = ({ header, text }) => {
	const [timeline] = useState([
		{
			head: 'Planning',
			text: 'Streamlined workflow, and efficient planning our recipe for success.',
		},
		{
			head: 'Conception',
			text: 'Initiating ideas, shaping strategies, crafting success',
		},
		{
			head: 'Design',
			text: 'Refining experiences, and navigating the design process seamlessly.',
		},
		{
			head: 'Development',
			text: 'Executing development tasks, following a structured workflow process.',
		},
	]);
	return (
		<div
			className='lg:h-[160vh] h-fit mt-10  bg-center bg-no-repeat'
			style={{
				background: `url(${bg})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'contain',
			}}
		>
			<div className='container flex flex-col items-center justify-center pt-20 lg:pt-56'>
				{<HeaderText header={header} text={text} />}
				<ul className='px-5 mt-20 lg:mt-32 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical lg:px-0'>
					{timeline.map((t, i) => {
						return (
							<li key={i}>
								{i === 0 ? '' : <hr />}
								<div className='timeline-middle'>
									<p className='font-bold'>
										{i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}
									</p>
								</div>
								<div
									className={`p-5 px-7 lg:mx-10 mb-10 ${
										(i + 1) % 2 == 0 ? 'lg:timeline-end' : 'lg:timeline-start'
									} timeline-end lg:w-[50%] w-[90%] bg-base-100 rounded-xl shadow-card`}
								>
									<img src={icon} className='w-fit' alt='' />
									<p className='text-xl font-bold border-b-2 mt-7 border-secondary pb-7 w-fit'>
										{t.head}
									</p>
									<p className='font-semibold text-base-300 mt-7'>{t.text}</p>
								</div>
								{i + 1 === timeline.length ? '' : <hr />}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default TimelineSection;

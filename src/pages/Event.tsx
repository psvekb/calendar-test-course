import { createEvent } from '@testing-library/react';
import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import EventCalendar from '../component/EventCalendar';
import EventForm from '../component/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { fetchGuests, createEvent } = useActions();
	const { guests, events } = useTypedSelector(state => state.event);
	useEffect(() => {
		fetchGuests()
	}, []);

	const addNewEvent = (event: IEvent) => {
		setIsModalVisible(false)
		createEvent(event)
	}

	return (
		<Layout>
			{JSON.stringify(events)}
			<EventCalendar events={[]} />
			<Row justify='center'>
				<Button onClick={() => setIsModalVisible(true)}>Add Event</Button>
			</Row>
			<Modal title="add event"
				visible={isModalVisible}
				footer={null}
				onCancel={() => setIsModalVisible(false)}
			>
				<EventForm guests={guests} submit={addNewEvent} />
			</Modal>
		</Layout>
	);
};

export default Event;
import React from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { DragDrop } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';

const uppy = new Uppy({
	meta: { type: 'avatar' },
	restrictions: { maxNumberOfFiles: 1 },
	autoProceed: true
});

uppy.use(Tus, { endpoint: '/upload' });

uppy.on('complete', (result) => {
	console.log(result);
});

const AvatarPicker = ({ currentAvatar }) => {
	return (
		<div>
			<img src={currentAvatar} alt="Current Avatar" />
			<DragDrop
				uppy={uppy}
				locale={{
					strings: {
						// Text to show on the droppable area.
						// `%{browse}` is replaced with a link that opens the system file selection dialog.
						dropHereOr: 'Drop here or %{browse}',
						// Used as the label for the link that opens the system file selection dialog.
						browse: 'browse'
					}
				}}
			/>
		</div>
	);
};

export default AvatarPicker;

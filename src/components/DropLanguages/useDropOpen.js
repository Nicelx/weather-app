import react, { useState } from 'react';

export const useDropOpen = () => {
	const [open, setOpen] = useState(false);
	
	return [
		open, setOpen
	]
}
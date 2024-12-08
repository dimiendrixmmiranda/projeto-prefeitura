import { useState, useEffect } from 'react';

const useResponsiveHeight = () => {
	const [height, setHeight] = useState(() => calculateHeight().height);
	const [qtdeSlides, setQtdeSlides] = useState(() => calculateHeight().qtdeSlides);

	function calculateHeight() {
		if (typeof window === 'undefined') {
			return { height: 200, qtdeSlides: 1 }; // Valores padrão para o SSR
		}
		const screenWidth = window.innerWidth;
		if (screenWidth > 1280) {
			return { height: 400, qtdeSlides: 3 };
		}
		if (screenWidth > 1024) {
			return { height: 400, qtdeSlides: 2 };
		}
		if (screenWidth > 768) {
			return { height: 300, qtdeSlides: 2 };
		}
		return { height: 200, qtdeSlides: 1 };
	}

	useEffect(() => {
		const handleResize = () => {
			const { height, qtdeSlides } = calculateHeight();
			setHeight(height);
			setQtdeSlides(qtdeSlides);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		height,
		qtdeSlides,
	};
};

export default useResponsiveHeight;

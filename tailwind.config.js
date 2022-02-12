module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}",],
	theme: {extend: {
			fontFamily:{
				 'hind':['"hind', 'sans-serif'],
				'dosis': ['"Dosis"', 'sans-serif']
			},
			keyframes: {
				wiggle: {'0%, 100%': { transform: 'rotate(-360deg)' },
					'50%': { transform: 'rotate(360deg)' },
				}
			}
		},
	},
	plugins: [],};

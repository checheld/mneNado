import { createTheme } from '@mui/material';
export const defaultTheme = createTheme({
	typography: {
		fontFamily: '"Nunito", sans-serif',
	},

	// colors: #7309AA #612580 #4A036F	#A13DD5 #AF66D5

	palette: {
		primary: {
			main: '#5EA7D3',
		},
		secondary: {
			main: '#6997D3',
		},
	},
});

export const theme = createTheme(defaultTheme, {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					// width: '100%',
					height: '44px',
					borderRadius: '72px',
				},

				text: {},

				contained: {
					height: '50px',
					textAlign: 'center',
					backgroundColor: 'rgb(4, 132, 175, 1)',
					fontFamily: '"Nunito", sans-serif',
					fontWeight: '400',
					fontSize: '14px',
					borderRadius: '5px',
					letterSpacing: '1.5px',
					verticalAlign: 'baseline',
					color: 'rgb(255, 255, 255, 0.8)',
					'&:hover': {
						backgroundColor: '#4795CF',
					},
					'&:active': {
						backgroundColor: '#6AC2F1',
					},
				},

				outlined: {
					color: 'rgba(255, 255, 255, 0.7);',
					height: '50px',
					fontFamily: '"Nunito", sans-serif',
					fontWeight: '600',
					border: '3px solid #91a4b3',
					borderRadius: '5px',
					fontSize: '14px',
					letterSpacing: '1.5px',
					transition: 'all .3s ease-in-out',
					'&:hover': {
						border: '3px solid #CBD8DD',
						backgroundColor: '#CBD8DD',
						color: '#0484af',
					},
					'&:active': {
						border: '3px solid #a9ddf1',
						backgroundColor: '#a9ddf1',
					},
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					height: '48px',
					fontWeight: 200,
				},
				notchedOutline: {
					height: '54px',
					borderColor: 'rgb(4, 132, 175, 1)',
					borderRadius: '5px',
					fontWeight: 400,
					fontSize: '18px',
					'&.Mui-focused': {
						outline: '1px solid #5EA7D3',
					},
				},
				input: {
					padding: '0px 14px'
				}
			},
		},

		MuiFormControl: {
			styleOverrides: {
				root: {
					width: '100%',
				},
			},
		},
	},
});
// export const secondaryTheme = createTheme(defaultTheme, {
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           maxHeight: defaultTheme.spacing(10),
//           padding: defaultTheme.spacing(4, 5),
//           fontWeight: 500,
//           lineHeight: '17px',
//           textTransform: 'none',
//         },
//         contained: {
//           backgroundColor: defaultTheme.palette.info.light,
//           color: defaultTheme.palette.info.main,
//           '&:hover': {
//             backgroundColor: '#e4ecf7'
//           },
//           '&:active': {
//             ackgroundColor: '#dae7f7'
//           },
//           '&:disabled': {
//             opacity: 0.4
//           }
//         },
//       }
//     },
//   }
// })

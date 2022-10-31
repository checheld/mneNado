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
					backgroundColor: '#226895',
					color: '#fff',
					fontFamily: '"Nunito", sans-serif',
					fontWeight: '600',
					fontSize: '14px',
					borderRadius: '8px',
					letterSpacing: '1.5px',
					'&:hover': {
						backgroundColor: 'rgba(34,104,149,.83)',
						color: '#e1e2ed',
					},
					'&:active': {
						backgroundColor: '#226895',
					},
				},

				outlined: {
					color: 'rgba(255, 255, 255, 0.7)',
					fontFamily: '"Nunito", sans-serif',
					fontWeight: '600',
					border: '2px solid #91a4b3',
					borderRadius: '5px',
					fontSize: '14px',
					letterSpacing: '1.5px',
					transition: 'all .3s ease-in-out',
					'&:hover': {
						border: '2px solid #CBD8DD',
						backgroundColor: '#CBD8DD',
						color: '#0484af',
					},
					'&:active': {
						border: '2px solid #a9ddf1',
						backgroundColor: '#a9ddf1',
					},
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					paddingRight: 0,
					fontWeight: 200,
				},
				notchedOutline: {
					width: '100%',
					height: '58px',
					borderColor: '#748BA4 !important',
					borderRadius: '8px',
					fontWeight: 400,
					fontSize: '18px',
					'&.Mui-focused': {
						outline: '1px solid #5EA7D3',
					},
				},
			},
		},

		MuiFormControl: {
			styleOverrides: {
				root: {
					width: '100%',
				},
			},
		},

		MuiMobileStepper: {
			styleOverrides: {
				progress: {
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

import { ContentTypes } from './types/types';

let config = {
	headers: {
		// Authorization: `Bearer ${token.access_token}`,
		'Content-Type': ContentTypes.APPLICATION_JSON,
	},
};

export default config;

import { DateTime } from 'luxon';

export const getInitials = (name: string) => {
	const [firstName, lastName] = name.split(' ');
	return firstName && lastName
		? `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`
		: firstName.charAt(0).toUpperCase();
};

export const formatMoney = (amount: number): string => {
	return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = (dateTime: string, format: string): string => {
	return DateTime.fromISO(dateTime).toFormat(format);
};

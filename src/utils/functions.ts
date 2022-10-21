export const getInitials = (name: string) => {
	const [firstName, lastName] = name.split(' ');
	return firstName && lastName
		? `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`
		: firstName.charAt(0).toUpperCase();
};

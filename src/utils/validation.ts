import { DateTime } from 'luxon';
import validator from 'validator';

export const commonWords = [
	'password',
	'qwerty',
	'12345678',
	'passw0rd',
	'qwerty123',
	'pa$$word',
	'111111',
	'000000',
	'asdasd',
	'asdasd123',
	'12321',
	'a11111',
	'112233',
	'asdfghjkl',
	'admin',
	'0987654321',
];

export const validateField = (val: string): string => {
	if (validator.isEmpty(val.trim())) return 'Поле не может быть пустым';
	return '';
};

export const validateDate = (val: string | null): string => {
	if (!val) return 'Выберите дату';
	return '';
};

export const validateStartDate = (val: string | null): string => {
	if (
		typeof val === 'string' &&
		!validator.isAfter(val, DateTime.now().toISODate())
	)
		return 'Дата начала не может быть раньше текущей';
	return '';
};

export const validatePeriod = (
	val1: string | null,
	val2: string | null
): string => {
	const startDate = DateTime.fromISO(val1 as string);
	const endDate = DateTime.fromISO(val2 as string);
	if (startDate > endDate)
		return 'Дата завершения не может быть раньше даты начала';
	return '';
};

export const validatePhone = (val: string): string => {
	if (val.trim() === '') return 'Field can not be empty';
	if (!validator.isMobilePhone(val, 'ru-RU'))
		return 'Неверный формат номер телефона';
	return '';
};

export const validateEmail = (val: string): string => {
	if (val.trim() === '') return 'Поле не может быть пустым';
	if (!validator.isEmail(val)) {
		return 'Некорректное значение Email';
	}
	return '';
};

export const validateAddress = (val: string, checkboxVal: boolean): string => {
	if (!checkboxVal && val.trim() === '')
		return 'Введите адрес или укажите, что задание выполняется онлайн';
	return '';
};

export const validateBudget = (val: string): string => {
	if (!validator.isInt(val)) return 'Введите число';
	if (+val < 300) return 'Минимальная сумма 300Р';
	return '';
};

export const validatePassword = (val: string): string => {
	const PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
	if (val.trim() === '') return 'Поле не может быть пустым';
	if (!PassRegex.test(val.trim())) {
		return 'Минимум 6 символов, заглавные и строчные буквы, цифры';
	}
	if (commonWords.some((word) => val.toLowerCase().includes(word))) {
		return 'Слишком простой пароль';
	}
	return '';
};

export const compareValues = (val1: string, val2: string): string => {
	if (val1 !== val2) return 'Пароли не совпадают';
	return '';
};

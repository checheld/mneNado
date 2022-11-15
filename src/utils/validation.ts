import { DateTime } from 'luxon';
import validator from 'validator';

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

import React, { ChangeEvent, useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import CheckboxGroup from '../CheckboxGroup/index';

const components = [
    { name: 'Курьерские услуги', subcomp: ['Купить и доставить', 'Срочная доставка', 'Доставка продуктов', 'Доставка еды из ресторанов', 'Другая посылка',] },
    { name: 'Ремонт и строительство', subcomp: ['Мастер на час', 'Ремонт под ключ', 'Сантехнические работы', 'Электромонтажные работы', 'Отделочные работы', 'Сборка и ремонт мебели', 'Отопление, водоснабжение, канализация', 'Строительно-монтажные работы', 'Что-то другое'] },
    { name: 'Грузоперевозки', subcomp: ['Перевозка вещей, переезды', 'Пассажирские перевозки', 'Вывоз мусора', 'Эвакуаторы', 'Междугородные перевозки', 'Другой груз'] },
    { name: 'Уборка и помощь по хозяйству', subcomp: ['Генеральная уборка', 'Поддерживающая уборка', 'Приготовление еды', 'Уход за животными', 'Работы в саду, огороде, на участке', 'Сиделки', 'Няни', 'Что-то другое'] },
    { name: 'Компьютерная помощь', subcomp: ['Ремонт компьютеров и ноутбуков', 'Установка и настройка операц. систем, программ', 'Ремонт и замена комплектующих', 'Что-то другое'] },
    { name: 'Фото и видео', subcomp: ['Фотосъемка', 'Видеосъемка', 'Обработка фотографий', 'Создание видео под ключ', 'Оцифровка', 'Что-то другое'] },
    { name: 'Установка и ремонт техники', subcomp: ['Холодильники', 'Стиральные машины', 'Электрические плиты и панели', 'Газовые плиты', 'Вытяжки', 'Климатическая техника', 'Водонагреватели, бойлеры, котлы, колонки', 'Пылесосы', 'СВЧ печи', 'Мелкая кухонная техника', 'Что-то другое'] },
    { name: 'Красота и здоровье', subcomp: ['Услуги косметолога', 'Эпиляция', 'Брови и ресницы', 'Услуги визажиста', 'Парикмахерские услуги', 'Ногтевой сервис', 'Массаж', 'Что-то другое'] },
    { name: 'Ремонт цифровой техники', subcomp: ['Планшеты и телефоны', 'Аудиотехника и системы', 'Телевизоры и мониторы', 'Автомобильная электроника', 'Видео/фототехника', 'Спутниковые и эфирные антенны', 'Что-то другое'] },
    { name: 'Юридическая и бухгалтерская помощь', subcomp: ['Бухгалтерские услуги', 'Нотариальные услуги', 'Услуги адвоката', 'Регистрация, ликвидация компаний', 'Юридическая консультация', 'Делопроизводство и работа с кадрами', 'Что-то другое'] },
    { name: 'Репетиторы и обучение', subcomp: ['Иностранные языки', 'Математика и физика', 'Биология и химия', 'История и обществознание', 'География и экономика', 'Подготовка к школе и младшие классы', 'Логопеды', 'Автоинструкторы', 'Музыка, танцы, арт', 'Что-то другое'] },
    { name: 'Ремонт транспорта', subcomp: ['Техническое обслуживание автомобиля', 'Диагностика и ремонт двигателя, КПП и ходовой части', 'Обслуживание системы кондиционирования', 'Кузовной ремонт', 'Автоэлектрика', 'Шиномонтаж', 'Мойка и химчистка', 'Тюнинг (внешний и внутренний)', 'Помощь на дороге', 'Мотосервис', 'Что-то другое'] },
]

export default function SorthingCheckboxes() {

    const [allChecked, setAllChecked] = useState(true);
    const [indeterminate, setIndeterminate]  = useState(false);
    const [compChecked, setCompChecked] = useState<Boolean[]>([]);
    let obj : Boolean[] = [];

    useEffect(() => {
        components.map(() => (obj.push(true)))   
        setCompChecked(obj)
    }, []);

    const handleChangeAll = (event: ChangeEvent<HTMLInputElement>) => {
        setIndeterminate(false);
        setAllChecked(!allChecked);
        let items = [...compChecked];
        if (event.target.checked === false) {
            items.map((el, i) => items[i] = false);
            setCompChecked(items);
        } else {
            items.map((el, i) => items[i] = true);
            setCompChecked(items);
        }
    };

    const handleChangeComp = (key: number) => (event: boolean) => {
        event === false && setIndeterminate(true);
        const editedArr = [...compChecked];
        editedArr[key as number] = event;
        setCompChecked(editedArr);
        !editedArr.includes(false) && setIndeterminate(false);
    };

  return (
      <List
          className='checkboxesContainer'
          component="nav"
          aria-labelledby="nested-list-subheader"
      >
          <ListItemButton>
              <FormControlLabel
                  control={
                      <Checkbox name='isOnline'
                          defaultChecked={true}
                          indeterminate={indeterminate}
                          onChange={handleChangeAll}
                      />
                  }
                  label={
                      <Typography variant='body1' sx={{ mb: 0 }}>
                          Все категории
                      </Typography>
                  }
              />
          </ListItemButton>
          {components.map((component, key) => (
              <CheckboxGroup component={component}
                  key={key}
                  compChecked={compChecked[key]}
                  handleChangeComp={handleChangeComp(key)}
                  allChecked={allChecked}
                  allIndeterminate={indeterminate}
              />))}
      </List>
  );
}
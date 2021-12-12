import {
  mdiCow,
  mdiWeightKilogram,
  mdiCalendarRange,
  mdiMapMarkerOutline,
  mdiWeb,
  mdiHomeVariant,
} from '@mdi/js'

// profile items
export const profile = () => {
  const panelItems = [
    {
      title: 'Информация',
      items: [
        {
          type: 'Рога',
          value: 'Нет',
        },
        {
          type: 'Темперамент',
          value: '—',
        },
        {
          type: ' Собственник',
          value: '— ',
        },
        {
          type: 'Заводчик-селекционер',
          value: 'ТОО “Мясной двор”',
        },
      ],
    },
    {
      title: 'Статус',
      items: [
        {
          type: 'Статус',
          value: 'Выбыл',
        },
        {
          type: 'Причина выбраковки',
          value:
            'Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий обеспечивает широкому кругу',
        },
        {
          type: ' Племенное разведение',
          value: '— ',
        },
        {
          type: 'Загон',
          value: 'Бычки_1234',
        },
        {
          type: 'Текущее местоположение',
          value: 'На джайлау',
        },
        {
          type: 'Дата перемещения',
          value: '18.11.2021',
        },
      ],
    },
    {
      title: 'Идентификация',
      items: [
        {
          type: 'ID',
          value: 'AST_012123',
        },
        {
          type: 'Номер гос. бирки',
          value: 'KZP157796883',
        },
        {
          type: 'Номер инвентарный 1',
          value: 'K123',
        },
        {
          type: 'Цвет бирки номера инвентарного 1',
          value: 'розовый',
        },
        {
          type: 'Номер инвентарный 2',
          value: '6883',
        },
        {
          type: 'Номер RFID бирки',
          value: '990000002552435',
        },
        {
          type: 'Номер тавро',
          value: 'K123',
        },
        {
          type: 'Номер зарубежный',
          value: 'KLS8529',
        },
        {
          type: 'Номер тату',
          value: 'KLS8529',
        },
        {
          type: 'Номер стада',
          value: '2C',
        },
        {
          type: 'Ветеринарный паспорт',
          value: '№123 от 12.12.2019',
        },
      ],
    },
    {
      title: 'Описание',
      isDescription: true,
      content: {
        text: 'Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также сложившаяся структура организации способствует подготовки и реализации направлений прогрессивного развити<br/><br/> Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также сложившаяся структура организации способствует подготовки и реализации направлений прогрессивного развития',
        images: [
          require('@/assets/main/animals/profile/cowProfileImg.png'),
          require('@/assets/main/animals/profile/cowProfileImg.png'),
          require('@/assets/main/animals/profile/cowProfileImg.png'),
          require('@/assets/main/animals/profile/cowProfileImg.png'),
          require('@/assets/main/animals/profile/cowProfileImg.png'),
          require('@/assets/main/animals/profile/cowProfileImg.png'),
          require('@/assets/main/animals/profile/cowProfileImg.png'),
          require('@/assets/main/animals/profile/cowProfileImg.png'),
          require('@/assets/main/animals/profile/cowProfileImg.png'),
          require('@/assets/main/animals/profile/cowProfileImg.png'),
        ],
      },
    },
  ]
  const cowInfo = [
    {
      type: 'Вид',
      value: 'Крупный рогатый скот',
    },
    {
      type: 'Пол, классификация',
      value: 'Самец, бычок',
    },
    {
      type: 'Порода',
      value: 'Галловейский, племенной',
    },
    {
      type: 'Масть, цвет',
      value: 'Белый',
    },
  ]
  return {
    panelItems,
    cowInfo,
  }
}

// descent page items
export const descent = () => {
  const cards = [
    {
      img: mdiCow,
      title: 'Дата рождения',
      info: '07.09.2021',
    },
    {
      img: mdiWeightKilogram,
      title: 'Вес при рождении',
      info: '28 кг',
    },
    {
      img: mdiCalendarRange,
      title: 'Дата прибытия',
      info: '18.09.2021',
    },
    {
      img: mdiWeb,
      title: 'Страна рождения',
      info: 'Казахстан',
    },
    {
      img: mdiMapMarkerOutline,
      title: 'Место рождения',
      info: 'Ферма',
    },
    {
      img: mdiHomeVariant,
      title: 'Ферма/хозяйство',
      info: 'ТОО “Ферма”',
    },
  ]
  return {
    cards,
  }
}

// development page items
export const development = () => {
  const table = () => {
    type developmentTableType = {
      indicator: string
      weight: number
      height: number
      user: string
      data: string
    }
    const items: developmentTableType[] = []
    const headers = [
      {
        text: 'Показатель',
        align: 'start',
        sortable: false,
        value: 'indicator',
      },
      { text: 'Вес, кг', value: 'weight' },
      { text: 'Рост, см', value: 'height' },
      { text: 'Пользователь', value: 'user' },
      { text: 'Дата', value: 'data' },
    ]
    for (let x = 0; x < 10; x++) {
      items.push({
        indicator: 'При рождении',
        weight: 23,
        height: 150,
        user: 'Фамилия Имя Отчество',
        data: '07.11.2020',
      })
    }
    return {
      headers,
      items,
      disableFooter: true,
    }
  }
  return {
    table,
  }
}

// posterity page items
export const posterity = () => {
  return {}
}

// reproduction page items
export const reproduction = () => {
  const table = () => {
    type developmentTableType = {
      dateFirst: string
      dateSecond: string
      mark: string
    }
    const items: developmentTableType[] = []
    const headers = [
      {
        text: 'Дата случки',
        align: 'start',
        value: 'dateFirst',
      },
      { text: 'Дата отела', value: 'dateSecond' },
      { text: 'Оценка легкости отела', value: 'mark' },
    ]
    for (let x = 0; x < 10; x++) {
      items.push({
        dateFirst: '07.11.2020',
        dateSecond: '07.11.2020',
        mark: 'Незначительные трудности, некоторая помощь',
      })
    }
    return {
      headers,
      items,
      disableFooter: true,
    }
  }
  return {
    table,
  }
}

import React from 'react';
import './about.scss';

export default class About extends React.PureComponent {
  constructor() {
    super();

    this.members = [
      // Александр Калугин
      {
        id: 'Kalugin',
        href: 'https://vk.com/id16835086',
        img: '/img/about/aleksandr_kalugin.jpg',
        name: 'Alexander',
        surname: 'Kalugin'
      },
      // Антон Ковалевский
      {
        id: 'Kovalevsky',
        href: 'https://vk.com/id29768826',
        img: '/img/about/anton_kovalevsky.jpg',
        name: 'Anton',
        surname: 'Kovalevsky'
      },
      // Виктория Зырянова
      {
        id: 'Zyryanova',
        href: 'https://vk.com/id14828973',
        img: '/img/about/victory_zyryanova.jpg',
        name: 'Victoria',
        surname: 'Zyryanova'
      },
      // Кирилл Непомнящий
      {
        id: 'Nepomnyashchy',
        href: 'https://vk.com/vospalenniy_mozg_djeka',
        img: '/img/about/kirill_nepomnyachsiy.jpg',
        name: 'Kirill',
        surname: 'Nepomnyashchy'
      },
      // Наталья Бурнашкина
      {
        id: 'Burnashkina',
        href: 'https://vk.com/id744565',
        img: '/img/about/natalya_burnashkina.jpg',
        name: 'Natalia',
        surname: 'Burnashkina'
      },
      // Слава Сорокин
      {
        id: 'Sorokin',
        href: 'https://vk.com/tafarayphoto',
        img: '/img/about/slava_sorokin.jpg',
        name: 'Salva',
        surname: 'Sorokin'
      },
      // Тональ Нагвальевна
      {
        id: 'Nagualevna',
        href: 'https://vk.com/id4462838',
        img: '/img/about/tonal_nagvalievna.jpg',
        name: 'Tonal',
        surname: 'Nagualevna'
      },
      // Дмитрий Кольдяев
      {
        id: 'Koldyaev',
        href: 'https://vk.com/id8767',
        img: '/img/about/dmitriy_koldyaev.jpg',
        name: 'Dmitriy',
        surname: 'Koldyaev'
      },
      // Виктория Чешко
      {
        id: 'Cheshko',
        href: 'https://vk.com/id131625031',
        img: '/img/about/viktoria_cheshko.jpg',
        name: 'Victoria',
        surname: 'Cheshko'
      },
      // София Головина
      {
        id: 'Golovina',
        href: 'https://vk.com/id71689521',
        img: '/img/about/sofia_golovina.jpg',
        name: 'Sofia',
        surname: 'Golovina'
      },
      // Георгий Тверецкий
      {
        id: 'Tvereckiy',
        href: 'https://vk.com/id3584626',
        img: '/img/about/georgiy_tveretskiy.jpg',
        name: 'George',
        surname: 'Tvereckiy'
      },
      // Анна Салтыкова
      {
        id: 'Saltykova',
        href: 'https://vk.com/id188141450',
        img: '/img/about/anna_saltykova.jpg',
        name: 'Anna',
        surname: 'Saltykova'
      },
      // Анна Раевская
      {
        id: 'Raevskaya',
        href: 'https://vk.com/id9425559',
        img: '/img/about/anna_raevskaya.jpg',
        name: 'Anna',
        surname: 'Raevskaya'
      },
      // Ksenia Mirklis
      {
        id: 'Mirklis',
        href: 'https://vk.com/mirklis',
        img: '/img/about/ksenia_mirklis.jpg',
        name: 'Ksenia',
        surname: 'Mirklis'
      },
      // Анна Корнеенкова
      {
        id: 'Korneenkova',
        href: 'http://vk.com/anna_noir',
        img: '/img/about/anna_korneenkova.jpg',
        name: 'Annd',
        surname: 'Korneenkova'
      },
      // Юлия Елизарова
      {
        id: 'Elizarova',
        href: 'http://vk.com/elizarova_fot',
        img: '/img/about/juliya_elizarova.jpg',
        name: 'Yuliya',
        surname: 'Elizarova'
      },
      // Анастасия Дунаева
      {
        id: 'Dunaeva',
        href: 'https://vk.com/id56092039',
        img: '/img/about/anastasia_dunaeva.jpg',
        name: 'Anastasia',
        surname: 'Dunaeva'
      },
      // Надежда Духанова
      {
        id: 'Duhanova',
        href: 'https://vk.com/id8546188',
        img: '/img/about/nadezhda_duhanova.jpg',
        name: 'Nadezhda',
        surname: 'Duhanova'
      },
      // Annie Autumn
      {
        id: 'Autumn',
        href: 'https://vk.com/autumn_space',
        img: '/img/about/annie_autumn.jpg',
        name: 'Annie',
        surname: 'Autumn'
      },
      // Катерина Салдаева
      {
        id: 'Saldaeva',
        href: 'https://vk.com/awayfromlights',
        img: '/img/about/katerina_saldaeva.jpg',
        name: 'Katerina',
        surname: 'Saldaeva'
      },
      // Виктория Майонез
      {
        id: 'Maionez',
        href: 'https://vk.com/id10012750',
        img: '/img/about/viktoria_maiones.jpg',
        name: 'Victoria',
        surname: 'Maionez'
      },
      // Vladimir Deyev
      {
        id: 'Deyev',
        href: 'https://vk.com/volodyalovesyou',
        img: '/img/about/vladimir_deyev.jpg',
        name: 'Vladimir',
        surname: 'Deyev'
      }
    ];
  }

  render() {
    const { members } = this;

    return (
      <div className="about">
        <div className="about__title">
          Project Owners
        </div>
        <div className="about__members-wrapper">
          {/* Олег Шилов */}
          <div className="about__member">
            <a href="https://vk.com/id15927588" target="_blank" rel="noopener noreferrer">
              <img className="about__member__img" src="/img/about/shilov.jpg" alt="" />
            </a>
            <div className="about__member__name">
              <a href="https://vk.com/id15927588" target="_blank" rel="noopener noreferrer">
                Oleg
                <br />
                Shilov
              </a>
            </div>
          </div>
          {/* Гордей Переходов */}
          <div className="about__member">
            <a href="https://vk.com/likilo" target="_blank" rel="noopener noreferrer">
              <img className="about__member__img" src="/img/about/perekhodov.jpg" alt="" />
            </a>
            <div className="about__member__name">
              <a href="https://vk.com/likilo" target="_blank" rel="noopener noreferrer">
                Gordey
                <br />
                Perekhodov
              </a>
            </div>
          </div>
        </div>
        <div className="about__title">
          Project Members
        </div>
        <div className="about__members-wrapper">
          {members.map(memberCur => (
            <div key={memberCur.id} className="about__member">
              <a href={memberCur.href} target="_blank" rel="noopener noreferrer">
                <img className="about__member__img" src={memberCur.img} alt="" />
              </a>
              <div className="about__member__name">
                <a href={memberCur.href} target="_blank" rel="noopener noreferrer">
                  <span>
                    {memberCur.name}
                  </span>
                  <br />
                  <span>
                    {memberCur.surname}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// yandex map

ymaps.ready(init);

var placemarks = [
  {
    latitude: 59.97,
    longitude: 30.31,
    hintContent: '<div class="map__item map__hint">улица Литераторов, 17</div>',
    balloonContent: [
      '<div class="map__item map__balloon">',
      '<img class="map__balloon"/>',
      '<div class="map__text">Самые вкусные бургеры у нас!</div>',
      '<div class="map__text">Заходите по адресу: <b> ул.Литераторов, 17</b></div>',
      '</div>'
    ]
  }, {
    latitude: 59.94,
    longitude: 30.25,
    hintContent: '<div class="map__item map__hint">Малый проспект В О, 64</div>',
    balloonContent: [
      '<div class="map__item map__balloon">',
      '<img class="map__balloon"/>',
      '<div class="map__text">Самые вкусные бургеры у нас!</div>',
      '<div class="map__text">Заходите по адресу: <b>Малый проспект В О, 64</b></div>',
      '</div>'
    ]
  }, {
    latitude: 59.93,
    longitude: 30.34,
    hintContent: '<div class="map__item map__hint">Наб. реки Фонтанки, 56</div>',
    balloonContent: [
      '<div class="map__item map__balloon">',
      '<img class="map__balloon"/>',
      '<div class="map__text">Самые вкусные бургеры у нас!</div>',
      '<div class="map__text">Заходите по адресу: <b>Наб. реки Фонтанки, 56</b></div>',
      '</div>'
    ]
  }, {
    latitude: 59.93,
    longitude: 30.40,
    hintContent: '<div class="map__item map__hint">Малоохтинский проспект, 61</div>',
    balloonContent: [
      '<div class="map__item map__balloon">',
      '<img class="map__balloon"/>',
      '<div class="map__text">Самые вкусные бургеры у нас!</div>',
      '<div class="map__text">Заходите по адресу: <b>Малоохтинский проспект, 61</b></div>',
      '</div>'
    ]
  }
];

function init() {
  let map = new ymaps.Map('map', {
    center: [59.94, 30.32],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: [],
  });

  placemarks.forEach(function (obj) {
    let placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      hintContent: obj.hintContent,
      balloonContent: obj.balloonContent.join('')
    },
      {
        iconLayout: 'default#image',
        iconImageHref: '/images/icons/map-marker.svg',
        iconImageSize: [46, 58],
        iconImageOffset: [-23, -57]
      });

    map.geoObjects.add(placemark);
  });
};
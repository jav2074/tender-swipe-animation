var app = angular.module('myApp', []);
// configure our routes
app.config(function ($httpProvider)
{
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  $httpProvider.defaults.headers.get = {};
  $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
// controller
app.controller('myCtrl', function($scope, $http)
{
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // let urlFake_01 = "https://testamp2023.000webhostapp.com/php/amp.php";
    // let urlFake_01 = "/php/amp.php";
    // httpGet($http, urlFake_01, callBackFake_01);
    // function callBackFake_01(result)
    // {
    //     $scope.urlFake_01 = result;
    // }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  $scope.pics = [
    { class:"active", image: 'https://img.freepik.com/foto-gratis/hermosa-mujer-elegante-sonriendo-mirando-interesado_176420-19460.jpg', alt:"foto", width:"600", height:"424"},
    { class:"", image: 'https://img.freepik.com/fotos-premium/hermosa-mujer-joven-encantadora-pelo-largo-rizado-morena-camisa-blanca-que-encuentran-aisladas-sobre-pared-blanca_171337-98697.jpg', alt:"foto", width:"600", height:"424"},
    { class:"", image: 'https://img.freepik.com/fotos-premium/hermosa-mujer-cabello-largo-oscuro-telefono-inteligente-llamada-movil_171337-31572.jpg', alt:"foto", width:"600", height:"424"},
    { class:"", image: 'https://img.freepik.com/foto-gratis/retrato-belleza-misterio-sonriente-mujer-jengibre-cabello-largo-posando-lado-mirando_171337-920.jpg', alt:"foto", width:"600", height:"424"},
    { class:"", image: "http://www.bcu.ac.uk/mediaitem/visual-communication-illustration-02-130585258441045504.jpg?quality=90", alt:"foto", width:"600", height:"424"},
    { class:"", image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e86e8b59124321.5a15e4ccd8622.jpg", alt:"foto", width:"600", height:"424"},
    { class:"", image: "https://cdn.dribbble.com/users/324248/screenshots/3978513/planet2_800.jpg", alt:"foto", width:"600", height:"424"}
  ];
  $scope.data = {
    name: 'Romy',
    age: 23,
    about: '',
    gener: '',
    altura: 165,
    smoke: false,
    drink:'',
    sign: '',
    education:'',
    interest:'',
    religion:'',
    chailds:'',
    location: '',
    search:''
  };


  $scope.likeOrNot = function(like_) {
    console.log('Me gusta: ' + like_);
  };
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});

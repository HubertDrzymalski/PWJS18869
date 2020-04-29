var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('GalleryListCtrl', function ($scope) {
    $scope.galleries =
        [
            {
                'title': 'Vectra C HB Polift',
                'when': '2006-01-01',
                'thumbnailUrl': 'img/sectionIMG/chbppl.png'
            },
            {
                'title': 'Vectra C HB Przedlift',
                'when': '2002-03-01',
                'thumbnailUrl': 'img/sectionIMG/chbpl.png'
            },
            {
                'title': 'Vectra C Sedan Polift',
                'when': '2006-01-01',
                'thumbnailUrl': 'img/sectionIMG/cseppl.png'
            },
            {
                'title': 'Vectra C Sedan Przedlift',
                'when': '2002-03-01',
                'thumbnailUrl': 'img/sectionIMG/csepl.png'
            },
            {
                'title': 'Vectra C Kombi Polift',
                'when': '2006-01-01',
                'thumbnailUrl': 'img/sectionIMG/ckoppl.png'
            },
            {
                'title': 'Vectra C Kombi Przedlift',
                'when': '2002-03-01',
                'thumbnailUrl': 'img/sectionIMG/ckopl.png'
            }
        ];
    $scope.galleries.length;
	$scope.sortList = [
        {
            'label': 'Alfabetycznie',
            'value': 'title'
        },
        {
            'label': 'Chronologicznie',
            'value': 'when'
        },
        {
            'label': 'Od Najnowszych',
            'value': '-when'
        }
    ]

    $scope.orderProp = 'when';
    $scope.orderProp = $scope.sortList[0];
});
const app = angular.module('WweApp', []);

app.controller('MyController', ['$http', function($http) {
    this.title = null;
    this.link = null;

    const controller = this;

    this.createWwe = function() {
        $http({
            method: 'POST',
            url:'/wwe',
            data: {
                title: this.title,
                link: this.link
            }
        }).then(
            function(response) {
                controller.getWwe();
            },
            function(error) {
                console.log(error);
            }
        )
    };

    this.deleteWwe = function(wwe) {
        $http({
            method: 'DELETE',
            url: '/wwe/' + wwe._id
        }).then(
            function() {
                controller.getWwes();
            },
            function(error) {

            }
        )
    };

    this.editWwe = function() {
        $http({
            method:'PUT',
            url: '/wwe/' + wwe._id,
            data: {
                title: this.updatedTitle || wwe.title,
                link: this.updatedLink || wwe.link
            }
        }).then(
            function(response) {
                controller.updatedTitle = null;
                controller.updatedWebsite = null;
                controller.getWwes();
            },
            function(error) {
                console.log(error);
            }
        )
    };

    this.getWwes = function() {
        $http({
            method: 'GET',
            url: '/wwe/'
        }).then(
            function(response) {
                controller.wwes = response.data;
            },
            function() {
                console.log('error');
            }
        )
    };

    this.wwes = [];

    this.getWwes();
}]);
=======

// console.log(this);

    const controller = this;


    this.createWwe = function(){
          $http({
                method:'POST',
                url: '/wwe',
                data: {
                    title: this.title,
                    link: this.link
                }
            }).then(function(response){
                // console.log(response);
                controller.getWwe();
            }, function(){
                console.log(error);
            }
          );
          // console.log(this);
        };


        this.getWwe = function(){
          $http({
            method: 'GET',
            url: '/wwe'
          }).then(
            function(response){
              // console.log(response);
              // console.log(this);
              // console.log(controller);
              controller.wwe = response.data;

            },
            function (error) {

            }
          )
        };

        this.deleteWwe = function(wwe){
            $http({
                method:'DELETE',
                url: '/wwe/' + wwe._id
            }).then(
                function(response){
                    controller.getWwe();
                },
                function(error){

                }
            );
        };

        this.editWwe = function(wwe){
    $http({
        method:'PUT',
        url: '/wwe/' + wwe._id,
        data: {
          title: this.title,
          link: this.link
        }
    }).then(
        function(response){
          this.indexOfEditFormToShow = null;
          controller.indexOfEditFormToShow = null;
            controller.getWwe();
        },
        function(error){

        }
    );
};
////=====================this is for link activation======================
// this.gif = function(wwe){
//   $http({
//     method: 'GET',
//     url: this.link + wwe._id,
//
//   }).then(
//     function(response){
//       console.log(response);
//     },
//     function (error) {
//
//     }
//   )
// }
////=====================================================================




  this.getWwe();

}]);

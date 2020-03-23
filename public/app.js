const app = angular.module('WweApp', []);

app.controller('MyController', ['$http', function($http) {
    this.title = null;
    this.link = null;

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

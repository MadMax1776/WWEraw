const app = angular.module('WweApp', []);

app.controller('MyController', ['$http', function($http) {
    this.title = null;
    this.wweLink = null;
    this.indexOfEdit = null;
    const controller = this;

    this.createWwe = function() {
        $http({
            method: 'POST',
            url:'/wwe',
            data: {
                title: this.title,
                wweLink: this.wweLink
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

        this.getWwe = function(){
          $http({
            method: 'GET',
            url: '/wwe'
          }).then(
            function(response){
               console.log(response.data);
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
                    title: this.updatedTitle || wwe.title,
                    wweLink: this.updatedLink || wwe.wweLink
                }
        }).then(
            function(response){
                controller.updatedTitle = null;
                controller.updatedWweLink = null;
                controller.indexOfEdit = null;
                controller.getWwe();
            },
        function(error){
            console.log(error);
        }
    );
};

  this.wwes = [];

  this.getWwe();

}]);

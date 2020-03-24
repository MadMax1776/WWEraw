const app = angular.module('WweApp', []);

app.controller('MyController', ['$http', function($http) {
    this.title = null;
    this.link = null;

// console.log(this);

    const controller = this;

        this.  = [
        {title: "Vince Mcmahon Humiliation", wweLink: "https://media.giphy.com/media/Ogxe3jSdivKbm/giphy.gif",  __v: 0},
        {title: "Trump shaves Mcmahon's Head", wweLink: "https://thegameswelove.tumblr.com/post/114959356134/champion-vs-champion-bobby-lashley-ecw-world",  __v: 0},
        {title: "Trump vs Mcmahon", wweLink: "https://www.reddit.com/r/gifs/comments/5d4h7k/the_45th_president_of_the_united_states/", __v: 0},
        {title: "Mcmahon chicken", wweLink: "https://66.media.tumblr.com/d60d4c3ccf49498b64dde4741e27ee2b/tumblr_oxgy28s6Qv1r7dh6wo1_400.gifv",  __v: 0},
        // {title: "5e74e3fb0126882b3937fdac", wweLink: "yayyy",  __v: 0},
        {title: "Coder Joke", wweLink: "https://i.imgur.com/n07uRWR.gif",  __v: 0},
        {title: "Wrestler Baby", wweLink: "https://media.giphy.com/media/ONG94CcPgBOuKKRwVn/giphy.gif",  __v: 0},
        {title: "Flying Away", wweLink: "https://media.giphy.com/media/U8lJ7TVVvJGIoI8ZWK/giphy.gif",  __v: 0}
    ]

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

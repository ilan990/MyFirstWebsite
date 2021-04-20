
var app = angular
.module("mainApp", [])
.controller("ctrl", function($scope) {
    $scope.skills=[
        {name:'Web',url:'webSkills.html'},
        {name:'Orienté objet',url:'objectSkills.html'},
        {name:'Logiciel',url:'software.html'}
    ];
    $scope.skill= $scope.skills[0];
        });
const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})
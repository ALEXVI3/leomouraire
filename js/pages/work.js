let controller = new ScrollMagic.Controller();


$(".elt-work").each(function(){

  let onDisplay = new TimelineMax();

  onDisplay.add([
    TweenMax.to($(this), .5, {width: "60%", height: "45vh"})
  ]).add([
    TweenMax.to($(this), .5, {x:"-20%"}),
    TweenMax.to($(this).find("h1"), 1, {autoAlpha: 1, x: "50%"}),
  ]).add([
    TweenMax.to($(this), 1, {autoAlpha:0, x:"1%", width:"43%", height: "30vh"}),
    TweenMax.to($(this).find("h1"), 1, {autoAlpha: 0, x: "1%"}),
  ])

  // let offDisplay = new TimelineMax();
  //
  // offDisplay.add([
  //
  // ])

  new ScrollMagic.Scene({
          triggerElement: this,
          duration: "100%",
          triggerHook: ".8"
      })
      .setTween(onDisplay)
      .addTo(controller);

  // new ScrollMagic.Scene({
  //         triggerElement: this,
  //         duration: "50%",
  //         triggerHook: "0"
  //     })
  //     .setTween(offDisplay)
  //     .addTo(controller);
});

let bgWhite = new TimelineMax();

bgWhite.add([
  TweenMax.to("body", .3, {backgroundColor: "#fff", color: "black", ease: Power3.easeIn}),
  TweenMax.to(".layer", .3, {color: "black", ease: Power3.easeIn}),
])


new ScrollMagic.Scene({
        triggerElement: ".bloc-contact",
        triggerHook: ".5",
        // duration: "30%",
    })
    .setTween(bgWhite)
    .addTo(controller);

let work = new TimelineMax();

work.add([
  TweenMax.staggerTo(".container-elt-titre", 1, {rotation:-810, left: "48%", scale: .5, ease:Power3.easeInOut}, .05),
  TweenMax.staggerTo(".titre-clone", .5, {autoAlpha:1, ease:Power3.easeInOut}, .05),
  TweenMax.staggerTo(".titre-clone", .5, {autoAlpha:0, ease:Power3.easeInOut, delay: .5}, .05),
])


new ScrollMagic.Scene({
        triggerElement: ".bloc-titre",
        triggerHook: "0",
        offset: "50%",
        duration: "50%",
    })
    .setTween(work)
    .addTo(controller);










// ANIM CONTACT
$(".bloc-contact").mousemove(function(e){
  let width = window.innerWidth;
  let height = window.innerHeight;

  let scrollHeight = document.getElementById("page-work").scrollHeight;

  console.log(scrollHeight);

  let mouseX = e.pageX - width/2;
  let mouseY = e.pageY + height/2 - scrollHeight;

  // console.log('mouseX = ' + mouseX);

  let movingWord = new TimelineMax();

  movingWord.add([
    TweenMax.to(".black", 1, {x: 0.03*mouseX, y: 0.03*mouseY, ease: Power2.easeOut}),
    TweenMax.to(".white", 1, {x: 0.02*mouseX, y: 0.02*mouseY, ease: Power2.easeOut}),
  ]);

});

$(".bloc-contact").mouseout(function(){
  let movingWord = new TimelineMax();

  movingWord.add([
    TweenMax.to(".black", 1, {x: 0, y: 0, ease: Power4.easeOut}),
    TweenMax.to(".white", 1, {x: 0, y: 0, ease: Power4.easeOut}),
  ]);
});


$(".white").hover(function(){

});

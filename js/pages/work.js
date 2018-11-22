// let controller = new ScrollMagic.Controller();


$(".elt-work").each(function(){

  let onDisplay = new TimelineMax();

  onDisplay.add([
    TweenMax.to($(this), .5, {width: "60%", height: "45vh"})
  ]).add([
    TweenMax.to($(this), 1, {x:"-20%"}),
    TweenMax.to($(this).find("h1"), 1, {autoAlpha: 1, x: "50%"}),
  ]).add([
    TweenMax.to($(this), 1, {autoAlpha:1, x:"1%", width:"43%", height: "30vh"}),
    TweenMax.to($(this).find("h1"), 1, {autoAlpha: 0, x: "1%"}),
  ])

  new ScrollMagic.Scene({
          triggerElement: this,
          duration: "50%",
          triggerHook: ".5"
      })
      .setTween(onDisplay)
      .addTo(controller);

});

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










//MOVING ON WORK SECTIONS

$(".elt-work").mousemove(function(e){

  let movingTitleWork = $(".moving-title-work");
  // console.log(movingTitleWork);
  // console.log(PositionX + " , " + positionY);
  let title = $(this).find("h1")[0].innerHTML;
  $(this).find("span")[0].innerHTML = title;

  for (i = 0; i <= movingTitleWork.length ; i++ ) {
    // let PositionX = movingTitleWork[i].offset().left;
    // let PositionY = movingTitleWork[i].offset().top;
  }

  let mouseX = e.pageX - $(this).offset().left;
  let mouseY = e.pageY - $(this).offset().top;

  console.log(mouseX, mouseY);

  let mouseMoveProjects = new TimelineMax();

  mouseMoveProjects.add([
    TweenMax.to($(this).find(".moving-title-work"), .5, {autoAlpha: 1, top: mouseY, left: mouseX})
  ]);

});

$(".elt-work").mouseout(function(){

  let mouseOutProjects = new TimelineMax();

  mouseOutProjects.add([
    TweenMax.to($(this).find(".moving-title-work"), 1, {autoAlpha: 0, top: "50%", left: "50%"})
  ]);

});






//

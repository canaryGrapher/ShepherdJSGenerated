
  alert("ShepherdJS configuration detected. Please wait while the tour is being generated...");
  var Shepherd = window.Shepherd;
  var tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
          classes: 'shadow-md bg-purple-dark',
          scrollTo: true,
          cancelIcon: {
              enabled: true
          }
      }
  });
  tour.addStep({
      id: "tour_0",
      title: "Button",
      text: "This is the button for Exploration",
      classes: "example-step-extra-class",
    attachTo: {element: "#section-home-landing > div > button", on: "top"},
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    })
tour.addStep({
      id: "tour_1",
      title: "Home button",
      text: "This is the home button",
      classes: "example-step-extra-class",
    attachTo: {element: "#home", on: "right"},
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    })
tour.addStep({
      id: "tour_2",
      title: "Welcome: First page",
      text: "This is the first page of the user journey",
      classes: "example-step-extra-class",
    attachTo: {element: "#cart", on: "top"},
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    })
  // Start the tour
  tour.start();
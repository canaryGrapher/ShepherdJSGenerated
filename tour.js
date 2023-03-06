
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
      title: "One: Start",
      text: "Hi, This is the initial step configured",
      classes: "example-step-extra-class",
      attachTo: {
        element: "#root",
        on: "bottom"
      },
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
      title: "Two: Sidebar",
      text: "This is a sidebar for the functionality. All important links can be found here",
      classes: "example-step-extra-class",
      attachTo: {
        element: "#sidebar",
        on: "right"
      },
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
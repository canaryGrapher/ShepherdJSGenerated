
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
      title: "Welcome message",
      text: "This is a welcome message for the website",
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
      title: "Sidebar",
      text: "This is the sidebar of the website",
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
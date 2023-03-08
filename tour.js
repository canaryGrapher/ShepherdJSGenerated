  console.log("ShepherdJS configuration detected. Please wait while the tour is being generated...");
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
      title: "Welcome",
      text: "Welcome to ICICI Bank. Your personal banking experience. ",
      classes: "example-step-extra-class",
    
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    })
tour.addStep({
      id: "tour_1",
      title: "Your profile",
      text: "Click here to view account-related information here,",
      classes: "example-step-extra-class",
    attachTo: {element: "#global > div.bs-header > div > div > div.rhs.nav-ele > div.mod-profile", on: "bottom"},
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
      title: "Hide your balance",
      text: "If you want to hide/show your balances on this dashboard, use this toggle.",
      classes: "example-step-extra-class",
    attachTo: {element: "#RetailUserDashboard_DASHRVNB__1\\:WidgetForm\\. > div.d-flex.space-between > div > div", on: "bottom"},
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
      id: "tour_3",
      title: "Financial journey",
      text: "View your financial journey here. Click on this modal to view. ",
      classes: "example-step-extra-class",
    attachTo: {element: "#NewDashboardGroupletPanel\\.Rowset1 > div > a", on: "right"},
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Complete',
          action: tour.complete
        }
      ]
    })
  // Start the tour
  tour.start();

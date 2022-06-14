let isSubcribed = localStorage.getItem("attend-joelki");

const attendBloc = document.querySelectorAll(".attend");
const not_attendBloc = document.querySelectorAll(".not_attend");

console.log(isSubcribed)
if(isSubcribed === undefined || isSubcribed === null) {
    not_attendBloc.forEach(bloc => {
        bloc.style["display"] = "block";
    }); 
    attendBloc.forEach(bloc => {
        bloc.style["display"] = "none";
    });
} else {
    attendBloc.forEach(bloc => {
        bloc.style["display"] = "block";
    });
    not_attendBloc.forEach(bloc => {
        bloc.style["display"] = "none";
    }); 
}


const getSubmitData = async e => {
    e.preventDefault();
    
  
    localStorage.setItem("attend-joelki", true);
    attendBloc.forEach(bloc => {
        bloc.style["display"] = "block";
    });

    not_attendBloc.forEach(bloc => {
        bloc.style["display"] = "none";
    }); 
  };
  
  const form = document.getElementById("form");
  form.addEventListener("submit", getSubmitData);



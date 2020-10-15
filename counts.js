var olddata= [0,2000,1600,1800,1600,2300,1900,1070,1200,1200,2600,1000,690,800,900,2500,1300,1200,1800,1990,1790,2500,];
  var newdata =[25000,28000,30000,29000,31000,30000];

//  chart
new Chart(document.getElementById("bar-chart"), {
  
  // line , bar , doughnut ,polarArea ,pie ,horizontalBar
    type: 'bar',
   

    data: {
      labels: ["1"  ,"2","3"  ,"4","5"  ,"6","7"  ,"8","9"  ,"10","11"  ,"12","13"  ,"14","15"  ,"16","17"  ,"18","19"  ,"20","21"  ,"22","23"  ,"24","25"  ,"26","27"  ,"28","29"  ,"30","31"],
      datasets: [
        

        //INDEX 0 
        {
          label: "الدخل (Sr)",
          //for pie char clors ["#2e5ea2","#5e5ea2","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "3e95cd"]
                        backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
 // INDEX 1
          borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],

               // INDEX 2
          borderShadow:'rgb(237,52,114)',
          fontSize:'2em',
          borderColor:'rgb(237,52,114)',
          data:newdata,
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: '2019-6دخل الشهر '
      }
    }
});
         
function updateChart(){
chart.data.datasets[0].data=[25000,28000,30000,29000,31000,30000];
chart.update();

}


 


 /* THIS CODE FOR JSON REQUIST 
var xmlhttp = new XMLHttpRequest();
var url = "myTutorials.txt";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse( xmlhttp.responseText);
           // #     var output ='';
       // # for (var i =0; i< response.length;  i++) {
    // console.log(mars[i].name);
    // # var output +='<li>'+ response[i].sat +'</li>';


      // var day= response.vl[0];
      console.log(response.vl[0]);
    }
};
xmlhttp.open("GET", "count.json", true);
xmlhttp.send();

// document.getElementById('ull').innerHTML=output;

*/

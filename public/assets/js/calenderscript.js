$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});

// $(function() {
//   $("#datepicker").datepicker({
//       todayHighlight:true,
//       onSelect:function(date) {
//                               $.ajax({
//                                   type: "POST",
//                                   url: "/auth/date/",
//                                   dataType: 'json',
//                                   data: { json: JSON.stringify(date) },
//                                   success: function(data){    
//                                       console.log(data); 
//                                     }   
//                               });
//                           },
//                           autoclose:true,
//   }).datepicker('update', new Date());
// });
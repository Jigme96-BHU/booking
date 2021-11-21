
			let node, parent;
			$(()=>{

				$('td').on('click', (event) => {
					node = event.target;
					var res = $(node).parent()[0].id;
					// console.log($($(node).parent()[0]).children()[0].innerText);
					var col = $('th')[parseInt(node.className)+1].innerText;
					document.querySelector("input[name='equipmentName']").value = $($(node).parent()[0]).children()[0].innerText;
					document.querySelector("input[name='timeValue']").value = col;

					$('.modal').toggleClass("show-modal");
					
					
				});

				$('.btn-yes').on('click', (event) => {
					$('.modal').toggleClass("show-modal");
					$(node).addClass("btn-red");

					
					console.log("Ordered Equipment " + $(node).parent()[0].id + " on " + $('th')[parseInt(node.className)+1].innerText);
					$('#test').attr('class'); 

				});

				$('.btn-no').on('click', () => {
					$('.modal').toggleClass("show-modal");
					$(node).removeClass("btn-red");

					console.log("Cancled Equipment " + $(node).parent()[0].id + " on " + $('th')[parseInt(node.className)+1].innerText);

				});

			});	
		

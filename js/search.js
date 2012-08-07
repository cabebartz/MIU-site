 // MIU 1208
// Cabe Bartz
// Week1

//DOM Listener
window.addEventListener("DOMContentLoaded", function () {
	//getElementByID
	function ElId(x) {
		var anElement = document.getElementById(x);
		return anElement;
	}
//search
	var search = ElId('searchBtn');
	var getSearch = function(){
		var term = ElId('search').value;

		if(term !== ""){
			for(i = 0, j = localStorage.length; i < j; i++){
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var obj = JSON.parse(value);
				for(n in obj){
					if(term === obj[n][1]){
						for (q in obj){
							console.log(obj[q][0] + " " + obj[q][1]);
						}
					}
				}
			}
		} else {
			alert("Please enter a search term");
		}
	};
	search.addEventListener("click", getSearch);
	
/*	var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var	makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		ElId('items').style.display = "block";
		for (var i = 0, j = localStorage.length; i < j; i++) {
			var makeLi = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var object = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			getImage(object.category[1], makeSubList);
			for (var a in object) {
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = object[a][0] + " " + object[a][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			//make edit and delete links for local storage
			makeItemLinks(localStorage.key(i), linksLi);
		}
		//get images for categories
	function getImage(catName, makeSubList){
		var imgLi = document.createElement('li');
		makeSubList.appendChild(imgLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "images/" + catName + ".png");
		imgLi.appendChild(newImg);
	}
	//makes edit and delete links for each local storage entry
	function makeItemLinks(key, linksLi){
		//add edit bill link
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Bill";
		editLink.addEventListener("click", editBill);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		// add break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		//add delete bill link
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Bill";
		deleteLink.addEventListener("click", deleteBill);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	//make edit local storage link work
	function editBill(){
		var value = localStorage.getItem(this.key),
			item = JSON.parse(value),
			i,
			radios = document.forms[0].billPaid,
			editSubmit = ElId('submit');
		toggle("off");
		ElId('categories').value = item.category[1];
		ElId('billName').value = item.billName[1];
		ElId('accountNum').value = item.accountNum[1];
		ElId('billAmount').value = item.billAmount[1];
		ElId('dueDate').value = item.dueDate[1];
		for (i = 0; i < radios.length; i++){
			if(radios[i].value === "Paid" && item.billPaid[1] === "Paid"){
				radios[i].setAttribute("checked", "checked");
			} else if (radios[i].value === "Not Paid" && item.billPaid[1] === "Not Paid"){
				radios[i].setAttribute("checked", "checked");
			}
		ElId('priority').value = item.priority[1];
		ElId('comments').value = item.comments[1];
		// remove listener from save bill button
		saveData.removeEventListener("click", storeData);
		//change Submit Bill value to Submit Changes
		ElId('submit').value = "Edit Bill";
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
		}
	}
	function deleteBill (){
		var ask = confirm("Are you sure you want to delete this bill?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Bill was deleted!");
			window.location.reload();
		} else {
			alert("Bill was not deleted");
		}
	}
*/
});
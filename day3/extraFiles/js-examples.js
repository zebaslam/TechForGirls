function checkTheRow(elements,index){
	if(index<3){ //first row

	}else if(index<6){//secibd row

	}else{//third row

	}
}

function checkTheColumn(elements, index){
	//elements should be an object with 9 items
	if(index%3 == 0){ //first colum

	}else if(index%3==1){//secibd colum

	}else{//third colum

	}
}


function checkTheDiagonal(elements,index){
	if(index%2 ==0){ //on diagonal

	}else{ // not on diagnoal, no need to check
		return
	}

}

function checkWinner(elements,index){
	if(checkTheRow(elements,index)){

	}else if(checkTheColumn(elements,index)){

	}else if(checkTheDiagonal(elements,index)){

	}else{
		return null;
	}
}
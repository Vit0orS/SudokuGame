function genBoard(){
    let x = Math.floor(Math.random() * (4 - 1)) + 1;
    //x = 'x';
    switch (x){
        case 1:
            board = [[ '', '', 4,   '', '', '',   '', 6, 7 ],
                    [ 3, '', '',   4, 7, '',   '', '', 5 ],
                    [ 1, 5, '',   8, 2, '',   '', '', 3 ],                            
                    [ '', '', 6,   '', '', '',   '', 3, 1 ],
                    [ 8, '', 2,   1, '', 5,   6, '', 4 ],
                    [ 4, 1, '',   '', '', '',   9, '', '' ],                            
                    [ 7, '', '',   '', 8, '',   '', 4, 6 ],
                    [ 6, '', '',   '', 1, 2,   '', '', '' ],
                    [ 9, 3, '',   '', '', '',   7, 1, '' ]];
            break;
        case 2:
            board = [[ '', '', '',   '', 4, 8,   '', 9, 7 ],
                    [ 7, '', '',   5, '', 1,   '', '', 3 ],
                    [ '', 6, '',   '', '', '',   '', 4, '' ],                            
                    [ '', 9, '',   '', '', '',   8, 1, '' ],
                    [ 8, '', 4,   1, 9, 2,   3, 7, '' ],
                    [ 6, 1, 7,   '', 3, 4,   5, 2, '' ],                            
                    [ '', '', '',   '', 5, '',   '', '', 1 ],
                    [ '', 3, 6,   4, '', 9,   '', '', '' ],
                    [ 4, '', 5,   '', '', '',   '', 3, '' ]];
            break;
        case 3:
            board = [[ 5, '', 1,   6, 7, '',   8, '', 4 ],
                    [ '', '', 7,   5, 4, '',   1, '', 3 ],
                    [ 6, 4, 9,   '', '', '',   '', '', '' ],                            
                    [ 7, '', 3,   2, 8, '',   9, 1, 6 ],
                    [ 2, '', '',   '', 9, '',   4, '', '' ],
                    [ 4, '', '',   '', '', 7,   '', '', '' ],                            
                    [ 3, 7, '',   '', 2, 8,   '', '', '' ],
                    [ '', '', 2,   '', 1, 5,   '', '', '' ],
                    [ '', '', '',   '', 6, 3,   2, 4, 9 ]];
            break;
        case 'x':
                board = [[ 2, 8, 4,   5, 9, 3,   1, 6, 7 ],
                        [ 3, 6, 9,   4, 7, 1,   8, 2, 5 ],
                        [ 1, 5, 7,   8, 2, 6,   4, 9, 3 ],                            
                        [ 5, 7, 6,   9, 4, 8,   2, 3, 1 ],
                        [ 8, 9, 2,   1, 3, 5,   6, 7, 4 ],
                        [ 4, 1, 3,   2, 6, 7,   9, 5, 8 ],                            
                        [ 7, 2, 1,   3, 8, 9,   5, 4, 6 ],
                        [ 6, 4, 5,   7, 1, 2,   3, 8, 9 ],
                        [ 9, 3, '',   '', 5, 4,   7, 1, 2 ]];
                break;
        default:
            board = [[ '', '', 2,   '', '', 1,   6, '', 7 ],
                    [ '', 6, 8,   7, '', '',   9, '', '' ],
                    [ 1, '', '',   3, 6, 8,   '', 5, 4 ],                            
                    [ '', '', '',   '', '', 3,   4, 7, 9 ],
                    [ 7, '', 4,   '', '', '',   '', '', 2 ],
                    [ '', 1, '',   '', 7, 6,   '', '', '' ],                            
                    [ '', 5, '',   '', 3, '',   '', '', '' ],
                    [ 9, 2, '',   1, '', '',   3, '', 5 ],
                    [ 4, 7, 3,   '', 2, 5,   8, '', 1 ]];
    }
    fillScreen();
    setStatic();
}

function setStatic(){
    let k=0;
    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            if (board[i][j]!='')
            {
                cells[k].style.color = "rgb(185, 111, 0)";
                cells[k].static = "static";
                cells[k].setAttribute('draggable',false);
            }
            k++;
        }
    }
}

function isSolved(){
    let k=0;
	let estaCorreto=true;
    let linha = createArray(9);
	for (let m=0; m<9; m=m+3)
	{
		for (let l=0; l<9; l=l+3)
		{
			for (let i=m; i<m+3; i++)
				for (let j=l; j<l+3; j++)
				{
					linha[k] = board[i][j];
					k++;
                    if (k==9)
                        break;
				}	
			estaCorreto = estaCerto(linha);
			k=0;
			if (!estaCorreto)
				break;
		}
		if (!estaCorreto)
			break;
	}

	if (estaCorreto)
		for (let i=0; i<9; i++)
		{
			for (let j=0; j<9; j++)
			{
					linha[k] = board[i][j];
					k++;
			}
			estaCorreto = estaCerto(linha);
			k=0;
			if (!estaCorreto)
				break;
		}	
	

	if (estaCorreto)
	for (let i=0; i<9; i++)
		{
			for (let j=0; j<9; j++)
			{
					linha[k] = board[j][i];
					k++;
			}
			estaCorreto = estaCerto(linha);
			k=0;
			if (!estaCorreto)
				break;
		}

    if (estaCorreto){
        let k=0;
        document.getElementById("mainTitle").style.background="green";
        alert("Você ganhou! | You won!");
        for (let i=0; i<9; i++){
            for (let j=0; j<9; j++){
                cells[k].style.background="green";
                cells[k].setAttribute('draggable',false);
                cells[k].static = "static";
                cells[k++].style.color = "white";
            }
        }
    }
}

function estaCerto(linha)
{
    for(let i=0; i<9; i++){
        if(!isNumeric(linha[i]))
            return false;
    }

	for (let i=0; i<9; i++)
	{
		for (let j=i+1; j<9; j++)
		{        
			if (linha[i]==linha[j])
			{
				return false;
			}
		}
	}
	return true;
}

function isNumeric(str){
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
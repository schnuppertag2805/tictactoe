const circleSymbol = '<ion-icon name="ellipse-outline"></ion-icon>';
const crossSymbol = '<ion-icon name="close-outline"></ion-icon>';
let isGameRunning = true;
let fields = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];


function handleClick( fieldId )
{
    if(isGameRunning)
    {
        if(fields[parseInt(fieldId)] == "e")
        {
            fields[parseInt(fieldId)] = "o";
            document.getElementById( fieldId ).innerHTML = circleSymbol;
            checkForWinner();
            setCross();
        }
    }
}

function setCross()
{
    let fieldId = Math.round( Math.random() * 8);
    if(fields[parseInt(fieldId)] == "e")
    {
        fields[parseInt(fieldId)] = "x";
        document.getElementById( fieldId ).innerHTML = crossSymbol;
        checkForWinner();
    }
    else
    {
        setCross();
    }
}

function checkForWinner()
{
    if(fields[0] == "x" && fields[1] == "x" && fields[2] == "x" )
    {
        setWinner( "x", [0,1,2] );
        return true;
    }
    else if(fields[3] == "x" && fields[4] == "x" && fields[5] == "x" )
    {
        setWinner( "x", [3,4,5] );
        return true;
    }
    else if(fields[6] == "x" && fields[7] == "x" && fields[8] == "x" )
    {
        setWinner( "x", [6,7,8] );
        return true;
    }
    else if ( fields[0] == "x" && fields[3] == "x" && fields[6] == "x" )
    {
        setWinner( "x", [0, 3, 6] );
        return true;
    }
    else if ( fields[1] == "x" && fields[4] == "x" && fields[7] == "x" )
    {
        setWinner( "x", [1, 4, 7] );
        return true;
    }
    else if ( fields[2] == "x" && fields[5] == "x" && fields[8] == "x" )
    {
        setWinner( "x", [2, 5, 8] );
        return true;
    }
    else if ( fields[0] == "x" && fields[4] == "x" && fields[8] == "x" )
    {
        setWinner( "x", [0, 4, 8] );
        return true;
    }
    else if ( fields[2] == "x" && fields[4] == "x" && fields[6] == "x" )
    {
        setWinner( "x", [2, 4, 6] );
        return true;
    }
    else if(fields[0] == "o" && fields[1] == "o" && fields[2] == "o" )
    {
        setWinner( "o", [0,1,2] );
        return true;
    }
    else if(fields[3] == "o" && fields[4] == "o" && fields[5] == "o" )
    {
        setWinner( "o", [3,4,5] );
        return true;
    }
    else if(fields[6] == "o" && fields[7] == "o" && fields[8] == "o" )
    {
        setWinner( "o", [6,7,8] );
        return true;
    }
    else if ( fields[0] == "o" && fields[3] == "o" && fields[6] == "o" )
    {
        setWinner( "o", [0, 3, 6] );
        return true;
    }
    else if ( fields[1] == "o" && fields[4] == "o" && fields[7] == "o" )
    {
        setWinner( "o", [1, 4, 7] );
        return true;
    }
    else if ( fields[2] == "o" && fields[5] == "o" && fields[8] == "o" )
    {
        setWinner( "o", [2, 5, 8] );
        return true;
    }
    else if ( fields[0] == "o" && fields[4] == "o" && fields[8] == "o" )
    {
        setWinner( "o", [0, 4, 8] );
        return true;
    }
    else if ( fields[2] == "o" && fields[4] == "o" && fields[6] == "o" )
    {
        setWinner( "o", [2, 4, 6] );
        return true;
    }
    else if
    (
        fields[0] != "e" &&
        fields[1] != "e" &&
        fields[2] != "e" &&
        fields[3] != "e" &&
        fields[4] != "e" &&
        fields[5] != "e" &&
        fields[6] != "e" &&
        fields[7] != "e" &&
        fields[8] != "e"
    )
    {
        setWinner("d");
    }


}

function setWinner( winner, winningLine )
{
    isGameRunning = false;
    if( winner == "o")
    {
        highlightWinner( winningLine );
        document.getElementById("status").innerHTML = "Du hast gewonnen!";
        document.getElementById("card").style.backgroundColor = "green";
    }
    else if( winner == "x")
    {
        highlightWinner( winningLine );
        document.getElementById("status").innerHTML = "Du hast verloren!";
    }
    else
    {
        document.getElementById("status").innerHTML = "Unentschieden!";
    }
}

function highlightWinner( winningLine )
{
    document.getElementById( winningLine[0] ).style.backgroundColor = "green";
    document.getElementById( winningLine[1] ).style.backgroundColor = "green";
    document.getElementById( winningLine[2] ).style.backgroundColor = "green";
}

function reset()
{
    fields = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];

    for( i = 0; i <= 8; i++)
    {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).style.backgroundColor = "white";
    }

    document.getElementById("status").innerHTML = "Bereit zu spielen?";
    document.getElementById("card").style.backgroundColor = "magenta";

    isGameRunning = true;
}
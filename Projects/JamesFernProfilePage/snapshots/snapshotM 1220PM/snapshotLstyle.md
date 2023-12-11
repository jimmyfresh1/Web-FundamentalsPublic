
.container {
    margin:0;
    padding:0;
    background-color:rgba(195, 0, 255, 0.5);
    width:1000px;
}
.navBar {
color: white;
background-color: black;
height: 40px;
}


.nav {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display:flex;
    background-color:rgb(15, 15, 15);
    height:40px;
    justify-content: space-between;
    align-items: center;

}

.profile{
    margin-left: 10px;
    color:white;
    font-size:medium;
    align-items: center;
}
.nav-links {
    font-size: 12px;
    flex:7;
    display:flex;
    list-style-type:none;
    align-items: center;
    gap:7px;
    justify-content: space-around;
    margin-right:20px;

}

a {
    color: #FFFFFF;
    text-decoration: none;
}


.nav-links > li {
    flex:1;
    text-wrap:nowrap;}
    
.btn {
    background-color:rgb(14, 209, 209);
    box-shadow: black 2px 2px;
    color:white;
    font-size:13px;
    border: 2px black;
    border-style:solid;
    flex: 3; 
}



.mainContent{
    display:flex;
    margin: 20px; 
    justify-content:center;
    background-color:rgb(251, 255, 0);
}
.profileEducation{
    width: 40%;
    background-color:aqua;
    text-align:center;
    
}
.yourConnections{
    width:25%;
    background-color: red;
    text-align:center;

}

.userCard {
height: 250px;
background-color: rgb(117, 155, 155);
margin-left: auto;
margin-right: auto;
margin-top: 20px;
margin-bottom:20px;
width: 90%;
}


.icon  {
    height:  15px;
    width:15px;
}


.top-strip{
    background-color:rgb(129, 177, 250);
    text-align:left;
    height:28%;
}

.bottom-strip {
    background-color:rgb(236, 242, 255);
    text-align:left;
    height:72%;
    display:flex;
}

#pic {
    height: 55px;
    width: 55px;
    position: relative;
    top: 40px;
    left: 20px;
}

.edit {
    display:flex;
}

.education {
width:  90%;
height:245px;
background-color:rgb(236, 242, 255);
margin-left: auto;
margin-right: auto;
margin-bottom:10px;
margin-top:10px;
display:flex; 
flex-direction: column;
}

.education h3 {
    background-color: gray;

}



#connectionRequests {
width:  90%;
height: 200px;
background-color:rgb(236, 242, 255);
margin-left: auto;
margin-right: auto;
margin-top: 10px;
margin-bottom:10px;
}
#yourConnections {
width:  90%;
height: 315px;
color:rgb(15, 1, 1);
background-color:rgb(236, 242, 255);
margin-left: auto;
margin-right: auto;
margin-top: 10px;
margin-bottom:10px;
}


ul {
    list-style-type:none;
    font-size:15px;
    justify-content: flex-start;
}


.prof p {    
    color:blue;
    text-decoration:underline;
    align-content:center;
}

#stack p{
    font-size:12px;
}

#date p{
    font-size:12px;
}

#cred p{
    font-size:12px;
}
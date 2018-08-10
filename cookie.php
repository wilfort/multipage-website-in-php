<?php


?>
<script>
    windows.onload=function(){
        function banner(){
            let bannerContainer=document.createElement("DIV");
            let bannerInputYes=document.createElement("INPUT");
            let bannerInputNo=document.createElement("INPUT");
            let bannerLabel=document.createElement("LABEL");

            function setID (element, id){
                element.setAttribute("id",id);
            };
            function setName(radio,name){
                radio.setAttribute("name",name);
            };
            function setValue(button,value){
                button.setAttibute("value",value);
            };
            setID(bannerContainer,"bannerContainer");
            setID(bannerInputYes, "bannerInputYes");
            setID(bannerInputNo,"bannerInputNo");
            setName(bannerInputYes,"cookie");
            setName(bannerInputNo,"cookie");
            setValue(bannerInputYes,"yes");
            setValue(bannerInputNo,"no");
            bannerLabel.setAttribute("for","cookie");
            bannerLabel.innerHTML="Acceptez vous les cookies";

        }


    }
</script>

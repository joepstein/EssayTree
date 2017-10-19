<?php
	include_once 'header.php';

  #session_start();
?>

<link rel="stylesheet" type="text/css" href="essayTree.css">

<section class="account-main-container">
	<div class="account-main-wrapper">
		<!DOCTYPE html>
		<html lang="en">
		<head>
  		<meta charset="utf-8">
  		<title>EssayTree</title>
  		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  		<script src="https://code.jquery.com/jquery-3.2.1.min.js"
  			integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  			crossorigin="anonymous">
  		</script>
  		<script>
  			var evidenceObjects = [];
  			var mostRecentBodyClicked = "";
  			var mostRecentEvidenceClicked = "";
  			var evidenceTextObject = function(parent, texts, urls, citations){
  				this.parent = parent;
  				this.texts = texts;
  				this.urls = urls;
  				this.citations = citations;
  			};

  			var isNewEvidenceRow = function(parent){
  				boolean = true;

  				for(i=0;i<evidenceObjects.length;i++){
  					if(evidenceObjects[i].parent === parent){
  						boolean = false;
  					} 
  				}

  				return boolean;
  			};

  			var indexOfEvidenceRow = function(parent){
  				var index = -1;

  				for(k=0;k<evidenceObjects.length; k++){
  					if(evidenceObjects[k].parent === parent){
  						index = k;
  					}
  				}

  				return index;
  			};

  			var indexOfEvidenceRowText = function(evidence){
  				var location = -1;

  				if(evidence === "evidenceText1"){
  					location = 0;
  				}else if(evidence === "evidenceText2"){
  					location = 1;
  				}else if(evidence === "evidenceText3"){
  					location = 2;
  				}else if(evidence === "evidenceText4"){
  					location = 3;
  				}else if(evidence === "evidenceText5"){
  					location = 4;
  				}else if(evidence === "evidence6"){
  					location = 5;
  				}

  				return location;
  			};

  			//Listener for the most recent bodyText clicked
  			$(document).ready(function(){
  				$('.bodyText').click(function(){
  					mostRecentBodyClicked = $(document.activeElement).attr('id');

  					if(isNewEvidenceRow(mostRecentBodyClicked)){
  						var newItem = new evidenceTextObject(mostRecentBodyClicked, 
  							["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]);

  						evidenceObjects.push(newItem);
  					}
  				});
  			});

  			//Listener for the most recent evidenceText clicked
  			$(document).ready(function(){
  				$('.evidenceText').click(function(){
  					mostRecentEvidenceClicked = $(document.activeElement).attr('id');
  				});
  			});


  			//Listener for saving evidence rows
  			$(document).ready(function(){
  				$('button#saveInfo').click(function(){
  					if($('button#saveInfo').html() === "Save All Evidence"){
  						for(j=0;j<6;j++){
  							evidenceObjects[indexOfEvidenceRow(mostRecentBodyClicked)].texts[j] = $('#evidenceText' + (j+1)).val();
  						}
  					} else{
  						evidenceObjects[indexOfEvidenceRow(mostRecentBodyClicked)].urls[indexOfEvidenceRowText(mostRecentEvidenceClicked)] = 
  							$('#urlText').val();
  						evidenceObjects[indexOfEvidenceRow(mostRecentBodyClicked)].citations[indexOfEvidenceRowText(mostRecentEvidenceClicked)] = 
  							$('#citationText').val();
  					}
  				});
  			});

  			//Listener for saving and formatting all information in the text document
  			$(document).ready(function(){
				$('form#saveForm').submit(function(event){
					event.preventDefault();
					var all = "";
					var introText = $('#ideaText').val();
					var bodyTexts = [];

					var parentNumber = function(parent){
						if(parent === "bodyText1"){
							return 0;
						} else if(parent === "bodyText2"){
							return 1;
						} else if(parent === "bodyText3"){
							return 2;
						} else if(parent === "bodyText4"){
							return 3;
						} else if(parent === "bodyText5"){
							return 4;
						} else if(parent === "bodyText6"){
							return 5;
						}
					};

					for(l=0;l<6;l++){
						bodyTexts.push($('#bodyText' + (l+1)).val());
					}
					var conclusionText = $('#conclusionText').val();

					var cleanAll = function(){
						if(introText !== ""){
							if(introText.indexOf("{;[:(!") !== -1){
								for(q=0;q<(introText.indexOf("{;[:(!")+1);q++){
									introText = introText.replace("{;[:(!", "");
								}
							}

							if(introText.indexOf("!):];}") !== -1){
								for(r=0;r<(introText.indexOf("!):];}")+1);r++){
									introText = introText.replace("!):];}", "");
								}
							}
						}

						for(s=0;s<6;s++){
							if(bodyTexts[s] !== ""){
								if(bodyTexts[s].indexOf("{;[:(!") !== -1){
									for(t=0;t<(bodyTexts[s].indexOf("{;[:(!")+1);t++){
										bodyTexts[s] = bodyTexts[s].replace("{;[:(!", "");
									}
								}

								if(bodyTexts[s].indexOf("!):];}") !== -1){
									for(v=0;v<(bodyTexts[s].indexOf("!):];}")+1);v++){
										bodyTexts[s] = bodyTexts[s].replace("!):];}", "");
									}
								}
							}
						}

						for(w=0;w<evidenceObjects.length;w++){
							for(x=0;x<6;x++){
								if(evidenceObjects[w].texts[x] !== ""){
									if(evidenceObjects[w].texts[x].indexOf("{;[:(!") !== -1){
										for(y=0;y<(evidenceObjects[w].texts[x].indexOf("{;[:(!")+1);y++){
											evidenceObjects[w].texts[x] = evidenceObjects[w].texts[x].replace("{;[:(!", "")
										}
									}

									if(evidenceObjects[w].texts[x].indexOf("!):];}") !== -1){
										for(b=0;b<(evidenceObjects[w].texts[x].indexOf("!):];}")+1);b++){
											evidenceObjects[w].texts[x] = evidenceObjects[w].texts[x].replace("!):];}", "")
										}
									}
								}

								if(evidenceObjects[w].urls[x] !== ""){
									if(evidenceObjects[w].urls[x].indexOf("{;[:(!") !== -1){
										for(z=0;z<(evidenceObjects[w].urls[x].indexOf("{;[:(!")+1);z++){
											evidenceObjects[w].urls[x] = evidenceObjects[w].urls[x].replace("{;[:(!", "")
										}
									}

									if(evidenceObjects[w].urls[x].indexOf("!):];}") !== -1){
										for(c=0;c<(evidenceObjects[w].urls[x].indexOf("!):];}")+1);c++){
											evidenceObjects[w].urls[x] = evidenceObjects[w].urls[x].replace("!):];}", "")
										}
									}
								}

								if(evidenceObjects[w].citations[x] !== ""){
									if(evidenceObjects[w].citations[x].indexOf("{;[:(!") !== -1){
										for(a=0;a<(evidenceObjects[w].citations[x].indexOf("{;[:(!")+1);a++){
											evidenceObjects[w].citations[x] = evidenceObjects[w].citations[x].replace("{;[:(!", "")
										}
									}

									if(evidenceObjects[w].citations[x].indexOf("!):];}") !== -1){
										for(d=0;d<(evidenceObjects[w].citations[x].indexOf("!):];}")+1);d++){
											evidenceObjects[w].citations[x] = evidenceObjects[w].citations[x].replace("!):];}", "")
										}
									}
								}
							}
						}

						if(conclusionText !== ""){
							if(conclusionText.indexOf("{;[:(!") !== -1){
								for(f=0;f<(conclusionText.indexOf("{;[:(!")+1);f++){
									conclusionText = conclusionText.replace("{;[:(!", "");
								}
							}

							if(conclusionText.indexOf("!):];}") !== -1){
								for(g=0;g<(conclusionText.indexOf("!):];}")+1);g++){
									conclusionText = conclusionText.replace("!):];}", "");
								}
							}
						}
					};

					var formatAll = function(){
						if(introText !== ""){
							all = "{;[:(!0!):];}" + introText;
						}

						for(m=0;m<6;m++){
							if(bodyTexts[m] !== ""){
								all = all + "{;[:(!0" + m + "!):];}" + bodyTexts[m];
							}
						}

						for(n=0;n<evidenceObjects.length;n++){
							for(p=0;p<6;p++){
								if(evidenceObjects[n].texts[p] !== ""){	
									all = all + "{;[:(!0" + parentNumber(evidenceObjects[n].parent) + p + "!):];}" + evidenceObjects[n].texts[p];
								}

								if(evidenceObjects[n].urls[p] !== ""){
									all = all + "{;[:!0" + parentNumber(evidenceObjects[n].parent) + p + "0!):];}" + evidenceObjects[n].urls[p];
								}

								if(evidenceObjects[n].citations[p] !== ""){
									all = all + "{;[:!0" + parentNumber(evidenceObjects[n].parent) + p + "1!):];}" + evidenceObjects[n].citations[p];
								}
							}
						}

						if(conclusionText !== ""){
							all = all + "{;[:(!7!):];}" + conclusionText;
						}
					};

					cleanAll();
					formatAll();

					var sendInfo = function(){
            var name = prompt("Please enter the name of your essay tree.");

            while(name == ""){
              name = prompt("You must enter a name for your essay tree.");
            }

            $.post("includes/saveEssay.inc.php",{name: name, all: all}, function(){
              window.location.href = "account.php";
            });
          };

          sendInfo();

					//$.ajax({
					//	type: "POST",
					//	url: "newEssayTree.php",
					//	success: function(){
					//		console.log("Do you see this: " + text + "?");
					//	}
					//});
   	 			});
			});
  		</script> 
		</head>

		<body>
  
  			<div id="header">
    			<h1>Essay Tree</h1>
     			<div id="description">
        			<p>Buttons:</p>
        			<p>Enter and Backslash- Enter will reveal the body paragraphs  the first time it is preseed, and the second time enter is pressed the space for the conclusion is revealed. Backslash is used to cover up the most recently revealed part.</p>
        			<p>Plus and Minus- When using the body or evidence paragraphs, plus is used to add more paragraphs, and minus is used to hide them.</p>
        			<p>Select Button- This button will allow you to isolate one body paragraph, and it will also display the first 3 possible pieces of evidence. Select is also used with the evidence, in order to isolate one piece of evidence, and to display lists of URLs and citations.</p>
       				<p>View Button- Once the select button has been pressed it will change to a view button. Pressing the view button will hide the evidence or url that you are currently working with, so do not forget to save your work as you go.</p>
        			<p>Save Buttons- There is both a save button for all the current pieces of evidence for a specific body paragraph, and there is a save button for the URLs and citations of a specific piece of evidence.</p>
    			</div>
  			</div>
        
  			<div id="top">
    			<div id="idea">
      				<textArea id="ideaText" placeholder="Introduce your topic here; press enter to show start working on body paragraphs and backslash to hide them..."></textArea>
    		</div>
    
    		<div id="bodyParagraphs" style="display: none">
      
      			<div id="firstBodyRow" class="w3-row">
        			<div id="body1" class="w3-col s4" style="background-color:rgba(0,0,165,0.8);">
          				<h2>Body #1</h2>
          				<textArea id="bodyText1" class="bodyText" placeholder = "Structure your essay with body paragraphs; press + to add more and - to hide the most recent one..." ></textArea>
        			</div>
        			<div id="body2" class="w3-col s4" style="background-color:rgba(0,165,0,0.8);">
          				<h2>Body #2</h2>
          				<textArea id="bodyText2" class="bodyText"></textArea>
        			</div>
        			<div id="body3" class="w3-col s4" style="background-color:rgba(165,0,0,0.8);">
          				<h2>Body #3</h2>
          				<textArea id="bodyText3" class="bodyText"></textArea>
        			</div>
      			</div>
      
      			<div id="secondBodyRow" class="w3-row w3-hide">
        			<div id="body4" class="w3-col s12" style="background-color:rgba(0,0,90,0.8);">
          				<h2>Body #4</h2>
          				<textArea id="bodyText4" class="bodyText"></textArea>
        			</div>
        			<div id="body5" class="w3-col s6 w3-hide" style="background-color:rgba(0,90,0,0.8);">
          				<h2>Body #5</h2>
         			 	<textArea id="bodyText5" class="bodyText"></textArea>
        			</div>
        			<div id="body6" class="w3-col s4 w3-hide" style="background-color:rgba(90,0,0,0.8);">
          				<h2>Body #6</h2>
          				<textArea id="bodyText6" class="bodyText"></textArea>
        			</div>
      			</div>
      
      			<button id="selectBody" type="button">Select</button>
      
      			<div id="middle" style="display: none">
        			<h1 id="middleHeader">
          					Display Selected Body Paragraph
        			</h1>
    
        			<div id="evidence">
        
          				<div id="firstEvidenceRow" class="w3-row">
            				<div id="evidence1" class="w3-col s4">
             		 			<h2>Evidence #1</h2>
              					<textArea id="evidenceText1" class="evidenceText" placeholder = "Provide evidence for your body paragraph; press + to add more and - to hide the most recent one..."></textArea>
            				</div>
           					<div id="evidence2" class="w3-col s4">
              					<h2>Evidence #2</h2>
              					<textArea id="evidenceText2" class="evidenceText"></textArea>
            				</div>
            				<div id="evidence3" class="w3-col s4">
              					<h2>Evidence #3</h2>
              					<textArea id="evidenceText3" class="evidenceText"></textArea>
            				</div>
          				</div>
          
          				<div id="secondEvidenceRow" class="w3-row w3-hide">
            				<div id="evidence4" class="w3-col s12">
              					<h2>Evidence #4</h2>
              					<textArea id="evidenceText4" class="evidenceText"></textArea>
            				</div>
            				<div id="evidence5" class="w3-col s6 w3-hide">
              					<h2>Evidence #5</h2>
              					<textArea id="evidenceText5" class="evidenceText"></textArea>
            				</div>
            				<div id="evidence6" class="w3-col s4 w3-hide">
              					<h2>Evidence #6</h2>
              					<textArea id="evidenceText6" class="evidenceText"></textArea>
            				</div>
          				</div>
          
          				<div class="evidenceButtonRow">
            				<button id="selectEvidence" type="button">Select</button>
            				<button id="saveInfo" type="button">Save All Evidence</button>
          				</div>
        
          				<div id="info" class="w3-row w3-hide">
            				<div id="urlSpace" class="w3-col s6 w3-indigo">
              					<textArea id="urlText" placeholder="List Out the URLs Used for the Evidence Here"></textArea>
            				</div>
            
            				<div id="citationSpace" class="w3-col s6 w3-purple">
              					<textArea id="citationText" placeholder="List Out the Necessary Citations for Your Evidence"></textArea>
            				</div>
          				</div> 
          
        			</div>        
      			</div>
    		</div>
  		</div>


  		<div id="bottom" style="display: none">
    		<div id="conclusion">
      			<textArea id="conclusionText" placeholder="Explain Your Overall Message"></textArea>
    		</div>

    		<form id="saveForm" action="includes/saveEssay.inc.php" method="POST">
				  <button type="submit" id="saveButton" style="margin: 27.5px 0px 0px 0px;">Save Your Essay Tree!</button>    
			  </form>

  		</div>

  		<script type="text/javascript" src="essayTree.js"></script> 
		</body>
		</html>
	</div>

</section>

<?php
	include_once 'footer.php';
?>
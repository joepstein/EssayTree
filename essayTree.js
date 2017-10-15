var introController = (function(){
  var doms = {
    ideaText: document.getElementById("ideaText"),
    body: document.getElementById("bodyParagraphs"),
    firstBodyRow: document.getElementById("firstBodyRow"),
    body1: document.getElementById("body1"),
    body2: document.getElementById("body2"),
    body3: document.getElementById("body3"),
    secondBodyRow: document.getElementById("secondBodyRow"),
    body4: document.getElementById("body4"),
    body5: document.getElementById("body5"),
    body6: document.getElementById("body6"),
    selectBody: document.getElementById("selectBody"),
    middle: document.getElementById("middle"),
    middleHeader: document.getElementById("middleHeader"),
    evidence: document.getElementById("evidence"),
    firstEvidenceRow: document.getElementById("firstEvidenceRow"),
    evidence1: document.getElementById("evidence1"),
    evidence2: document.getElementById("evidence2"),
    evidence3: document.getElementById("evidence3"),
    secondEvidenceRow: document.getElementById("secondEvidenceRow"),
    evidence4: document.getElementById("evidence4"),
    evidence5: document.getElementById("evidence5"),
    evidence6: document.getElementById("evidence6"),
    evidenceButtonRow: document.getElementById("evidenceButtonRow"),
    selectEvidence: document.getElementById("selectEvidence"),
    saveInfo: document.getElementById("saveInfo"),
    info: document.getElementById("info"),
    bottom: document.getElementById("bottom"),
    conclusionText: document.getElementById("conclusionText")
  };
  
  var introKeys = function(){
    //ENTER EVENT
    document.addEventListener("keyup", function(event){
      var typing;
      if(document.activeElement.tagName === "TEXTAREA"){
        typing = true;
       } else{typing = false;}
      
      if(event.keyCode === 13 && !typing && doms.body.style.display === "none"){
        doms.body.style.display = "block";
      }else if(event.keyCode === 13 && !typing && doms.body.style.display === "block" && doms.bottom.style.display === "none"){
          doms.bottom.style.display = "block";
      }
    });
    
    //BACKSLASH EVENT
    document.addEventListener("keyup", function(event){
      var typing;
      if(document.activeElement.tagName === "TEXTAREA"){
        typing = true;
       } else{typing = false;}
      
      
      if(event.keyCode === 220 && !typing && doms.body.style.display === "block" && doms.bottom.style.display === "none"){
        doms.body.style.display = "none";
      }
      
      if(event.keyCode === 220 && !typing && doms.bottom.style.display === "block"){
        doms.bottom.style.display = "none";
      }
    });
  };
  
  
  var bodyController = (function(){
    var bodyText, selectedBody;
    var bodyCounter = 0;
    var beingViewed = false;
    var bodyObjects = [];
    
    var bodyKeys = function(){
      document.addEventListener("keyup", function(event){
        var typing;
        if(document.activeElement.tagName === "TEXTAREA"){
          typing = true;
         } else{typing = false;}

        if(doms.body.style.display === "block" && event.keyCode === 187 && !typing && !beingViewed){
          if(bodyCounter === 2){
            doms.body4.classList.remove("s6");
            doms.body4.classList.add("s4");
            doms.body5.classList.remove("s6");
            doms.body5.classList.add("s4");
            doms.body6.classList.remove("w3-hide");
            bodyCounter++;
          }
          
          if(bodyCounter === 1){
            doms.body4.classList.remove("s12");
            doms.body4.classList.add("s6");
            doms.body5.classList.remove("w3-hide");
            bodyCounter++;
          }
          
          if(bodyCounter === 0){
            doms.secondBodyRow.classList.remove("w3-hide");
            bodyCounter++;
          }
        }
      });
      
      document.addEventListener("keyup", function(event){
        var typing;
        if(document.activeElement.tagName === "TEXTAREA"){
          typing = true;
         } else{typing = false;}

        if(doms.body.style.display === "block" && event.keyCode === 189 && !typing && !beingViewed){
          if(bodyCounter === 1){
            doms.secondBodyRow.classList.add("w3-hide");
            bodyCounter--;
          }
          
          if(bodyCounter === 2){
            doms.body5.classList.add("w3-hide");
            doms.body4.classList.remove("s6");
            doms.body4.classList.add("s12");
            bodyCounter--;
          }
          
          if(bodyCounter === 3){
            doms.body6.classList.add("w3-hide");
            doms.body5.classList.remove("s4");
            doms.body5.classList.add("s6");
            doms.body4.classList.remove("s4");
            doms.body4.classList.add("s6");
            bodyCounter--;
          }
        }
      });
    };
    
    var mostRecentBodyText = function(){
      document.addEventListener("click", function(){
        if(document.activeElement.className === "bodyText"){
          bodyText = document.activeElement.id;
        }
      });
    };
    
    
    var bodyObject = function(name, evidences){
      this.name = name;
      this.evidences = evidences;
    };
    
    
    
    var checkForBodyObject = function(name){
      var boolean = false;
      
      for(i=0;i<bodyObjects.length;i++){
        if(bodyObjects[i].name === name){
          boolean = true;
        }
      }
      
      return{
        containsBody: boolean
      }
    };
    
    
    
    var indexOfBodyObject = function(name){
      var location = -1;
      
      for(i=0;i<bodyObjects.length;i++){
        if(bodyObjects[i].name === name){
          location = i;
        }
      }
      
      return{
        index: location
      }
    };
    

    
    var storeEvidence = function(index){
      for(i=0;i<6;i++){
        //j=i+1;
        //k=index+1;
        bodyObjects[index].evidences[i] = document.getElementById("evidenceText" + (i+1)).value;
      }
    };
    
   
      
   var loadEvidence = function(index){
     for(i=0;i<6;i++){
        document.getElementById("evidenceText" + (i+1)).value = bodyObjects[index].evidences[i];
      }
   };
   
    
    var setEvidenceColor = function(body){
      if(body === "body1"){       
        doms.evidence1.style.backgroundColor = "rgba(0,35,165,0.8)";
        doms.evidence2.style.backgroundColor = "rgba(35,70,165,0.8)";
        doms.evidence3.style.backgroundColor = "rgba(70,105,165,0.8)";
        doms.evidence4.style.backgroundColor = "rgba(105,140,165,0.8)";
        doms.evidence5.style.backgroundColor = "rgba(140,175,165,0.8)";
        doms.evidence6.style.backgroundColor = "rgba(175,210,165,0.8)";
      }
      else if(body === "body2"){
        doms.evidence1.style.backgroundColor = "rgba(35,165,0,0.8)";
        doms.evidence2.style.backgroundColor = "rgba(70,165,35,0.8)";
        doms.evidence3.style.backgroundColor = "rgba(105,165,75,0.8)";
        doms.evidence4.style.backgroundColor = "rgba(140,165,105,0.8)";
        doms.evidence5.style.backgroundColor = "rgba(175,165,140,0.8)";
        doms.evidence6.style.backgroundColor = "rgba(210,165,175,0.8)";
      }
      else if(body === "body3"){        
        doms.evidence1.style.backgroundColor = "rgba(165,0,35,0.8)";
        doms.evidence2.style.backgroundColor = "rgba(165,35,70,0.8)";
        doms.evidence3.style.backgroundColor = "rgba(165,70,105,0.8)";
        doms.evidence4.style.backgroundColor = "rgba(165,105,140,0.8)";
        doms.evidence5.style.backgroundColor = "rgba(165,140,175,0.8)";
        doms.evidence6.style.backgroundColor = "rgba(165,175,210,0.8)";
      }
      else if(body === "body4"){
        doms.evidence1.style.backgroundColor = "rgba(0,35,90,0.8)";
        doms.evidence2.style.backgroundColor = "rgba(35,70,90,0.8)";
        doms.evidence3.style.backgroundColor = "rgba(70,105,90,0.8)";
        doms.evidence4.style.backgroundColor = "rgba(105,140,90,0.8)";
        doms.evidence5.style.backgroundColor = "rgba(140,175,90,0.8)";
        doms.evidence6.style.backgroundColor = "rgba(175,210,90,0.8)";        
      }
      else if(body === "body5"){
        doms.evidence1.style.backgroundColor = "rgba(35,90,0,0.8)";
        doms.evidence2.style.backgroundColor = "rgba(70,90,35,0.8)";
        doms.evidence3.style.backgroundColor = "rgba(105,90,75,0.8)";
        doms.evidence4.style.backgroundColor = "rgba(140,90,105,0.8)";
        doms.evidence5.style.backgroundColor = "rgba(175,90,140,0.8)";
        doms.evidence6.style.backgroundColor = "rgba(210,90,175,0.8)";
      }
      else if(body === "body6"){
        doms.evidence1.style.backgroundColor = "rgba(90,0,35,0.8)";
        doms.evidence2.style.backgroundColor = "rgba(90,35,70,0.8)";
        doms.evidence3.style.backgroundColor = "rgba(90,70,125,0.8)";
        doms.evidence4.style.backgroundColor = "rgba(90,105,140,0.8)";
        doms.evidence5.style.backgroundColor = "rgba(90,140,175,0.8)";
        doms.evidence6.style.backgroundColor = "rgba(90,175,210,0.8)";
      }
    };
    
    var select = function(){
      document.addEventListener("click", function(){
        if(document.activeElement.id === "selectBody"){
          if(doms.selectBody.innerHTML === "Select"){
            var newItem;
            if(bodyText === "bodyText1"){
              selectedBody = "body1";
              
              
              doms.body1.classList.remove("s4");
              doms.body2.classList.add("w3-hide");
              doms.body3.classList.add("w3-hide");
              if(bodyCounter > 0){
                doms.secondBodyRow.classList.add("w3-hide");
              }
              doms.body1.classList.add("s12");
              
              
              if(!checkForBodyObject(selectedBody).containsBody){
                newItem = new bodyObject(selectedBody, ["", "", "", "", "", ""]);
                bodyObjects.push(newItem);
              }
              
              
              doms.middleHeader.innerHTML = "Body #1";
              doms.middle.style.display = "block";
              
              loadEvidence(indexOfBodyObject(selectedBody).index);
              
              doms.selectBody.innerHTML = "View";
              beingViewed = true;
              
              setEvidenceColor(selectedBody);
            }  
            
            if(bodyText === "bodyText2"){
              selectedBody = "body2";
              
              
              doms.body2.classList.remove("s4");
              doms.body1.classList.add("w3-hide");
              doms.body3.classList.add("w3-hide");
              if(bodyCounter > 0){
                doms.secondBodyRow.classList.add("w3-hide");
              }
              doms.body2.classList.add("s12");
              
              
              if(!checkForBodyObject(selectedBody).containsBody){
                newItem = new bodyObject(selectedBody, ["", "", "", "", "", ""]);
                bodyObjects.push(newItem);
              }
              
              
              doms.middleHeader.innerHTML = "Body #2";
              doms.middle.style.display = "block";
              
              loadEvidence(indexOfBodyObject(selectedBody).index);
              
              doms.selectBody.innerHTML = "View";
              beingViewed = true;
              
              setEvidenceColor(selectedBody);
            }
            
            if(bodyText === "bodyText3"){
              selectedBody = "body3";
              
              
              doms.body3.classList.remove("s4");
              doms.body1.classList.add("w3-hide");
              doms.body2.classList.add("w3-hide");
              if(bodyCounter > 0){
                doms.secondBodyRow.classList.add("w3-hide");
              }
              doms.body3.classList.add("s12");
              
              
              if(!checkForBodyObject(selectedBody).containsBody){
                newItem = new bodyObject(selectedBody, ["", "", "", "", "", ""]);
                bodyObjects.push(newItem);
              }
              
              
              doms.middleHeader.innerHTML = "Body #3";
              doms.middle.style.display = "block";
              
              loadEvidence(indexOfBodyObject(selectedBody).index);
              
              doms.selectBody.innerHTML = "View";
              beingViewed = true;
              
              setEvidenceColor(selectedBody);
            }
            
            if(bodyText === "bodyText4"){
              if(bodyCounter === 1){
                selectedBody = "body4"
                
                doms.firstBodyRow.classList.add("w3-hide");
                
                
                if(!checkForBodyObject(selectedBody).containsBody){
                  newItem = new bodyObject(selectedBody, ["", "", "", "", "", ""]);
                  bodyObjects.push(newItem);
                }
                
                
                doms.middleHeader.innerHTML = "Body #4";
                doms.middle.style.display = "block";
                
                loadEvidence(indexOfBodyObject(selectedBody).index);

                doms.selectBody.innerHTML = "View";
                beingViewed = true;
                
                setEvidenceColor(selectedBody);
              }
              else if(bodyCounter === 2){
                selectedBody = "body4"
                
                doms.body4.classList.remove("s6");
                doms.body5.classList.add("w3-hide");
                
                doms.firstBodyRow.classList.add("w3-hide");
                
                doms.body4.classList.add("s12");
                
                
                if(!checkForBodyObject(selectedBody).containsBody){
                  newItem = new bodyObject(selectedBody, ["", "", "", "", "", ""]);
                  bodyObjects.push(newItem);
                }
                
                
                doms.middleHeader.innerHTML = "Body #4";
                doms.middle.style.display = "block";
                
                loadEvidence(indexOfBodyObject(selectedBody).index);

                doms.selectBody.innerHTML = "View";
                beingViewed = true;
                
                setEvidenceColor(selectedBody);
              }
              else if(bodyCounter === 3){
                selectedBody = "body4"
                
                doms.body4.classList.remove("s4");
                doms.body5.classList.add("w3-hide");
                doms.body6.classList.add("w3-hide");
                
                doms.firstBodyRow.classList.add("w3-hide");
                
                doms.body4.classList.add("s12");
                
                
                if(!checkForBodyObject(selectedBody).containsBody){
                  newItem = new bodyObject(selectedBody, ["", "", "", "", "", ""]);
                  bodyObjects.push(newItem);
                }
                
                
                doms.middleHeader.innerHTML = "Body #4";
                doms.middle.style.display = "block";
                
                loadEvidence(indexOfBodyObject(selectedBody).index);

                doms.selectBody.innerHTML = "View";
                beingViewed = true;
                
                setEvidenceColor(selectedBody);
              }
            }
            
            if(bodyText === "bodyText5"){
              if(bodyCounter === 2){
                selectedBody = "body5"
                
                doms.body5.classList.remove("s6");
                doms.body4.classList.add("w3-hide");
                
                doms.firstBodyRow.classList.add("w3-hide");
                
                doms.body5.classList.add("s12");
                
                
                if(!checkForBodyObject(selectedBody).containsBody){
                  newItem = new bodyObject(selectedBody, ["", "", "", "", "", ""]);
                  bodyObjects.push(newItem);
                }
                
              
                doms.middleHeader.innerHTML = "Body #5";
                doms.middle.style.display = "block";
                
                loadEvidence(indexOfBodyObject(selectedBody).index);

                doms.selectBody.innerHTML = "View";
                beingViewed = true;
                
                setEvidenceColor(selectedBody);
              }
              else if(bodyCounter === 3){
                selectedBody = "body5"
                
                doms.body5.classList.remove("s4");
                doms.body4.classList.add("w3-hide");
                doms.body6.classList.add("w3-hide");
                
                doms.firstBodyRow.classList.add("w3-hide");
                
                doms.body5.classList.add("s12");
                
                
                if(!checkForBodyObject(selectedBody).containsBody){
                  newItem = new bodyObject(selectedBody, ["", "", "", "", "", ""]);
                  bodyObjects.push(newItem);
                }
                
                
                doms.middleHeader.innerHTML = "Body #5";
                doms.middle.style.display = "block";
                
                loadEvidence(indexOfBodyObject(selectedBody).index);

                doms.selectBody.innerHTML = "View";
                beingViewed = true;
                
                setEvidenceColor(selectedBody);
              }
            }
            
            if(bodyText === "bodyText6"){
              if(bodyCounter === 3){
                selectedBody = "body6"
                
                doms.body6.classList.remove("s4");
                doms.body4.classList.add("w3-hide");
                doms.body5.classList.add("w3-hide");
                
                doms.firstBodyRow.classList.add("w3-hide");
                
                doms.body6.classList.add("s12");
                
                
                if(!checkForBodyObject(selectedBody).containsBody){
                  newItem = new bodyObject(selectedBody, ["", "", "", "", "", ""]);
                  bodyObjects.push(newItem);
                }
                
              
                doms.middleHeader.innerHTML = "Body #6";
                doms.middle.style.display = "block";
                
                loadEvidence(indexOfBodyObject(selectedBody).index);
                
                doms.selectBody.innerHTML = "View";
                beingViewed = true;
                
                setEvidenceColor(selectedBody);
              }
            }
          }
          
          else if(doms.selectBody.innerHTML === "View"){
            if(selectedBody === "body1"){
              doms.body1.classList.remove("s12");
              doms.body2.classList.remove("w3-hide");
              doms.body3.classList.remove("w3-hide");
              if(bodyCounter > 0){
                doms.secondBodyRow.classList.remove("w3-hide");
              }
              doms.body1.classList.add("s4");
              
              doms.middle.style.display = "none";
              
              
              doms.selectBody.innerHTML = "Select";
              beingViewed = false;
            }
            
            if(selectedBody === "body2"){
              doms.body2.classList.remove("s12");
              doms.body1.classList.remove("w3-hide");
              doms.body3.classList.remove("w3-hide");
              if(bodyCounter > 0){
                doms.secondBodyRow.classList.remove("w3-hide");
              }
              doms.body2.classList.add("s4");
              
              doms.middle.style.display = "none";
              
              doms.selectBody.innerHTML = "Select";
              beingViewed = false;
            }
            
            if(selectedBody === "body3"){
              doms.body3.classList.remove("s12");
              doms.body1.classList.remove("w3-hide");
              doms.body2.classList.remove("w3-hide");
              if(bodyCounter > 0){
                doms.secondBodyRow.classList.remove("w3-hide");
              }
              doms.body3.classList.add("s4");
              
              doms.middle.style.display = "none";
              
              
              doms.selectBody.innerHTML = "Select";
              beingViewed = false;
            }
            
            if(selectedBody === "body4"){
              if(bodyCounter === 1){
                doms.firstBodyRow.classList.remove("w3-hide");
                
                doms.middle.style.display = "none";
                
                doms.selectBody.innerHTML = "Select";
                beingViewed = false;
              }
              else if(bodyCounter === 2){
                doms.body4.classList.remove("s12");
                doms.body5.classList.remove("w3-hide");
                
                doms.firstBodyRow.classList.remove("w3-hide");
                
                doms.body4.classList.add("s6");
                
                doms.middle.style.display = "none";
                
                doms.selectBody.innerHTML = "Select";
                beingViewed = false;
              }
              else if(bodyCounter === 3){
                doms.body4.classList.remove("s12");
                doms.body5.classList.remove("w3-hide");
                doms.body6.classList.remove("w3-hide");
                
                doms.firstBodyRow.classList.remove("w3-hide");
                
                doms.body4.classList.add("s4");
                
                doms.middle.style.display = "none";
                
                doms.selectBody.innerHTML = "Select";
                beingViewed = false;
              }
            }
            
            if(selectedBody === "body5"){
              if(bodyCounter === 2){
                doms.body5.classList.remove("s12");
                doms.body4.classList.remove("w3-hide");
                
                doms.firstBodyRow.classList.remove("w3-hide");
                
                doms.body5.classList.add("s6");
                
                doms.middle.style.display = "none";
                
                doms.selectBody.innerHTML = "Select";
                beingViewed = false;
              }
              else if(bodyCounter === 3){
                doms.body5.classList.remove("s12");
                doms.body4.classList.remove("w3-hide");
                doms.body6.classList.remove("w3-hide");
                
                doms.firstBodyRow.classList.remove("w3-hide");
                
                doms.body5.classList.add("s4");
                
                doms.middle.style.display = "none";
                
                doms.selectBody.innerHTML = "Select";
                beingViewed = false;
              }
            }
            
            if(selectedBody === "body6"){
              if(bodyCounter === 3){
                doms.body6.classList.remove("s12");
                doms.body4.classList.remove("w3-hide");
                doms.body5.classList.remove("w3-hide");
                
                doms.firstBodyRow.classList.remove("w3-hide");
                
                doms.body6.classList.add("s4");
                
                doms.middle.style.display = "none";
                
                doms.selectBody.innerHTML = "Select";
                beingViewed = false;
              }
            }
          }
        }
      });
    };
    
    var evidenceController = (function(){
      var evidenceText, selectedEvidence;
      var evidenceCounter = 0;
      var evidenceBeingViewed = false;
      var evidenceObjects = [];
      
      var evidenceKeys = function(){
      document.addEventListener("keyup", function(event){
        var typing;
        if(document.activeElement.tagName === "TEXTAREA"){
          typing = true;
         } else{typing = false;}

        if(doms. middle.style.display === "block" && event.keyCode === 187 && !typing && !evidenceBeingViewed){
          if(evidenceCounter === 2){
            doms.evidence4.classList.remove("s6");
            doms.evidence4.classList.add("s4");
            doms.evidence5.classList.remove("s6");
            doms.evidence5.classList.add("s4");
            doms.evidence6.classList.remove("w3-hide");
            evidenceCounter++;
          }
          
          if(evidenceCounter === 1){
            doms.evidence4.classList.remove("s12");
            doms.evidence4.classList.add("s6");
            doms.evidence5.classList.remove("w3-hide");
            evidenceCounter++;
          }
          
          if(evidenceCounter === 0){
            doms.secondEvidenceRow.classList.remove("w3-hide");
            evidenceCounter++;
          }
        }
      });
      
      document.addEventListener("keyup", function(event){
        var typing;
        if(document.activeElement.tagName === "TEXTAREA"){
          typing = true;
         } else{typing = false;}

        if(doms.body.style.display === "block" && event.keyCode === 189 && !typing && !evidenceBeingViewed){
          if(evidenceCounter === 1){
            doms.secondEvidenceRow.classList.add("w3-hide");
            evidenceCounter--;
          }
          
          if(evidenceCounter === 2){
            doms.evidence5.classList.add("w3-hide");
            doms.evidence4.classList.remove("s6");
            doms.evidence4.classList.add("s12");
            evidenceCounter--;
          }
          
          if(evidenceCounter === 3){
            doms.evidence6.classList.add("w3-hide");
            doms.evidence5.classList.remove("s4");
            doms.evidence5.classList.add("s6");
            doms.evidence4.classList.remove("s4");
            doms.evidence4.classList.add("s6");
            evidenceCounter--;
          }
        }
      });
    };
      
    var mostRecentEvidenceText = function(){
      document.addEventListener("click", function(){
        if(document.activeElement.className === "evidenceText"){
          evidenceText = document.activeElement.id;
        }
      });
    };
      
    var evidenceObject = function(name, parent, info){
      this.name = name;
      this.parent = parent;
      this.info = info;
    };
    
    var checkForEvidenceObject = function(name, parent){
      var boolean = false;
      
      for(i=0;i<evidenceObjects.length;i++){
        if(evidenceObjects[i].name === name && evidenceObjects[i].parent === parent){
          boolean = true;
        }
      }
      
      return{
        containsEvidence: boolean
      }
    };
      
    var indexOfEvidenceObject = function(name, parent){
      var location = -1;
      
      for(i=0;i<evidenceObjects.length;i++){
        if(evidenceObjects[i].name === name && evidenceObjects[i].parent === parent){
          location = i;
        }
      }
      
      return{
        index: location
      }
    };
      
    var storeInfo = function(index){
      evidenceObjects[index].info[0] = document.getElementById("urlText").value;
      evidenceObjects[index].info[1] = document.getElementById("citationText").value;
    };
      
   var loadInfo = function(index){
     document.getElementById("urlText").value = evidenceObjects[index].info[0];
     document.getElementById("citationText").value = evidenceObjects[index].info[1];
   };
      
    var selectEvidence= function(){
      document.addEventListener("click", function(){
        if(document.activeElement.id === "selectEvidence"){
          if(doms.selectEvidence.innerHTML === "Select"){
            var newItem;
            if(evidenceText === "evidenceText1"){
              selectedEvidence = "evidence1";
              
              
              doms.evidence1.classList.remove("s4");
              doms.evidence2.classList.add("w3-hide");
              doms.evidence3.classList.add("w3-hide");
              if(evidenceCounter > 0){
                doms.secondEvidenceRow.classList.add("w3-hide");
              }
              doms.evidence1.classList.add("s12");
              
              if(!checkForEvidenceObject(selectedEvidence, selectedBody).containsEvidence){
                newItem = new evidenceObject(selectedEvidence, selectedBody, ["", ""]);
                evidenceObjects.push(newItem);
              }            
              
              doms.info.classList.remove("w3-hide");
              
              loadInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
              
              doms.selectEvidence.innerHTML = "View";
              doms.saveInfo.innerHTML = "Save URLs & Citations";
              doms.selectBody.style.display = "none";
              evidenceBeingViewed = true;
            }  
            
            if(evidenceText === "evidenceText2"){
              selectedEvidence = "evidence2";
              
              
              doms.evidence2.classList.remove("s4");
              doms.evidence1.classList.add("w3-hide");
              doms.evidence3.classList.add("w3-hide");
              if(evidenceCounter > 0){
                doms.secondEvidenceRow.classList.add("w3-hide");
              }
              doms.evidence2.classList.add("s12");
              
              if(!checkForEvidenceObject(selectedEvidence, selectedBody).containsEvidence){
                newItem = new evidenceObject(selectedEvidence, selectedBody, ["", ""]);
                evidenceObjects.push(newItem);
              }          
              
              doms.info.classList.remove("w3-hide");
              
              loadInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
              
              
              doms.selectEvidence.innerHTML = "View";
              doms.saveInfo.innerHTML = "Save URLs & Citations";
              doms.selectBody.style.display = "none";
              evidenceBeingViewed = true;
            }
            
            if(evidenceText === "evidenceText3"){
              selectedEvidence = "evidence3";
              
              
              doms.evidence3.classList.remove("s4");
              doms.evidence1.classList.add("w3-hide");
              doms.evidence2.classList.add("w3-hide");
              if(evidenceCounter > 0){
                doms.secondEvidenceRow.classList.add("w3-hide");
              }
              doms.evidence3.classList.add("s12");
              
              if(!checkForEvidenceObject(selectedEvidence, selectedBody).containsEvidence){
                newItem = new evidenceObject(selectedEvidence, selectedBody, ["", ""]);
                evidenceObjects.push(newItem);
              }          
              
              doms.info.classList.remove("w3-hide");
              
              loadInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
              
              doms.selectEvidence.innerHTML = "View";
              doms.saveInfo.innerHTML = "Save URLs & Citations";
              doms.selectBody.style.display = "none";
              evidenceBeingViewed = true;
            }
            
            if(evidenceText === "evidenceText4"){
              if(evidenceCounter === 1){
                selectedEvidence = "evidence4"
                
                doms.firstEvidenceRow.classList.add("w3-hide");
                
                if(!checkForEvidenceObject(selectedEvidence, selectedBody).containsEvidence){
                  newItem = new evidenceObject(selectedEvidence,selectedBody, ["", ""]);
                  evidenceObjects.push(newItem);
                }          
                
                doms.info.classList.remove("w3-hide");
                
                loadInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
                
                doms.selectEvidence.innerHTML = "View";
                doms.saveInfo.innerHTML = "Save URLs & Citations";
                doms.selectBody.style.display = "none";
                evidenceBeingViewed = true;
              }
              else if(evidenceCounter === 2){
                selectedEvidence = "evidence4"
                
                doms.evidence4.classList.remove("s6");
                doms.evidence5.classList.add("w3-hide");
                
                doms.firstEvidenceRow.classList.add("w3-hide");
                
                doms.evidence4.classList.add("s12");
                
                if(!checkForEvidenceObject(selectedEvidence, selectedBody).containsEvidence){
                  newItem = new evidenceObject(selectedEvidence, selectedBody, ["", ""]);
                  evidenceObjects.push(newItem);
                }          
                
                doms.info.classList.remove("w3-hide");
                
                loadInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
                
                doms.selectEvidence.innerHTML = "View";
                doms.saveInfo.innerHTML = "Save URLs & Citations";
                doms.selectBody.style.display = "none";
                evidenceBeingViewed = true;
              }
              else if(evidenceCounter === 3){
                selectedEvidence = "evidence4"
                
                doms.evidence4.classList.remove("s4");
                doms.evidence5.classList.add("w3-hide");
                doms.evidence6.classList.add("w3-hide");
                
                doms.firstEvidenceRow.classList.add("w3-hide");
                
                doms.evidence4.classList.add("s12");
                
                if(!checkForEvidenceObject(selectedEvidence, selectedBody).containsEvidence){
                  newItem = new evidenceObject(selectedEvidence, selectedBody, ["", ""]);
                  evidenceObjects.push(newItem);
                }          
                
                doms.info.classList.remove("w3-hide");
                
                loadInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
                
                doms.selectEvidence.innerHTML = "View";
                doms.saveInfo.innerHTML = "Save URLs & Citations";
                doms.selectBody.style.display = "none";
                evidenceBeingViewed = true;
              }
            }
            
            if(evidenceText === "evidenceText5"){
              if(evidenceCounter === 2){
                selectedEvidence = "evidence5"
                
                doms.evidence5.classList.remove("s6");
                doms.evidence4.classList.add("w3-hide");
                
                doms.firstEvidenceRow.classList.add("w3-hide");
                
                doms.evidence5.classList.add("s12");
                
                if(!checkForEvidenceObject(selectedEvidence, selectedBody).containsEvidence){
                  newItem = new evidenceObject(selectedEvidence, selectedBody, ["", ""]);
                  evidenceObjects.push(newItem);
                }          
                
                doms.info.classList.remove("w3-hide");
                
                loadInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
                
                doms.selectEvidence.innerHTML = "View";
                doms.saveInfo.innerHTML = "Save URLs & Citations";
                doms.selectBody.style.display = "none";
                evidenceBeingViewed = true;
              }
              else if(evidenceCounter === 3){
                selectedEvidence = "evidence5"
                
                doms.evidence5.classList.remove("s4");
                doms.evidence4.classList.add("w3-hide");
                doms.evidence6.classList.add("w3-hide");
                
                doms.firstEvidenceRow.classList.add("w3-hide");
                
                doms.evidence5.classList.add("s12");
                
                if(!checkForEvidenceObject(selectedEvidence, selectedBody).containsEvidence){
                  newItem = new evidenceObject(selectedEvidence, selectedBody, ["", ""]);
                  evidenceObjects.push(newItem);
                }          
                
                doms.info.classList.remove("w3-hide");
                
                loadInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
                
                doms.selectEvidence.innerHTML = "View";
                doms.saveInfo.innerHTML = "Save URLs & Citations";
                doms.selectBody.style.display = "none";
                evidenceBeingViewed = true;
              }
            }
            
            if(evidenceText === "evidenceText6"){
              if(evidenceCounter === 3){
                selectedEvidence = "evidence6"
                
                doms.evidence6.classList.remove("s4");
                doms.evidence4.classList.add("w3-hide");
                doms.evidence5.classList.add("w3-hide");
                
                doms.firstEvidenceRow.classList.add("w3-hide");
                
                doms.evidence6.classList.add("s12");
                
                if(!checkForEvidenceObject(selectedEvidence, selectedBody).containsEvidence){
                  newItem = new evidenceObject(selectedEvidence, selectedBody, ["", ""]);
                  evidenceObjects.push(newItem);
                }          
                
                doms.info.classList.remove("w3-hide");
                
                loadInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
                
                doms.selectEvidence.innerHTML = "View";
                doms.saveInfo.innerHTML = "Save URLs & Citations";
                doms.selectBody.style.display = "none";
                evidenceBeingViewed = true;
              }
            }
          }
          
          else if(doms.selectEvidence.innerHTML === "View"){
            if(selectedEvidence === "evidence1"){
              doms.evidence1.classList.remove("s12");
              doms.evidence2.classList.remove("w3-hide");
              doms.evidence3.classList.remove("w3-hide");
              if(evidenceCounter > 0){
                doms.secondEvidenceRow.classList.remove("w3-hide");
              }
              doms.evidence1.classList.add("s4");
              
              doms.info.classList.add("w3-hide");
              
              
              doms.selectEvidence.innerHTML = "Select";
              doms.saveInfo.innerHTML = "Save All Evidence";
              doms.selectBody.style.display = "block";
              evidenceBeingViewed = false;
            }
            
            if(selectedEvidence === "evidence2"){
              doms.evidence2.classList.remove("s12");
              doms.evidence1.classList.remove("w3-hide");
              doms.evidence3.classList.remove("w3-hide");
              if(evidenceCounter > 0){
                doms.secondEvidenceRow.classList.remove("w3-hide");
              }
              doms.evidence2.classList.add("s4");
              
              doms.info.classList.add("w3-hide");
              
              doms.selectEvidence.innerHTML = "Select";
              doms.saveInfo.innerHTML = "Save All Evidence";
              doms.selectBody.style.display = "block";
              evidenceBeingViewed = false;
            }
            
            if(selectedEvidence === "evidence3"){
              doms.evidence3.classList.remove("s12");
              doms.evidence1.classList.remove("w3-hide");
              doms.evidence2.classList.remove("w3-hide");
              if(evidenceCounter > 0){
                doms.secondEvidenceRow.classList.remove("w3-hide");
              }
              doms.evidence3.classList.add("s4");
              
              doms.info.classList.add("w3-hide");
              
              
              doms.selectEvidence.innerHTML = "Select";
              doms.saveInfo.innerHTML = "Save All Evidence";
              doms.selectBody.style.display = "block";
              evidenceBeingViewed = false;
            }
            
            if(selectedEvidence === "evidence4"){
              if(evidenceCounter === 1){
                doms.firstEvidenceRow.classList.remove("w3-hide");
                
                doms.info.classList.add("w3-hide");
                
                doms.selectEvidence.innerHTML = "Select";
                doms.saveInfo.innerHTML = "Save All Evidence";
                doms.selectBody.style.display = "block";
                evidenceBeingViewed = false;
              }
              else if(evidenceCounter === 2){
                doms.evidence4.classList.remove("s12");
                doms.evidence5.classList.remove("w3-hide");
                
                doms.firstEvidenceRow.classList.remove("w3-hide");
                
                doms.evidence4.classList.add("s6");
                
                doms.info.classList.add("w3-hide");
                
                doms.selectEvidence.innerHTML = "Select";
                doms.saveInfo.innerHTML = "Save All Evidence";
                doms.selectBody.style.display = "block";
                evidenceBeingViewed = false;
              }
              else if(evidenceCounter === 3){
                console.log(evidenceCounter);
                doms.evidence4.classList.remove("s12");
                doms.evidence5.classList.remove("w3-hide");
                doms.evidence6.classList.remove("w3-hide");
                
                doms.firstEvidenceRow.classList.remove("w3-hide");
                
                doms.evidence4.classList.add("s4");
                
                doms.info.classList.add("w3-hide");
                
                doms.selectEvidence.innerHTML = "Select";
                doms.saveInfo.innerHTML = "Save All Evidence";
                doms.selectBody.style.display = "block";
                evidenceBeingViewed = false;
              }
            }
            
            if(selectedEvidence === "evidence5"){
              if(evidenceCounter === 2){
                doms.evidence5.classList.remove("s12");
                doms.evidence4.classList.remove("w3-hide");
                
                doms.firstEvidenceRow.classList.remove("w3-hide");
                
                doms.evidence5.classList.add("s6");
                
                doms.info.classList.add("w3-hide");
                
                doms.selectEvidence.innerHTML = "Select";
                doms.saveInfo.innerHTML = "Save All Evidence";
                doms.selectBody.style.display = "block";
                evidenceBeingViewed = false;
              }
              else if(evidenceCounter === 3){
                doms.evidence5.classList.remove("s12");
                doms.evidence4.classList.remove("w3-hide");
                doms.evidence6.classList.remove("w3-hide");
                
                doms.firstEvidenceRow.classList.remove("w3-hide");
                
                doms.evidence5.classList.add("s4");
                
                doms.info.classList.add("w3-hide");
                
                doms.selectEvidence.innerHTML = "Select";
                doms.saveInfo.innerHTML = "Save All Evidence";
                doms.selectBody.style.display = "block";
                evidenceBeingViewed = false;
              }
            }
            
            if(selectedEvidence === "evidence6"){
              if(evidenceCounter === 3){
                doms.evidence6.classList.remove("s12");
                doms.evidence4.classList.remove("w3-hide");
                doms.evidence5.classList.remove("w3-hide");
                
                doms.firstEvidenceRow.classList.remove("w3-hide");
                
                doms.evidence6.classList.add("s4");
                
                doms.info.classList.add("w3-hide");
                
                doms.selectEvidence.innerHTML = "Select";
                doms.saveInfo.innerHTML = "Save All Evidence";
                doms.selectBody.style.display = "block";
                evidenceBeingViewed = false;
              }
            }
          }
        }
      });
    };
      
    var saveButton = function(){
      document.addEventListener("click", function(){
        if(document.activeElement.id === "saveInfo" && doms.saveInfo.innerHTML === "Save All Evidence"){
          storeEvidence(indexOfBodyObject(selectedBody).index);
        }else if(document.activeElement.id === "saveInfo"){
          storeInfo(indexOfEvidenceObject(selectedEvidence, selectedBody).index);
        }
      });
    };
      
    var infoClicks = function(){
      document.addEventListener("click", function(){
        if(document.activeElement.id === "urlText" && document.getElementById("urlText").value === ""){
          document.getElementById("urlText").value = "1. ";
        }
        
        if (document.activeElement.id === "citationText" && document.getElementById("citationText").value === ""){
          document.getElementById("citationText").value = "1. ";
        }
      });
    };
    
    var infoKeys = function(){
      document.addEventListener("keyup", function(event){
        if(event.keyCode === 13){
          if(document.activeElement.id === "urlText"){
            if(document.activeElement.value.match(/\n/gm) !== null){
              document.activeElement.value = document.activeElement.value + (document.activeElement.value.match(/\n/gm).length + 1) + ". ";
            }
          }
          
          if (document.activeElement.id === "citationText"){
            if(document.activeElement.value.match(/\n/gm) !== null){
              document.activeElement.value = document.activeElement.value + (document.activeElement.value.match(/\n/gm).length + 1) + ". ";
            }
          }
        }
        
        if(event.keyCode === 9){
            if(document.activeElement.id === "citationText"){
              if(document.getElementById("citationText").value === ""){
                document.getElementById("citationText").value = "1. "
              }
            }
          }
      });
    };


      return{
       keys: function(){
         evidenceKeys();
         infoKeys();
       },
        clicks: function(){
          mostRecentEvidenceText();
          selectEvidence();
          saveButton();
          infoClicks();
        },
        objects: evidenceObjects
      }
    })();
    return{
      keys: function(){
        bodyKeys();
      },
      clicks: function(){
        mostRecentBodyText();
        select();
      },
      objects: bodyObjects,
      evidenceControllerObjects: evidenceController.objects,
      evidenceControllerKeys: function(){
        evidenceController.keys();
      },
      evidenceControllerClicks: function(){
        evidenceController.clicks();
      }
    }
  })();
  return{
    init: function(){
      introKeys();
      bodyController.keys();
      bodyController.clicks();
      bodyController.evidenceControllerKeys();
      bodyController.evidenceControllerClicks();
    },
    bodyObjects: bodyController.objects,
    evidenceObjects: bodyController.evidenceControllerObjects
  }
})();

introController.init();
